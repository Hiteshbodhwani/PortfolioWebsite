import React from 'react';
import './StylingFiles/Experience.css';

const experiences = [
  {
    role: 'Frontend Web Development Intern',
    company: 'Grras Solutions Pvt. Ltd., Jaipur',
    duration: 'July 2024 – August 2024',
    description: [
      'Built React-based applications with optimized state management.',
      'Enhanced UI/UX and improved frontend performance.',
    ],
  },
  {
    role: 'MERN Stack Certification (Project Experience)',
    company: 'Apna College, Kota',
    duration: 'January 2025 – June 2025',
    description: [
      'Developed full-stack projects using React, Node.js, Express, and MongoDB.',
      'Implemented user authentication, REST APIs, and CRUD operations.',
      'Deployed apps using GitHub and cloud platforms.',
    ],
  },
];

const Experience = () => {
  return (
    <section className="experience-section" id="experience">
      <h1>Experience</h1>
      <div className="experience-list">
        {experiences.map((exp, index) => (
          <div className="experience-card" key={index}>
            <h2>{exp.role}</h2>
            <h3>{exp.company}</h3>
            <span className="duration">{exp.duration}</span>
            <ul>
              {exp.description.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
