import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Heart } from 'lucide-react';
import './Communities.css';

const Communities = () => {
  const involvements = [
    {
      title: 'TEDxLNMIIT Core Web Team',
      role: 'Web Developer',
      date: 'Oct 2025 - Dec 2025',
      icon: <Users size={24} className="comm-icon icon-cyan" />,
      desc: 'Led the end-to-end frontend development of the official TEDxLNMIIT event portal, structuring registrations, ticketing, and speaker cards for smooth outreach.'
    },
    {
      title: 'Competitive Programming',
      role: 'LeetCode Active Solver',
      date: '2024 - Present',
      icon: <Award size={24} className="comm-icon icon-indigo" />,
      desc: 'Actively solving computational problems on LeetCode. Deeply interested in optimizing complex data structures and algorithmic complexity.'
    },
    {
      title: 'ONGC Digital Twin Team',
      role: 'Rig Telemetry Architect',
      date: 'June 2026 - Present',
      icon: <Heart size={24} className="comm-icon icon-fuchsia" />,
      desc: 'Collaborated with engineering leads to architect real-time monitoring interfaces and high-performance telemetry loops for drilling rig operations.'
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
    <section id="community" className="community-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Community & Achievements</h2>
          <p className="section-subtitle">
            My contributions as a leader, team player, and mentor in technical communities and national hackathons.
          </p>
        </motion.div>

        <motion.div 
          className="community-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {involvements.map((item, index) => (
            <motion.div 
              key={index} 
              className="glass-card community-card"
              variants={cardVariants}
            >
              <div className="comm-header">
                {item.icon}
                <div>
                  <span className="comm-date">{item.date}</span>
                  <h3 className="comm-title">{item.title}</h3>
                  <h4 className="comm-role">{item.role}</h4>
                </div>
              </div>
              <p className="comm-desc">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Communities;
