import React, { Suspense, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial, Float } from '@react-three/drei';

const AnimatedShape = () => {
  const meshRef = useRef();
  const { scrollYProgress } = useScroll();

  // Transform scroll progress to rotation and position
  const rotationY = useTransform(scrollYProgress, [0, 1], [0, Math.PI * 2]);
  const positionY = useTransform(scrollYProgress, [0, 0.5, 1], [0, -2, -5]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.5, 0.5]);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.3;
      meshRef.current.rotation.y = rotationY.get();
      meshRef.current.position.y = positionY.get();
      const s = scale.get();
      meshRef.current.scale.set(s, s, s);
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <Sphere ref={meshRef} args={[1, 100, 200]} scale={2.4}>
        <MeshDistortMaterial
          color="#3b82f6"
          attach="material"
          distort={0.4}
          speed={1.5}
          roughness={0.2}
          metalness={0.8}
        />
      </Sphere>
    </Float>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[120vh] flex flex-col items-center justify-center pt-20 px-4 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
          <Suspense fallback={null}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={1} />
            <pointLight position={[-10, -10, -5]} color="#3b82f6" intensity={0.5} />
            <AnimatedShape />
          </Suspense>
        </Canvas>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="space-y-6"
        >
          <h2 className="text-blue-400 font-medium tracking-[0.2em] uppercase text-sm md:text-base">
            Available for new opportunities
          </h2>

          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-tight">
            Design. Build.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600">
              Innovate.
            </span>
          </h1>

          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            I'm <span className="text-white font-semibold">ABI BINU</span>, a Full-Stack Developer
            crafting high-performance web experiences with precision and passion.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 bg-white text-black rounded-full font-bold text-lg hover:bg-gray-200 transition-all"
            >
              Let's Connect
            </motion.a>
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 border border-white/20 text-white rounded-full font-bold text-lg hover:bg-white/5 transition-all backdrop-blur-sm"
            >
              View Projects
            </motion.a>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-gray-500 text-xs uppercase tracking-widest">Scroll to explore</span>
        <div className="w-px h-12 bg-gradient-to-b from-blue-500 to-transparent" />
      </motion.div>
    </section>
  );
};

export default Hero;
