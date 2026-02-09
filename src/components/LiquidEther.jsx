import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const LiquidEtherShader = {
  uniforms: {
    uTime: { value: 0 },
    uColor1: { value: new THREE.Color('#030712') }, // Deepest Navy
    uColor2: { value: new THREE.Color('#1e1b4b') }, // Indigo/Blue
    uColor3: { value: new THREE.Color('#3b82f6') }, // Bright Blue
    uColor4: { value: new THREE.Color('#7c3aed') }, // Purple
  },
  vertexShader: `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = vec4(position, 1.0);
    }
  `,
  fragmentShader: `
    uniform float uTime;
    uniform vec3 uColor1;
    uniform vec3 uColor2;
    uniform vec3 uColor3;
    uniform vec3 uColor4;
    varying vec2 vUv;

    // Simplex noise functions
    vec3 permute(vec3 x) { return mod(((x*34.0)+1.0)*x, 289.0); }

    float snoise(vec2 v){
      const vec4 C = vec4(0.211324865405187, 0.366025403784439,
               -0.577350269189626, 0.024390243902439);
      vec2 i  = floor(v + dot(v, C.yy) );
      vec2 x0 = v -   i + dot(i, C.xx);
      vec2 i1;
      i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
      vec4 x12 = x0.xyxy + C.xxzz;
      x12.xy -= i1;
      i = mod(i, 289.0);
      vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
      + i.x + vec3(0.0, i1.x, 1.0 ));
      vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy),
        dot(x12.zw,x12.zw)), 0.0);
      m = m*m ;
      m = m*m ;
      vec3 x = 2.0 * fract(p * C.www) - 1.0;
      vec3 h = abs(x) - 0.5;
      vec3 ox = floor(x + 0.5);
      vec3 a0 = x - ox;
      m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
      vec3 g;
      g.x  = a0.x  * x0.x  + h.x  * x0.y;
      g.yz = a0.yz * x12.xz + h.yz * x12.yw;
      return 130.0 * dot(m, g);
    }

    void main() {
      vec2 uv = vUv;
      float t = uTime * 0.05;

      // Domain warping for "liquid" look
      vec2 q = vec2(0.0);
      q.x = snoise(uv + vec2(0.0, t));
      q.y = snoise(uv + vec2(1.0, t));

      vec2 r = vec2(0.0);
      r.x = snoise(uv + 1.0 * q + vec2(1.7, 9.2) + 0.15 * t);
      r.y = snoise(uv + 1.0 * q + vec2(8.3, 2.8) + 0.126 * t);

      float f = snoise(uv + r);

      vec3 color = mix(uColor1, uColor2, clamp((f*f)*4.0, 0.0, 1.0));
      color = mix(color, uColor3, clamp(length(q), 0.0, 1.0));
      color = mix(color, uColor4, clamp(length(r.x), 0.0, 1.0));

      // Boost bright spots and add ethereal glow
      color = color * f + (0.5 * f * f + 0.5 * f) * color;

      // Vignette to darken edges
      float vignette = 1.0 - length(uv - 0.5) * 1.5;
      color *= clamp(vignette, 0.0, 1.0);

      gl_FragColor = vec4(color, 1.0);
    }
  `,
};

const LiquidEtherPlane = () => {
  const meshRef = useRef();
  const uniforms = useMemo(() => {
    return {
      uTime: { value: 0 },
      uColor1: { value: new THREE.Color('#030712') },
      uColor2: { value: new THREE.Color('#1e1b4b') },
      uColor3: { value: new THREE.Color('#3b82f6') },
      uColor4: { value: new THREE.Color('#7c3aed') },
    };
  }, []);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.material.uniforms.uTime.value = state.clock.getElapsedTime();
    }
  });

  return (
    <mesh ref={meshRef}>
      <planeGeometry args={[2, 2]} />
      <shaderMaterial
        vertexShader={LiquidEtherShader.vertexShader}
        fragmentShader={LiquidEtherShader.fragmentShader}
        uniforms={uniforms}
      />
    </mesh>
  );
};

const LiquidEther = () => {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      <Canvas
        camera={{ position: [0, 0, 1] }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 2]}
      >
        <LiquidEtherPlane />
      </Canvas>
    </div>
  );
};

export default LiquidEther;
