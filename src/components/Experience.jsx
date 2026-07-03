import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap } from 'lucide-react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      role: 'Software Developer Intern',
      company: 'Oil and Natural Gas Corporation (ONGC)',
      date: 'June 2026 - Present',
      type: 'internship',
      desc: 'Architected a web-based 3D digital twin of a drilling rig using React and Three.js (React Three Fiber), decoupling 10 Hz telemetry from React reconciliation via Zustand. Integrated YOLOv8/BoT-SORT tracking with OpenCV and DLT triangulation. Built FastAPI WebSocket telemetry and RAG pipelines for automated root-cause analysis (RCA).'
    },
    {
      role: 'Web Developer',
      company: 'TEDxLNMIIT',
      date: 'Oct 2025 - Dec 2025',
      type: 'academic',
      desc: 'Led end-to-end development of the official website using React and Astro, focusing on efficient asset handling and accessibility. Deployed on Vercel with GoDaddy domain integration, shipping SEO-optimized pages achieving 250+ search clicks and 2K+ impressions.'
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
    <section id="experience" className="experience-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Professional Experience</h2>
          <p className="section-subtitle">
            A history of my internships and teaching assistantships where I applied engineering principles to solve practical challenges.
          </p>
        </motion.div>

        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-dot"></div>
              <motion.div 
                className="timeline-content"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-80px' }}
              >
                <div className="experience-card glass-card">
                  <div className="exp-header">
                    <span className="timeline-date">{exp.date}</span>
                    <span className="exp-type-badge">
                      {exp.type === 'internship' ? (
                        <>
                          <Briefcase size={12} />
                          <span>Internship</span>
                        </>
                      ) : (
                        <>
                          <GraduationCap size={12} />
                          <span>Academic TA</span>
                        </>
                      )}
                    </span>
                  </div>
                  <h3 className="timeline-title">{exp.role}</h3>
                  <h4 className="timeline-subtitle">{exp.company}</h4>
                  <p className="timeline-desc">{exp.desc}</p>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
