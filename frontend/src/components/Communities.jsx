import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Heart } from 'lucide-react';
import './Communities.css';

const Communities = () => {
  const involvements = [
    {
      title: 'TEDxLNMIIT',
      role: 'Core Team & Web Developer',
      date: 'Oct 2025 - Dec 2025',
      icon: <Users size={24} className="comm-icon icon-cyan" />,
      desc: 'Contributed to organizing TEDxLNMIIT, a premier independently organized TED event hosting thought leaders and industry experts. Managed end-to-end web operations, designing the registration and ticketing portal that drove attendee outreach.'
    },
    {
      title: 'Desportivos Sports Festival',
      role: 'Sponsorship Head',
      date: '2025 - Present',
      icon: <Award size={24} className="comm-icon icon-indigo" />,
      desc: 'Headed sponsorship campaigns for Desportivos, Rajasthan\'s largest college sports festival. Directed corporate outreach, negotiated brand sponsorships, and secured festival funding.'
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
          <h2 className="section-title">Community Involvement</h2>
          <p className="section-subtitle">
            My leadership roles, organization contributions, and campus festival coordination.
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
