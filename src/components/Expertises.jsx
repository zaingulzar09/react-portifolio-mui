import React from 'react';
import { useInView } from 'react-intersection-observer';
import './expertises.css';

const skills = [
  { name: 'JavaScript', level: 90, description: 'Expert in ECMAScript7 with experience in modern JavaScript.' },
  { name: 'React', level: 81, description: 'Experienced in building dynamic user interfaces with React.' },
  { name: 'HTML', level: 97, description: 'Expert in crafting semantic and SEO-friendly HTML.' },
  { name: 'CSS', level: 93, description: 'Experienced in creating responsive designs with CSS.' },
  { name: 'SASS', level: 86, description: 'Skilled in using SASS for writing scalable CSS.' },
  { name: 'Bootstrap', level: 83, description: 'Experienced in using Bootstrap for rapid UI development.' },
  { name: 'Tailwind CSS', level: 79, description: 'Proficient in using Tailwind CSS for utility-first design.' },
  { name: 'Redux Toolkit', level: 51, description: 'Basic knowledge of state management with Redux Toolkit.' },
];

const Expertises = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="expertises-page">
      <div className="background-pattern">
        <div className="pattern-circle circle1"></div>
        <div className="pattern-circle circle2"></div>
      </div>
      
      <div className="expertises-header">
        <div className="badge-container">
          <span className="portfolio-badge">Skillset</span>
        </div>
        <h2 className="expertises-title">Technical Expertise</h2>
        <p className="expertises-subtitle">A showcase of my professional skills and technical proficiency</p>
      </div>
      
      <div className="expertises-container" ref={ref}>
        {skills.map((skill, index) => (
          <SkillCard key={index} skill={skill} inView={inView} index={index} />
        ))}
      </div>
    </div>
  );
};

const SkillCard = ({ skill, inView, index }) => {
  return (
    <div 
      className="skill-card" 
      style={{ 
        animationDelay: `${index * 0.1}s`,
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(20px)'
      }}
    >
      <div className="skill-header">
        <h3 className="skill-name">{skill.name}</h3>
        <div className="skill-level-indicator">
          <span className="skill-percentage">{skill.level}%</span>
        </div>
      </div>
      <div className="skill-bar-container">
        <div 
          className="skill-bar" 
          style={{ 
            width: inView ? `${skill.level}%` : '0%',
          }}
        >
          <div className="skill-bar-glow"></div>
        </div>
      </div>
      <p className="skill-description">{skill.description}</p>
    </div>
  );
};

export default Expertises;