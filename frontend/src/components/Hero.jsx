import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = contactSection.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="hero" className="hero-section">
      <div className="hero-container container">
        {/* Left Side Content */}
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <motion.div
            className="hero-badge"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <span className="badge-pulse"></span>
            Available for New Opportunities
          </motion.div>

          <h1 className="hero-title">
            Hi, I'm <span className="text-gradient">Arnim</span>
            <br />
            <span className="title-highlight">Software Developer</span>
          </h1>

          <p className="hero-description">
            I engineer high-performance web applications, 3D digital twins, and real-time data pipelines.
            Specializing in React, Three.js (React Three Fiber), Node.js, computer vision integration,
            and scalable systems engineering.
          </p>

          <div className="hero-actions">
            <button className="cta-primary-btn" onClick={scrollToContact}>
              <span>Let's Connect</span>
              <ArrowRight size={18} />
            </button>
            <a href="https://drive.google.com/file/d/10dSi-UjpGBTDBPd4DVr-P69tO8jIIg_Y/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="cta-secondary-btn">
              <span>Download CV</span>
              <Download size={16} />
            </a>
          </div>
        </motion.div>

        {/* Right Side Visual Graphic */}
        <motion.div 
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.9, ease: 'easeOut' }}
        >
          <div className="visual-wrapper">
            <div className="visual-glow-backdrop"></div>
            
            <div className="profile-image-container">
              {/* Outer Orbiting Rings */}
              <div className="profile-orbit-ring ring-1"></div>
              <div className="profile-orbit-ring ring-2"></div>
              
              {/* Image Frame */}
              <div className="profile-image-frame">
                <img 
                  src="/profile.png" 
                  alt="Arnim Agarwal" 
                  className="profile-img-element"
                  onError={(e) => {
                    // Fallback representation if image fails to load
                    e.target.src = "https://cdn-icons-png.flaticon.com/512/3135/3135715.png";
                  }}
                />
              </div>

              {/* Floating Tech Badges */}
              <div className="tech-badge-floating badge-react">React.js</div>
              <div className="tech-badge-floating badge-three">Three.js</div>
              <div className="tech-badge-floating badge-node">Node.js</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
