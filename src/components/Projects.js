import React from 'react';

import './StylingFiles/Projects.css';

const projects = [
  {
    title: 'WanderLust – Airbnb',
    description:
      'A full-stack MERN application for listing and booking stays. Includes user authentication, listing management, and review system.',
    tech: ['React,', 'Node.js,', 'Express &', 'MongoDB'],
    live: 'https://major35.onrender.com/listings',
    github: 'https://github.com/Hiteshbodhwani/MAJOR35', // update with direct repo link if available
  },
  {
    title: 'News App – Real-time News Aggregator',
    description:
      'A news aggregator that fetches the latest headlines from NewsAPI.org. Dynamic, responsive UI built with React.',
    tech: ['React', 'JavaScript', 'Web APIs'],
    github: 'https://github.com/Hiteshbodhwani/NewsBar', // update if specific repo available
  },
  {
    title: 'Simon Says – Memory Game',
    description:
      'A classic memory-based web game that challenges users to repeat color patterns. Interactive, fun UI with sound feedback.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    live: '', // optional
    github: 'https://github.com/Hiteshbodhwani/Simon-says-game', // update if you have the repo
  },
];

const Projects = () => {
  return (
    <section className="projects-section" id="projects">
      <h1>Projects</h1>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <div className="tech-stack">
              {project.tech.map((tech, i) => (
                <span key={i}>{tech}</span>
              ))}
            </div>
            <div className="project-links">
              {project.live && (
                <a href={project.live} target="_blank" rel="noopener noreferrer">
                  🔗 Live
                </a>
              )}
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                💻 GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
