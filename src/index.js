import React, { useRef } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import SideBar from './Layout/SideBar';
import Footer from './Layout/Footer'; // Import the Footer component
import Home from './components/Home';
import Expertises from './components/Expertises';
import Education from './components/Education';
import Connect from './components/Connect';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import reportWebVitals from './reportWebVitals';

const AnimatedRoutes = () => {
  const location = useLocation();
  const nodeRef = useRef(null);

  return (
    <TransitionGroup component={null}>
      <CSSTransition key={location.key} timeout={300} classNames="fade" nodeRef={nodeRef}>
        <div ref={nodeRef}>
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/expertises" element={<Expertises />} />
            <Route path="/education" element={<Education />} />
            <Route path="/contact" element={<Connect />} />
          </Routes>
        </div>
      </CSSTransition>
    </TransitionGroup>
  );
};

const Layout = () => {
  return (
    <>
      <SideBar />
      <div className="content">
        <AnimatedRoutes />
      </div>
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Layout />
  </Router>
);

reportWebVitals();