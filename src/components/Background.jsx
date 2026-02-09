import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const Stars = () => {
  const ref = useRef();

  const particlesCount = 5000;
  const positions = useMemo(() => {
    const pos = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 100;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 100;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 100;
    }
    return pos;
  }, []);

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particlesCount}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.05} color="#2f6bff" transparent opacity={0.6} sizeAttenuation={true} />
    </points>
  );
};

const Background = () => {
  return (
    <div className="fixed inset-0 -z-10 bg-darker">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <color attach="background" args={['#020617']} />
        <ambientLight intensity={0.5} />
        <Stars />
      </Canvas>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-darker/50 to-darker pointer-events-none" />
    </div>
  );
};

export default Background;
