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
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="cta-secondary-btn">
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
            {/* SVG Visual Graphic with orbiting rings & nodes */}
            <svg viewBox="0 0 500 500" className="tech-svg">
              <defs>
                <linearGradient id="cyan-purple" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="var(--accent-cyan)" />
                  <stop offset="100%" stopColor="var(--accent-indigo)" />
                </linearGradient>
                <linearGradient id="purple-pink" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="var(--accent-indigo)" />
                  <stop offset="100%" stopColor="var(--accent-fuchsia)" />
                </linearGradient>
                {/* Clip Path for the circular profile photo */}
                <clipPath id="profile-clip">
                  <circle cx="250" cy="250" r="85" />
                </clipPath>
              </defs>
              {/* Outer dashed orbit */}
              <circle cx="250" cy="250" r="180" fill="none" stroke="url(#cyan-purple)" strokeWidth="1.5" strokeDasharray="8 6" className="orbit-dashed" />
              {/* Middle solid orbit */}
              <circle cx="250" cy="250" r="130" fill="none" stroke="rgba(255, 255, 255, 0.05)" strokeWidth="2" />
              <circle cx="250" cy="250" r="130" fill="none" stroke="url(#purple-pink)" strokeWidth="2.5" strokeDasharray="180 300" className="orbit-solid" />
              
              {/* Background of clip area */}
              <circle cx="250" cy="250" r="85" fill="rgba(18, 18, 30, 0.2)" />
              
              {/* Clipped Profile Image */}
              <g clipPath="url(#profile-clip)">
                {/* Silhouette background placeholder */}
                <rect x="165" y="165" width="170" height="170" fill="url(#cyan-purple)" opacity="0.15" />
                <path d="M250 205c14 0 25-11 25-25s-11-25-25-25-25 11-25 25 11 25 25 25zm0 12c-28 0-50 15-50 35v12h100v-12c0-20-22-35-50-35z" fill="var(--text-secondary)" opacity="0.4" />
                
                <image 
                  href="/profile.jpg" 
                  x="165" 
                  y="165" 
                  width="170" 
                  height="170" 
                  preserveAspectRatio="xMidYMid slice"
                />
              </g>
              {/* Ring border around the photo */}
              <circle cx="250" cy="250" r="85" fill="none" stroke="url(#cyan-purple)" strokeWidth="3" />
              
              {/* Floating nodes with connections */}
              <line x1="250" y1="250" x2="170" y2="120" stroke="rgba(255, 255, 255, 0.15)" strokeWidth="1" className="connecting-line" />
              <line x1="250" y1="250" x2="360" y2="190" stroke="rgba(255, 255, 255, 0.15)" strokeWidth="1" className="connecting-line" />
              <line x1="250" y1="250" x2="310" y2="350" stroke="rgba(255, 255, 255, 0.15)" strokeWidth="1" className="connecting-line" />
              
              {/* Orbiting nodes */}
              <circle cx="170" cy="120" r="7" fill="var(--accent-cyan)" className="tech-node float-node-1" />
              <circle cx="360" cy="190" r="9" fill="var(--accent-indigo)" className="tech-node float-node-2" />
              <circle cx="310" cy="350" r="6" fill="var(--accent-fuchsia)" className="tech-node float-node-3" />
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
