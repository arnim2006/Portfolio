import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap } from 'lucide-react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      role: 'Software Engineering Intern',
      company: 'TechCorp Solutions',
      date: 'May 2025 - August 2025',
      type: 'internship',
      desc: 'Engineered and optimized web applications using React.js and TypeScript. Collaborated with designers to build accessible UI elements, integrated internal REST APIs, and reduced page load times by 22% using code splitting and image optimizations.'
    },
    {
      role: 'Teaching Assistant (Web Development)',
      company: 'Department of Computer Science',
      date: 'September 2024 - April 2025',
      type: 'academic',
      desc: 'Guided a cohort of 60+ undergraduate students in JavaScript, React.js, and CSS principles. Conducted weekly lab hours, mentored team-based term projects, designed debugging worksheets, and graded programming assignments.'
    },
    {
      role: 'Frontend Developer Intern',
      company: 'WebLab Creative Studio',
      date: 'June 2024 - August 2024',
      type: 'internship',
      desc: 'Crafted high-fidelity mockups into modular, fully responsive HTML/CSS/JS components. Implemented smooth interactive transitions and page reveal animations using GSAP, enhancing client user engagement scores.'
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
