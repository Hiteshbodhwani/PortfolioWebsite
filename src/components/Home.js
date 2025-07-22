import React from 'react';
import './StylingFiles/Home.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <section className="home-section" id="home">
      <div className="home-content">
        <h1>Hi, I'm <span>Hitesh Bodhwani</span></h1>
        <h2>I build fast, modern web apps using React & the MERN stack.</h2>

        <ul className="highlight-skills">
          <li>⚡ React.js • Node.js • MongoDB</li>
          <li>🎨 UI/UX Focused Frontend Development</li>
          <li>🚀 Performance Optimization & API Integration</li>
        </ul>

        <div className="home-buttons">
          <Link to="/projects" className="btn">View My Work</Link>
          <Link to="/contact" className="btn btn-outline">Let’s Talk</Link>
        </div>
      </div>
    </section>
  );
};

export default Home;
