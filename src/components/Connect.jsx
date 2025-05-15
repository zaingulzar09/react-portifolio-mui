import React from "react";
import "./connect.css";
import QrCode from "../assets/qr2.jfif";

function Connect() {
  return (
    <div className="connect-page">
      <div className="background-pattern">
        <div className="pattern-circle circle1"></div>
        <div className="pattern-circle circle2"></div>
      </div>
      
      <div className="content-wrapper">
        <div className="connect-header">
          <div className="badge-container">
            <span className="portfolio-badge">Connect</span>
          </div>
          
          <h2 className="connect-title">About Me</h2>
          
          <p className="connect-subtitle">
            Get in touch through these platforms to connect professionally.
          </p>
        </div>
        
        <div className="connect-container">
          <div className="connect-card">
            <div className="corner-accent top-left"></div>
            <div className="corner-accent bottom-right"></div>
            
            <div className="connect-grid">
              <div className="connect-details">
                <div className="connect-item">
                  <h3 className="connect-item-title">Email</h3>
                  <p className="connect-item-text">zaingulzar009@gmail.com</p>
                </div>
                
                <div className="connect-item">
                  <h3 className="connect-item-title">LinkedIn</h3>
                  <a
                    href="https://www.linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="connect-button"
                  >
                    Visit My LinkedIn Profile
                  </a>
                </div>
              </div>
              
              <div className="connect-image-container">
                <h3 className="connect-item-title">Instagram</h3>
                <div className="qr-wrapper">
                  <img src={QrCode} alt="Instagram QR Code" className="qr-code" />
                  <div className="qr-overlay"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      
    </div>
  );
}

export default Connect;