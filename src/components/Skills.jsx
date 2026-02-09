import React from 'react';
import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: "Frontend Development",
    skills: [
      { name: "HTML5 & CSS3", level: 95 },
      { name: "JavaScript (ES6+)", level: 90 },
      { name: "React.js", level: 85 },
      { name: "Responsive Design", level: 90 }
    ]
  },
  {
    title: "Backend Development",
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Python", level: 80 },
      { name: "SQL & NoSQL", level: 75 },
      { name: "RESTful APIs", level: 85 }
    ]
  },
  {
    title: "Tools & Technologies",
    skills: [
      { name: "Git & GitHub", level: 90 },
      { name: "Docker", level: 70 },
      { name: "AWS Cloud Services", level: 75 },
      { name: "CI/CD", level: 80 }
    ]
  }
];

const SkillBar = ({ name, level }) => {
  return (
    <div className="mb-6">
      <div className="flex justify-between mb-2">
        <span className="text-gray-300 font-medium">{name}</span>
        <span className="text-primary font-semibold">{level}%</span>
      </div>
      <div className="w-full bg-gray-800 rounded-full h-2">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="bg-primary h-full rounded-full shadow-[0_0_10px_#2f6bff]"
        />
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            My <span className="text-primary">Skills</span>
          </motion.h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors"
            >
              <h3 className="text-xl font-bold mb-8 text-white border-b border-gray-700 pb-4">
                {category.title}
              </h3>
              {category.skills.map((skill) => (
                <SkillBar key={skill.name} {...skill} />
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
