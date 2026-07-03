import React from 'react';
import { motion } from 'framer-motion';
import { Award, Compass, School } from 'lucide-react';
import './Journey.css';

const Journey = () => {
  const milestones = [
    {
      year: '2024 - 2028',
      title: 'B.Tech in Communication & Computer Engineering',
      subtitle: 'The LNM Institute of Information Technology',
      icon: <School size={16} />,
      desc: 'Pursuing my undergraduate degree with a CGPA of 7.73/10. Active member of technical clubs, focusing on Data Structures & Algorithms, Database Management, and Computer Networks.'
    },
    {
      year: '2018 - 2024',
      title: 'Higher Secondary & Matriculation Education',
      subtitle: 'Cambridge Court High School, Jaipur',
      icon: <Award size={16} />,
      desc: 'Completed secondary and higher secondary education with strong academic results. Achieved 89.8% in Intermediate board exams and 92.6% in Matriculation board exams.'
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
          <h2 className="section-title">Education</h2>
          <p className="section-subtitle">
            My academic qualifications and educational background.
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
