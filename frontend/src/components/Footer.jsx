import React from 'react';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleNavClick = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="footer-section">
      <div className="container footer-container">
        {/* Top Section */}
        <div className="footer-top">
          <div className="footer-brand">
            <span className="footer-logo">Arnim<span className="logo-dot">.</span></span>
            <p className="brand-slogan">Crafting premium, visual web experiences.</p>
          </div>

          <div className="footer-links">
            <button onClick={() => handleNavClick('hero')} className="footer-link">About</button>
            <button onClick={() => handleNavClick('skills')} className="footer-link">Skills</button>
            <button onClick={() => handleNavClick('experience')} className="footer-link">Experience</button>
            <button onClick={() => handleNavClick('projects')} className="footer-link">Projects</button>
            <button onClick={() => handleNavClick('journey')} className="footer-link">Journey</button>
            <button onClick={() => handleNavClick('community')} className="footer-link">Community</button>
            <button onClick={() => handleNavClick('contact')} className="footer-link">Contact</button>
          </div>

          <button onClick={handleScrollToTop} className="scroll-top-btn" title="Back to Top">
            <ArrowUp size={18} />
          </button>
        </div>

        {/* Divider */}
        <div className="footer-divider"></div>

        {/* Bottom Section */}
        <div className="footer-bottom">
          <p className="copyright">
            &copy; {currentYear} Arnim Agarwal. All rights reserved.
          </p>

          <div className="footer-socials">
            <a href="https://github.com/arnim2006" target="_blank" rel="noopener noreferrer" className="social-icon-link" title="GitHub">
              <Github size={16} />
            </a>
            <a href="https://www.linkedin.com/in/arnimaga/" target="_blank" rel="noopener noreferrer" className="social-icon-link" title="LinkedIn">
              <Linkedin size={16} />
            </a>
            <a href="mailto:arnimagarwal7@gmail.com" className="social-icon-link" title="Email">
              <Mail size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
