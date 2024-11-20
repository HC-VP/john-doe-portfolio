import React from 'react';
import { ProgressBar } from 'react-bootstrap';
import './Accueil.css'; // Custom CSS for homepage

const Accueil = () => {
  return (
    <div className="accueil-container">
      <div className="background-image">
        <div className="overlay">
          <h1>Welcome to John Doe's Portfolio</h1>
          <h2>Web Developer</h2>
          <a href="#about" className="btn">Learn More</a>
        </div>
      </div>

      {/* About Section */}
      <div id="about" className="about-container">
        <h2>About John Doe</h2>
        <div className="about-content">
          <div className="about-photo">
            <img src="/images/john-doe-about.jpg" alt="John Doe" />
          </div>
          <div className="about-details">
            <p>John Doe is a passionate web developer...</p>
            <h3>Skills</h3>
            <ProgressBar now={80} label="HTML/CSS" />
            <ProgressBar now={70} label="JavaScript" />
            <ProgressBar now={60} label="React.js" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accueil;
