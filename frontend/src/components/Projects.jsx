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
      title: 'RigVision - Object Tracking',
      desc: 'An AI-powered computer vision dashboard processing 4 RTSP feeds at 10 Hz. Integrates YOLOv8 and BoT-SORT trackers with OpenCV calibration and DLT triangulation for worker PPE auditing.',
      tags: ['FastAPI', 'Redis', 'YOLOv8', 'OpenCV', 'Docker', 'React.js'],
      githubLink: 'https://github.com/arnim2006',
      liveLink: 'https://github.com/arnim2006'
    },
    {
      title: '3D Drilling Twin',
      desc: 'A web-based 3D digital twin of an active drilling rig using React and Three.js (React Three Fiber), decoupling high-frequency 10 Hz telemetry from React reconciliation using Zustand.',
      tags: ['React.js', 'Three.js (R3F)', 'Zustand', 'FastAPI', 'WebSockets'],
      githubLink: 'https://github.com/arnim2006',
      liveLink: 'https://github.com/arnim2006'
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
