import React from 'react';
import { motion } from 'framer-motion';
import { Award, Compass, School } from 'lucide-react';
import './Journey.css';

const Journey = () => {
  const milestones = [
    {
      year: '2026',
      title: 'Graduating & Beyond',
      subtitle: 'B.Tech in Computer Science & Engineering',
      icon: <School size={16} />,
      desc: 'Completing B.Tech degree with a focus on web engineering, algorithms, and distributed databases. Seeking full-time roles in creative frontend engineering.'
    },
    {
      year: '2024 - 2025',
      title: 'Fullstack Architectures & APIs',
      subtitle: 'Deepening Engineering Skills',
      icon: <Award size={16} />,
      desc: 'Expanded knowledge to relational and non-relational database design, building scalable Node.js microservices, and deploying cloud systems. Participated in multiple national hackathons.'
    },
    {
      year: '2023',
      title: 'Discovering Web Crafting',
      subtitle: 'Interactive Frontend Focus',
      icon: <Compass size={16} />,
      desc: 'Discovered the intersection of design and engineering. Mastered JavaScript, UI animations (GSAP, Framer Motion), accessibility (WCAG), and responsive layouts.'
    }
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: 'easeOut' }
    }
  };

  return (
    <section id="journey" className="journey-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">My Journey</h2>
          <p className="section-subtitle">
            An overview of my academic milestones and self-directed path towards software engineering.
          </p>
        </motion.div>

        <div className="timeline">
          {milestones.map((milestone, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-dot"></div>
              <motion.div 
                className="timeline-content"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-80px' }}
              >
                <div className="journey-card glass-card">
                  <div className="journey-header">
                    <span className="timeline-date">{milestone.year}</span>
                    <span className="journey-icon-badge">
                      {milestone.icon}
                    </span>
                  </div>
                  <h3 className="timeline-title">{milestone.title}</h3>
                  <h4 className="timeline-subtitle">{milestone.subtitle}</h4>
                  <p className="timeline-desc">{milestone.desc}</p>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Journey;
