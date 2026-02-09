import React, { useState, useEffect, Suspense } from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';

const Shape3D = () => {
  return (
    <Canvas>
      <Suspense fallback={null}>
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={1} />
        <directionalLight position={[3, 2, 1]} />
        <Sphere args={[1, 100, 200]} scale={2.4}>
          <MeshDistortMaterial
            color="#2f6bff"
            attach="material"
            distort={0.5}
            speed={2}
          />
        </Sphere>
      </Suspense>
    </Canvas>
  );
};

const Hero = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const professions = [
    "Full-Stack Developer",
    "Software Engineer",
    "Designer",
    "Programmer"
  ];

  useEffect(() => {
    let timer = setTimeout(() => {
      handleType();
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum]);

  const handleType = () => {
    const i = loopNum % professions.length;
    const fullText = professions[i];

    setText(isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1)
    );

    setTypingSpeed(isDeleting ? 50 : 150);

    if (!isDeleting && text === fullText) {
      setTimeout(() => setIsDeleting(true), 1500);
    } else if (isDeleting && text === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-4">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center w-full">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-primary font-bold tracking-widest uppercase mb-4">Welcome to my portfolio</h2>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Hi, I'm <span className="text-primary">ABI</span><br />
            <span className="text-4xl md:text-5xl text-gray-300">
              {text}<span className="animate-pulse">|</span>
            </span>
          </h1>
          <p className="text-gray-400 text-lg mb-8 max-w-lg">
            I'm a full-stack developer with a passion for creating user-friendly and visually appealing web applications.
          </p>
          <div className="flex space-x-4">
            <a
              href="#contact"
              className="px-8 py-3 bg-primary text-white rounded-full font-semibold hover:bg-secondary transition-all shadow-lg shadow-primary/20"
            >
              Contact Me
            </a>
            <a
              href="#projects"
              className="px-8 py-3 border border-gray-700 text-white rounded-full font-semibold hover:bg-white/5 transition-all"
            >
              View Work
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="h-[400px] md:h-[600px] relative"
        >
          <Shape3D />
          {/* We can put the profile image here or as a background for the shape */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
             {/* If we want to show the profile pic inside the shape we could use Decal or just show it separately */}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
