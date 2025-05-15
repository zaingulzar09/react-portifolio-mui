import React, { useEffect, useState } from "react";
import "./footer.css";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // Listen for window resize events
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Don't render footer on mobile screens
  if (isMobile) {
    return null;
  }
  
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section brand">
          <h3>ZAIN GULZAR</h3>
          <p>Building digital experiences that matter</p>
          <div className="social-icons">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <svg viewBox="0 0 24 24" width="18" height="18">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
              </svg>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <svg viewBox="0 0 24 24" width="18" height="18">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <svg viewBox="0 0 24 24" width="18" height="18">
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
              </svg>
            </a>
          </div>
        </div>
        
        <div className="footer-section links">
          <h4>NAVIGATION</h4>
          <nav className="footer-nav">
            <NavLink to="/" className={({isActive}) => isActive ? "footer-link active" : "footer-link"}>
              <svg viewBox="0 0 24 24" width="14" height="14" className="arrow-icon">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
              <span>Home</span>
            </NavLink>
            <NavLink to="/expertises" className={({isActive}) => isActive ? "footer-link active" : "footer-link"}>
              <svg viewBox="0 0 24 24" width="14" height="14" className="arrow-icon">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
              <span>Skills</span>
            </NavLink>
            <NavLink to="/education" className={({isActive}) => isActive ? "footer-link active" : "footer-link"}>
              <svg viewBox="0 0 24 24" width="14" height="14" className="arrow-icon">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
              <span>Education</span>
            </NavLink>
            <NavLink to="/contact" className={({isActive}) => isActive ? "footer-link active" : "footer-link"}>
              <svg viewBox="0 0 24 24" width="14" height="14" className="arrow-icon">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
              <span>Connect</span>
            </NavLink>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;