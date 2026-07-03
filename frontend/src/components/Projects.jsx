import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Code } from 'lucide-react';
import './Projects.css';

const Projects = () => {
  const projectList = [
    {
      title: 'Cravely - Food Discovery',
      desc: 'A full-stack video-based food discovery platform that enables users to find local restaurants via short-form reels. Built with MERN architecture, role-based auth, infinite scrolling, and ImageKit media streaming.',
      tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'ImageKit'],
      githubLink: 'https://github.com/arnim2006',
      liveLink: 'https://github.com/arnim2006'
    },
    {
      title: 'RigVision - 3D Drilling Twin',
      desc: 'Real-time 3D system for monitoring ONGC drilling rigs. Fuses live multi-camera person tracking, YOLOv8 PPE detection, and IoT sensor data into an interactive browser view. Employs a custom LLM to diagnose telemetry anomalies using rig manuals.',
      tags: ['React.js', 'Three.js (R3F)', 'Zustand', 'FastAPI', 'YOLOv8', 'OpenCV'],
      githubLink: 'https://github.com/satvikdua06-dev/RigVision',
      liveLink: null
    },
    {
      title: 'CodeGuard AI',
      desc: 'An AI-powered automated code reviewer built to inspect repository commits and pull requests. Automatically scans source files, identifies syntax issues and performance bottlenecks, and generates optimized code suggestions.',
      tags: ['React.js', 'Node.js', 'Express.js', 'LLM API', 'Tailwind CSS'],
      githubLink: 'https://github.com/arnim2006/CodeGuard-AI-',
      liveLink: null
    },
    {
      title: 'TEDxLNMIIT Portal',
      desc: 'The official high-performance web portal for TEDxLNMIIT. Architected to support online event registration pipelines, attendee ticketing, campus ambassador management, and speaker card animations.',
      tags: ['Astro', 'React.js', 'Framer Motion', 'Tailwind CSS', 'Vite'],
      githubLink: 'https://github.com/Keshav-shar/tedx-lnmiit-2026',
      liveLink: 'https://tedxlnmiit.in'
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
                {project.liveLink && (
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="project-link-btn live-btn" title="View Live Demo">
                    <ExternalLink size={16} />
                    <span>Live Demo</span>
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
