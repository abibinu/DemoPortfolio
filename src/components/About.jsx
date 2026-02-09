import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-24 px-4 bg-darker/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            About <span className="text-primary">Me</span>
          </motion.h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-square rounded-2xl overflow-hidden border-2 border-primary/20 p-2">
              <div className="w-full h-full bg-gray-800 rounded-xl flex items-center justify-center overflow-hidden">
                <img
                  src={`${import.meta.env.BASE_URL}assets/profile.jpg`}
                  alt="Profile"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/400x400?text=ABI+BINU';
                  }}
                />
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-full blur-3xl -z-10" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl -z-10" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6 text-gray-300 text-lg leading-relaxed"
          >
            <p>
              Hello! I'm <span className="text-white font-semibold">ABI</span>, a passionate full-stack developer dedicated to building modern, user-friendly web applications. With a strong background in both front-end and back-end technologies, I love turning ideas into reality and solving real-world problems through code.
            </p>
            <p>
              My journey in tech has been driven by curiosity and a desire to create impactful digital experiences. I enjoy collaborating with others, learning new skills, and staying up-to-date with the latest trends in web development.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                <h4 className="text-primary font-bold text-2xl">4+</h4>
                <p className="text-sm text-gray-400">Projects Completed</p>
              </div>
              <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                <h4 className="text-primary font-bold text-2xl">Many</h4>
                <p className="text-sm text-gray-400">Skills Mastered</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
