import React, { useEffect, useRef } from "react";
import "./sidebar.css";
import { NavLink, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();
  const sidebarRef = useRef(null);
  const [boxStyle, setBoxStyle] = React.useState({});
  
  // Helper function to get the active link based on current path
  const getActiveLinkFromPath = (pathname) => {
    if (pathname === "/") return "home";
    return pathname.substring(1); // Remove the leading slash
  };

  // Update the box position whenever the location changes
  useEffect(() => {
    const activeLink = getActiveLinkFromPath(location.pathname);
    const activeElement = document.querySelector(`.${activeLink}.active`) || 
                          document.querySelector(`.${activeLink} .active`);
                          
    if (activeElement && sidebarRef.current) {
      const sidebarTop = sidebarRef.current.getBoundingClientRect().top;
      const { top, height, left, width } = activeElement.getBoundingClientRect();
      
      setBoxStyle({
        top: `${top - sidebarTop}px`,
        left: `${left}px`,
        height: `${height}px`,
        width: `${width}px`,
      });
    }
  }, [location.pathname]);
  
  return (
    <div className="sidebar" ref={sidebarRef}>
      <div className="sidebar-logo">
        <span className="logo-text">ZG</span>
      </div>
      <div className="sliding-box" style={boxStyle}></div>
      <ul>
        <li className="home">
          <NavLink to="/" end className={({isActive}) => isActive ? "active" : ""}>
            <div className="icon-container">
              <svg viewBox="0 0 24 24" width="20" height="20" className="nav-icon">
                <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
            </div>
            <span>Home</span>
          </NavLink>
        </li>
        <li className="expertises">
          <NavLink to="/expertises" className={({isActive}) => isActive ? "active" : ""}>
            <div className="icon-container">
              <svg viewBox="0 0 24 24" width="20" height="20" className="nav-icon">
                <path d="M16 18l6-6-6-6M8 6l-6 6 6 6" />
              </svg>
            </div>
            <span>Skills</span>
          </NavLink>
        </li>
        <li className="education">
          <NavLink to="/education" className={({isActive}) => isActive ? "active" : ""}>
            <div className="icon-container">
              <svg viewBox="0 0 24 24" width="20" height="20" className="nav-icon">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                <path d="M6 12v5c0 3 5 5 5 5s5-2 5-5v-5" />
              </svg>
            </div>
            <span>Education</span>
          </NavLink>
        </li>
        <li className="contact">
          <NavLink to="/contact" className={({isActive}) => isActive ? "active" : ""}>
            <div className="icon-container">
              <svg viewBox="0 0 24 24" width="20" height="20" className="nav-icon">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="M22 7l-10 7L2 7" />
              </svg>
            </div>
            <span>Connect</span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;