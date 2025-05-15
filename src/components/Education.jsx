import React, { useState, useEffect } from 'react';
import './education.css';
import itImage from "../assets/itu2.jpg";
import pgcImage from "../assets/pgc.jpg";

const Education = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);
  
  return (
    <div className="education-page">
      <div className="background-pattern">
        <div className="pattern-circle circle1"></div>
        <div className="pattern-circle circle2"></div>
      </div>
      
      <div className={`content-wrapper ${isVisible ? 'fade-in' : ''}`}>
        <div className="education-header">
          <div className="badge-container">
            <span className="portfolio-badge">Education</span>
          </div>
          
          <h2 className="education-title">Academic Journey</h2>
          
          <p className="education-subtitle">
            My educational background that has shaped my technical knowledge and professional growth.
          </p>
        </div>
        
        <div className="education-cards-container">
          <div className="education-card">
            <div className="image-container">
              <div className="image-overlay"></div>
              <div className="education-photo-wrapper">
                <img src={itImage} alt="Information Technology University" className="education-photo" />
              </div>
              <div className="corner-accent top-left"></div>
              <div className="corner-accent bottom-right"></div>
            </div>
            <div className="education-content">
              <h3 className="institution-name">University of Information and Technology (ITU)</h3>
              <div className="degree-wrapper">
                <span className="degree-text">Bachelor of Science in Computer Science</span>
              </div>
              <span className="duration-text">2023 - 2027 (Expected)</span>
              <div className="education-details">
                <p>Focusing on software engineering, data structures, and advanced programming concepts.</p>
              </div>
            </div>
          </div>
          
          <div className="education-card">
            <div className="image-container">
              <div className="image-overlay"></div>
              <div className="education-photo-wrapper">
                <img src={pgcImage} alt="Punjab Group of Colleges" className="education-photo" />
              </div>
              <div className="corner-accent top-left"></div>
              <div className="corner-accent bottom-right"></div>
            </div>
            <div className="education-content">
              <h3 className="institution-name">Punjab Group of Colleges</h3>
              <div className="degree-wrapper">
                <span className="degree-text">Intermediate in Computer Science</span>
              </div>
              <span className="duration-text">2021 - 2023</span>
              <div className="education-details">
                <p>Gained foundational knowledge in programming, mathematics, and computer systems.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="scroll-prompt">
        <div className="scroll-text">Continue exploring</div>
        <div className="scroll-icon">
          <div className="scroll-dot"></div>
        </div>
      </div>
    </div>
  );
};

export default Education;