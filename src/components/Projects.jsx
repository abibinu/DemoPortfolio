import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce platform with user authentication, product management, and more.",
    tags: ["Php", "Html", "MongoDB"],
    github: "https://github.com/abibinu/E-COMMERCE_SITE",
    image: "assets/projects/ecommerce.jpg"
  },
  {
    title: "Mental Health Companion",
    description: "A mental health app with user authentication, chat functionality, and tracking.",
    tags: ["Flutter", "Node.js", "PostgreSQL"],
    github: "https://github.com/abibinu/MENTAL_HEALTH_APP",
    image: "assets/projects/mental-health-app.jpg"
  },
  {
    title: "ML Disease Prediction",
    description: "A machine learning model that predicts diseases based on symptoms analysis.",
    tags: ["Python", "Machine Learning"],
    github: "https://github.com/abibinu/ML_projects",
    image: "assets/projects/ml-disease.jpg"
  },
  {
    title: "Personal Trading Bot",
    description: "A trading bot using machine learning to analyze market trends and place trades.",
    tags: ["Python", "ML", "Trading API"],
    github: "https://github.com/abibinu/arbix",
    image: "assets/projects/trading-bot.png"
  }
];

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group bg-gray-900/50 border border-gray-800 rounded-3xl overflow-hidden hover:border-primary/50 transition-all"
    >
      <div className="relative h-64 overflow-hidden">
        <img
          src={`${import.meta.env.BASE_URL}${project.image}`}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          onError={(e) => {
            e.target.src = 'https://via.placeholder.com/600x400?text=' + project.title;
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60" />
      </div>

      <div className="p-8">
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map(tag => (
            <span key={tag} className="px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full uppercase tracking-wider">
              {tag}
            </span>
          ))}
        </div>
        <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-400 mb-6 line-clamp-2">
          {project.description}
        </p>
        <div className="flex space-x-4">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-sm text-gray-300 hover:text-white transition-colors"
          >
            <Github size={18} />
            <span>Code</span>
          </a>
          {/* <a href="#" className="flex items-center space-x-2 text-sm text-gray-300 hover:text-white transition-colors">
            <ExternalLink size={18} />
            <span>Live Demo</span>
          </a> */}
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-4 bg-darker/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Recent <span className="text-primary">Work</span>
          </motion.h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
