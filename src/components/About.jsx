import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Cpu, Users, Zap } from 'lucide-react';

const About = () => {
  const bentoItems = [
    {
      title: "Collaboration",
      description: "I prioritize client collaboration, fostering open communication and transparency throughout the development process.",
      icon: <Users className="text-blue-400" size={32} />,
      className: "md:col-span-2 md:row-span-1",
      bg: "bg-blue-500/5"
    },
    {
      title: "Tech Stack",
      description: "Constantly evolving my toolkit with modern frameworks like React, Next.js, and Node.js.",
      icon: <Cpu className="text-purple-400" size={32} />,
      className: "md:col-span-1 md:row-span-2",
      bg: "bg-purple-500/5"
    },
    {
      title: "Performance",
      description: "Building fast, scalable, and SEO-optimized applications is my top priority.",
      icon: <Zap className="text-yellow-400" size={32} />,
      className: "md:col-span-1 md:row-span-1",
      bg: "bg-yellow-500/5"
    },
    {
      title: "Remote Work",
      description: "Highly flexible with time zones, based in India but working with clients globally.",
      icon: <Globe className="text-green-400" size={32} />,
      className: "md:col-span-1 md:row-span-1",
      bg: "bg-green-500/5"
    }
  ];

  return (
    <section id="about" className="py-32 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-gray-500 uppercase tracking-widest text-sm font-bold mb-4"
          >
            Know About Me
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold max-w-3xl leading-tight"
          >
            Full-Stack Developer and a little bit of everything.
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {bentoItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`${item.className} ${item.bg} border border-white/10 rounded-3xl p-8 backdrop-blur-sm hover:border-white/20 transition-all group`}
            >
              <div className="mb-6 p-3 w-fit bg-white/5 rounded-2xl group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h4 className="text-2xl font-bold mb-4">{item.title}</h4>
              <p className="text-gray-400 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="md:col-span-3 bg-gradient-to-r from-blue-600 to-purple-700 rounded-3xl p-12 mt-6 relative overflow-hidden group"
          >
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="text-center md:text-left">
                <h3 className="text-3xl md:text-5xl font-bold mb-4">Let's work together</h3>
                <p className="text-white/80 text-lg">I'm currently available for freelance projects and full-time roles.</p>
              </div>
              <a
                href="#contact"
                className="px-12 py-5 bg-white text-black rounded-full font-bold text-xl hover:scale-105 transition-transform"
              >
                Get In Touch
              </a>
            </div>
            {/* Decorative circles */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full blur-3xl -ml-32 -mb-32" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
