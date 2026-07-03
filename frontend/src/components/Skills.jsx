import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Layout, Database, Wrench } from 'lucide-react';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      icon: <Code2 size={24} className="category-icon icon-cyan" />,
      skills: ['JavaScript', 'SQL', 'C / C++', 'Python', 'Java', 'HTML5 / CSS3']
    },
    {
      title: 'Frontend & Libraries',
      icon: <Layout size={24} className="category-icon icon-indigo" />,
      skills: ['React.js', 'Astro', 'Three.js (R3F)', 'Zustand', 'GSAP', 'Framer Motion', 'Tailwind CSS']
    },
    {
      title: 'Backend & Database',
      icon: <Database size={24} className="category-icon icon-fuchsia" />,
      skills: ['Node.js', 'Express.js', 'FastAPI', 'MongoDB', 'MySQL', 'Redis', 'RESTful APIs']
    },
    {
      title: 'Tools & Ecosystem',
      icon: <Wrench size={24} className="category-icon icon-cyan" />,
      skills: ['Git & GitHub', 'Docker', 'Kubernetes', 'Firebase', 'VS Code', 'Postman']
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };

  const badgeVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.3 }
    }
  };

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">My Tech Stack</h2>
          <p className="section-subtitle">
            A comprehensive set of languages, frameworks, databases, and professional tools 
            I use to turn ideas into functional, interactive software.
          </p>
        </motion.div>

        <motion.div 
          className="skills-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {skillCategories.map((category, index) => (
            <motion.div 
              key={index}
              className="glass-card skill-card"
              variants={cardVariants}
            >
              <div className="card-header">
                {category.icon}
                <h3 className="category-title">{category.title}</h3>
              </div>
              <div className="skills-list">
                {category.skills.map((skill, sIdx) => (
                  <motion.span 
                    key={sIdx} 
                    className="badge badge-accent"
                    variants={badgeVariants}
                    whileHover={{ scale: 1.05, y: -2 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
