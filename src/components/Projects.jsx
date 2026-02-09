import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, ArrowUpRight } from 'lucide-react';

const projects = [
  {
    id: "01",
    type: "Web App",
    title: "E-Commerce Platform",
    description: "A comprehensive digital marketplace with seamless user authentication and robust product management. Optimized for high-speed transactions and modern user experience.",
    tags: ["PHP", "MongoDB", "Tailwind CSS"],
    github: "https://github.com/abibinu/E-COMMERCE_SITE",
    color: "from-blue-600 to-indigo-700"
  },
  {
    id: "02",
    type: "Mobile App",
    title: "Mental Health Companion",
    description: "An intuitive mobile companion designed to support mental well-being through real-time chat and progress tracking. Built with performance and privacy in mind.",
    tags: ["Flutter", "Node.js", "PostgreSQL"],
    github: "https://github.com/abibinu/MENTAL_HEALTH_APP",
    color: "from-purple-600 to-pink-700"
  },
  {
    id: "03",
    type: "ML Solution",
    title: "ML Disease Prediction",
    description: "Advanced machine learning implementation for predictive diagnostics. Analyzes symptom patterns with high accuracy to assist in early disease detection.",
    tags: ["Python", "Scikit-Learn", "FastAPI"],
    github: "https://github.com/abibinu/ML_projects",
    color: "from-emerald-600 to-teal-700"
  },
  {
    id: "04",
    type: "FinTech",
    title: "Personal Trading Bot",
    description: "Automated market analysis and trading execution system. Leverages real-time data and ML models to capitalize on market volatility with precision.",
    tags: ["Python", "Pandas", "Trading API"],
    github: "https://github.com/abibinu/arbix",
    color: "from-orange-600 to-red-700"
  }
];

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      className="group relative w-full mb-32 last:mb-0"
    >
      <div className="flex flex-col lg:flex-row gap-12 items-center">
        {/* Project Info */}
        <div className="lg:w-1/2 space-y-6">
          <div className="flex items-center gap-4">
            <span className="text-4xl font-black text-white/10">{project.id}</span>
            <span className="text-blue-500 font-bold uppercase tracking-widest text-sm">{project.type}</span>
          </div>
          <h3 className="text-5xl md:text-7xl font-bold tracking-tighter group-hover:text-blue-400 transition-colors">
            {project.title}
          </h3>
          <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-xl">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-3">
            {project.tags.map(tag => (
              <span key={tag} className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm font-medium">
                {tag}
              </span>
            ))}
          </div>
          <div className="flex gap-6 pt-6">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 group/link"
            >
              <span className="text-lg font-bold border-b-2 border-transparent group-hover/link:border-blue-500 transition-all">View Code</span>
              <ArrowUpRight className="group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
            </a>
          </div>
        </div>

        {/* Project Visual */}
        <div className="lg:w-1/2 w-full">
          <div className={`relative aspect-[16/10] rounded-3xl bg-gradient-to-br ${project.color} overflow-hidden shadow-2xl`}>
             {/* Mockup or Image */}
             <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-4/5 h-4/5 bg-black/40 backdrop-blur-md rounded-2xl border border-white/20 p-8 transform rotate-6 group-hover:rotate-3 transition-transform duration-500">
                  <div className="w-full h-full border border-white/10 rounded-lg overflow-hidden bg-gray-900 flex items-center justify-center text-white/20 text-4xl font-black italic">
                    {project.title}
                  </div>
                </div>
             </div>
             {/* Overlay */}
             <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-32 px-4 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="mb-24">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-gray-500 uppercase tracking-widest text-sm font-bold mb-4"
          >
            Case Studies
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold"
          >
            Curated Work
          </motion.h3>
        </div>

        <div>
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
