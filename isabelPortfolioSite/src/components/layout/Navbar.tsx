// src/components/layout/Navbar.tsx
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      // Change navbar appearance on scroll
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Update active link based on scroll position
      const sections = document.querySelectorAll('section, div[id]');
      sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionId = section.getAttribute('id');

        if (sectionId && sectionTop < 100 && sectionTop > -400) {
          setActiveLink(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Toggle menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close menu when a link is clicked
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setActiveLink(id);
    setIsMenuOpen(false);

    const targetElement = document.getElementById(id);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 70,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav
      className="navbar navbar-custom fixed-top shadow-sm navbar-expand-lg navbar-light py-3 py-lg-0 px-lg-5"
      style={{
        transition: 'all 0.3s ease-in-out',
        backgroundColor: isScrolled ? '#ffffff' : 'rgba(255, 255, 255, 0.9)',
        zIndex: 1000,
        backdropFilter: 'blur(10px)',
        display: 'block'
      }}
    >
      <div className="container">
        <a href="#home" className="navbar-brand font-weight-bold text-primary" onClick={(e) => handleLinkClick(e, 'home')}>
          Isabel
        </a>

        <button
          type="button"
          className="navbar-toggler"
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse px-lg-3 ${isMenuOpen ? 'show' : ''}`} id="navbarCollapse">
          <div className="navbar-nav m-auto py-0">
            {[
              { id: 'home', label: 'Home' },
              { id: 'about', label: 'About' },
              { id: 'qualification', label: 'Experience' },
              { id: 'skill', label: 'Skill' },
              { id: 'service', label: 'Service' },
              { id: 'testimonial', label: 'Clients' },
              { id: 'contact', label: 'Contact' }
            ].map(item => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`nav-item nav-link ${activeLink === item.id ? 'active' : ''}`}
                onClick={(e) => handleLinkClick(e, item.id)}
              >
                {item.label}
              </a>
            ))}
          </div>

          <a
            href="#contact"
            className="btn btn-outline-primary d-none d-lg-block"
            onClick={(e) => handleLinkClick(e, 'contact')}
          >
            Work With Me
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;