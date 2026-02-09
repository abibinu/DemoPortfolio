import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Work', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <div className="fixed top-0 left-0 w-full z-[100] px-4 py-6 flex justify-center pointer-events-none">
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`
          pointer-events-auto
          flex items-center justify-between gap-12 px-6 py-3
          rounded-full border transition-all duration-500
          ${scrolled
            ? 'bg-black/60 backdrop-blur-xl border-white/10 shadow-2xl scale-100'
            : 'bg-transparent border-transparent scale-105'}
        `}
      >
        <a href="#home" className="text-xl font-black tracking-tighter text-white">
          AB<span className="text-blue-500">.</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-400 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <a href="mailto:abibinuofficial@gmail.com" className="p-2 text-gray-400 hover:text-white transition-colors">
            <Mail size={20} />
          </a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-white"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="fixed inset-0 z-[99] bg-black/95 backdrop-blur-2xl flex flex-col items-center justify-center pointer-events-auto"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-10 right-10 text-white"
            >
              <X size={32} />
            </button>
            <div className="flex flex-col items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-4xl font-bold text-white hover:text-blue-500 transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="flex gap-8 mt-12">
                <a href="https://github.com/abibinu" className="text-gray-400 hover:text-white"><Github size={32} /></a>
                <a href="https://www.linkedin.com/in/abi-binu-821560340/" className="text-gray-400 hover:text-white"><Linkedin size={32} /></a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
