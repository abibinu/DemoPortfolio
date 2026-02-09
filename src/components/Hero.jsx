import React from 'react';
import { motion } from 'framer-motion';
import LiquidEther from './LiquidEther';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[120vh] flex flex-col items-center justify-center pt-20 px-4 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <LiquidEther />
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
