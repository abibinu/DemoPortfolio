import React from 'react';
import { motion } from 'framer-motion';

const Background = () => {
  return (
    <div className="fixed inset-0 -z-10 bg-black overflow-hidden">
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-50 contrast-150" />
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />

      {/* Vignette */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/50" />
    </div>
  );
};

export default Background;
