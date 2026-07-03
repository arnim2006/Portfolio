import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, FileText, Sun, Moon } from 'lucide-react';
import './Navbar.css';

const Navbar = ({ theme, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navItems = [
    { label: 'About', id: 'hero' },
    { label: 'Skills', id: 'skills' },
    { label: 'Experience', id: 'experience' },
    { label: 'Projects', id: 'projects' },
    { label: 'Education', id: 'journey' },
    { label: 'Community', id: 'community' },
    { label: 'Contact', id: 'contact' }
  ];

  // Track scrolling to add styling and highlight active section
  useEffect(() => {
    const handleScroll = () => {
      // Background styling toggle
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Scroll Spy logic
      const scrollPosition = window.scrollY + 120; // offset for nav height

      for (const item of navItems) {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.id);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of sticky navbar
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
    <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-container container">
        <a href="#hero" className="navbar-logo" onClick={(e) => { e.preventDefault(); handleNavClick('hero'); }}>
          Arnim<span className="logo-dot">.</span>
        </a>

        {/* Desktop Navigation Links */}
        <div className="navbar-links">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`nav-link ${activeSection === item.id ? 'nav-link-active' : ''}`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Desktop Social/Resume/Theme links */}
        <div className="navbar-socials">
          <a href="https://github.com/arnim2006" target="_blank" rel="noopener noreferrer" className="social-icon-link" title="GitHub">
            <Github size={18} />
          </a>
          <a href="https://www.linkedin.com/in/arnimaga/" target="_blank" rel="noopener noreferrer" className="social-icon-link" title="LinkedIn">
            <Linkedin size={18} />
          </a>
          <a href="mailto:arnimagarwal7@gmail.com" className="social-icon-link" title="Email">
            <Mail size={18} />
          </a>

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="theme-toggle-btn"
            aria-label="Toggle theme"
            title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
          </button>

          <a href="https://drive.google.com/file/d/10dSi-UjpGBTDBPd4DVr-P69tO8jIIg_Y/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="resume-btn" title="Download Resume">
            <FileText size={16} />
            <span>Resume</span>
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="mobile-menu-btn"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <div className={`mobile-drawer ${isOpen ? 'mobile-drawer-open' : ''}`}>
        <div className="mobile-links">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`mobile-nav-link ${activeSection === item.id ? 'mobile-nav-link-active' : ''}`}
            >
              {item.label}
            </button>
          ))}

          {/* Mobile Theme Toggle */}
          <button onClick={toggleTheme} className="mobile-theme-toggle-btn">
            {theme === 'light' ? (
              <>
                <Moon size={18} />
                <span>Dark Mode</span>
              </>
            ) : (
              <>
                <Sun size={18} />
                <span>Light Mode</span>
              </>
            )}
          </button>

          <div className="mobile-socials">
            <a href="https://github.com/arnim2006" target="_blank" rel="noopener noreferrer" className="mobile-social-icon">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/arnimaga/" target="_blank" rel="noopener noreferrer" className="mobile-social-icon">
              <Linkedin size={20} />
            </a>
            <a href="mailto:arnimagarwal7@gmail.com" className="mobile-social-icon">
              <Mail size={20} />
            </a>
          </div>
          <a href="https://drive.google.com/file/d/10dSi-UjpGBTDBPd4DVr-P69tO8jIIg_Y/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="mobile-resume-btn">
            <FileText size={18} />
            <span>Resume</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
