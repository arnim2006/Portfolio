import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Code } from 'lucide-react';
import './Projects.css';

const Projects = () => {
  const projectList = [
    {
      title: 'DevFlow - Q&A Platform',
      desc: 'A fullstack developer-focused Q&A platform with AI-generated answer options, detailed user reputation scoring, advanced keyword filtering, voting systems, and customized tag directories.',
      tags: ['Next.js', 'TypeScript', 'MongoDB', 'Tailwind CSS', 'OpenAI API'],
      githubLink: 'https://github.com',
      liveLink: 'https://example.com'
    },
    {
      title: 'RigVision - OpenCV Dashboard',
      desc: 'An AI-powered video surveillance and object detection dashboard. Processes RTSP webcam feeds in real-time, overlaying bounding boxes, tracking movements, and logging events.',
      tags: ['React.js', 'Electron', 'Python', 'OpenCV', 'YOLOv8'],
      githubLink: 'https://github.com',
      liveLink: 'https://example.com'
    },
    {
      title: 'Glassmorphic Canvas',
      desc: 'This premium portfolio container. Leverages Vite, React, custom modular CSS variables, and Framer Motion scroll animation nodes to construct a fluid, responsive, futuristic user interface.',
      tags: ['React.js', 'Vite', 'Vanilla CSS', 'Framer Motion', 'Lucide Icons'],
      githubLink: 'https://github.com',
      liveLink: 'https://example.com'
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            A curated showcase of applications I have built, demonstrating full-stack engineering, 
            intelligent interfaces, and precise visual designs.
          </p>
        </motion.div>

        <motion.div 
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {projectList.map((project, index) => (
            <motion.div 
              key={index} 
              className="glass-card project-card"
              variants={cardVariants}
            >
              <div className="project-icon-wrapper">
                <Code size={24} className="project-icon" />
              </div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.desc}</p>
              
              <div className="project-tags">
                {project.tags.map((tag, tIdx) => (
                  <span key={tIdx} className="badge badge-accent project-tag">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="project-links">
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="project-link-btn" title="View Source Code">
                  <Github size={16} />
                  <span>Source</span>
                </a>
                <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="project-link-btn live-btn" title="View Live Demo">
                  <ExternalLink size={16} />
                  <span>Live Demo</span>
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
