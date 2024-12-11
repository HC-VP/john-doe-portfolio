import React from 'react';
import { ProgressBar } from 'react-bootstrap';
import './Accueil.css'; // Custom CSS for homepage

const Accueil = () => {
  return (
    <div className="accueil-container">
      <div className="background-image">
        <div className="overlay">
          <h1>Bonjour, je suis John Doe</h1>
          <h2>Développeur web full stack</h2>
          <a href="#about" className="btn">En savoir plus</a>
        </div>
      </div>

      {/* About Section */}
      <div id="about" className="about-container">
        <h2>A propos</h2>
        <div className="about-content">
          <div className="about-photo">
            <img src="/images/john-doe-about.jpg" alt="John Doe" />
          </div>
          <div className="about-details">
            <p>Passionné par l'informatique et les nouvelles technologies, j'ai suivi une formation d'intégrateur-développeur web au CEF. Au cours de cette formation, j'ai pu acquérir des bases solides pour travailler dans le domaine du développement web.</p>
            <h3>Skills</h3>
            <div className="progress-bars">
              <ProgressBar now={90} label="HTML5" />
              <ProgressBar now={80} label="CSS3" />
              <ProgressBar now={70} label="JavaScript" />
              <ProgressBar now={60} label="React.js" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accueil;
