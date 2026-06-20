import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Heart } from 'lucide-react';
import './Communities.css';

const Communities = () => {
  const involvements = [
    {
      title: 'Smart India Hackathon Finalist',
      role: 'Team Lead & Developer',
      date: 'December 2024',
      icon: <Award size={24} className="comm-icon icon-indigo" />,
      desc: 'Selected in the national finals of SIH 2024. Led a 6-member team to design and pitch an AI-driven waste management monitoring solution for municipal corporations.'
    },
    {
      title: 'GDG Student Club Lead',
      role: 'Technical Coordinator',
      date: 'August 2024 - Present',
      icon: <Users size={24} className="comm-icon icon-cyan" />,
      desc: 'Orchestrating technical bootcamps, workshops, and coding challenges for over 400+ campus students. Coordinated logistics, secured speakers, and mentored participants.'
    },
    {
      title: 'Open Source Contributor',
      role: 'Independent Contributor',
      date: 'October 2023 & 2024',
      icon: <Heart size={24} className="comm-icon icon-fuchsia" />,
      desc: 'Actively contributed code, bug fixes, and documentation edits to popular JavaScript repositories during Hacktoberfest. Promoted open-source participation inside the campus.'
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
