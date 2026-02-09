import React, { Suspense, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Icosahedron } from '@react-three/drei';

const TechShape = ({ scrollYProgress }) => {
  const meshRef = useRef();

  const rotationZ = useTransform(scrollYProgress, [0, 1], [0, Math.PI]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.5, 1.2, 0.8]);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
      meshRef.current.rotation.z = rotationZ.get();
      const s = scale.get();
      meshRef.current.scale.set(s, s, s);
    }
  });

  return (
    <Float speed={4} rotationIntensity={1} floatIntensity={2}>
      <Icosahedron ref={meshRef} args={[1, 15]} scale={1}>
        <MeshDistortMaterial
          color="#8b5cf6"
          attach="material"
          distort={0.3}
          speed={2}
          roughness={0.1}
          metalness={1}
        />
      </Icosahedron>
    </Float>
  );
};

const techStack = [
  "React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "Express.js",
  "PostgreSQL", "MongoDB", "Framer Motion", "Three.js", "AWS", "Docker",
  "Git", "Python", "GraphQL", "Redis", "Firebase", "Zustand"
];

const Skills = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  return (
    <section id="skills" ref={sectionRef} className="py-24 overflow-hidden bg-black relative">
      <div className="max-w-7xl mx-auto px-4 mb-16 relative z-10">
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-gray-500 uppercase tracking-widest text-sm font-bold mb-4"
        >
          My Skills
        </motion.h2>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold"
          >
            The Secret Sauce
          </motion.h3>

          <div className="w-full md:w-64 h-64 relative">
             <Canvas camera={{ position: [0, 0, 3] }}>
                <Suspense fallback={null}>
                   <ambientLight intensity={0.5} />
                   <pointLight position={[10, 10, 10]} intensity={1} />
                   <TechShape scrollYProgress={scrollYProgress} />
                </Suspense>
             </Canvas>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-8 relative z-10">
        {/* Marquee 1 */}
        <div className="flex whitespace-nowrap overflow-hidden py-4 border-y border-white/5">
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: "-50%" }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="flex gap-12 items-center text-5xl md:text-7xl font-black uppercase text-white/10"
          >
            {Array(4).fill(techStack).flat().map((tech, i) => (
              <span key={i} className="hover:text-blue-500 transition-colors cursor-default">
                {tech}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Marquee 2 - Reverse */}
        <div className="flex whitespace-nowrap overflow-hidden py-4">
          <motion.div
            initial={{ x: "-50%" }}
            animate={{ x: 0 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="flex gap-12 items-center text-5xl md:text-7xl font-black uppercase text-white/20"
          >
            {[...Array(4)].fill([...techStack].reverse()).flat().map((tech, i) => (
              <span key={i} className="hover:text-purple-500 transition-colors cursor-default">
                {tech}
              </span>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 mt-20 grid md:grid-cols-3 gap-12 relative z-10">
        {[
          { title: "Front-end", desc: "Crafting immersive user interfaces with React, Next.js, and advanced CSS techniques. I focus on performance, accessibility, and smooth interactions." },
          { title: "Back-end", desc: "Building robust server-side logic and scalable database architectures using Node.js, Python, and various SQL/NoSQL databases." },
          { title: "DevOps & More", desc: "Ensuring seamless deployment and reliability through Docker, AWS, and CI/CD pipelines. I value clean code and efficient workflows." }
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="p-8 border border-white/10 rounded-3xl bg-white/5 backdrop-blur-sm hover:border-white/20 transition-all"
          >
            <h4 className="text-2xl font-bold mb-4">{item.title}</h4>
            <p className="text-gray-400">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
