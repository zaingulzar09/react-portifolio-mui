import React, { useEffect, useState } from 'react';
import './home.css';
import myPhoto from "../assets/me2.jfif";

const Home = () => {
  const roles = ["Frontend Developer", "UI Designer", "Web Architect"];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
    
    const interval = setInterval(() => {
      setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="home-container">
      <div className="background-pattern">
        <div className="pattern-circle circle1"></div>
        <div className="pattern-circle circle2"></div>
      </div>
      
      <div className={`content-wrapper ${isVisible ? 'fade-in' : ''}`}>
        <div className="intro-section">
          <div className="badge-container">
            <span className="portfolio-badge">Portfolio</span>
          </div>
          
          <h1 className="headline">
            <span className="greeting-text">Hello, I'm</span>
            <span className="name-text">Zain Gulzar</span>
          </h1>
          
          <div className="role-wrapper">
            <span className="role-intro">A passionate</span>
            <div className="role-switcher">
              <span className="role-text">{roles[currentRoleIndex]}</span>
              <div className="role-indicator"></div>
            </div>
          </div>
          
          <p className="bio-text">
            Creating extraordinary digital experiences through elegant code and thoughtful design solutions.
          </p>
          
          <div className="cta-container">
            <a href="/expertises" className="cta-primary">
              <span>Explore My Skills</span>
              <span className="cta-arrow">→</span>
            </a>
            <a href="/contact" className="cta-secondary">
              <span>Get In Touch</span>
            </a>
          </div>
        </div>
        
        <div className="visual-section">
          <div className="image-container2">
            <div className="image-overlay"></div>
            <div className="profile-photo-wrapper">
              <img src={myPhoto} alt="Zain Gulzar" className="profile-photo" />
            </div>
            <div className="corner-accent top-left"></div>
            <div className="corner-accent bottom-right"></div>
          </div>
        </div>
      </div>
      
      
    </div>
  );
};

export default Home;