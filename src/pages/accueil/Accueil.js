import React from 'react';
import './Accueil.css';

function Accueil() {
  return (
    <div className="accueil-container">
      <div className="background-image">
        <div className="overlay">
          <h1>Bonjour, je suis John Doe</h1>
          <h2>Développeur web full stack</h2>
          <a href="#about" className="btn">En savoir plus</a>
        </div>
      </div>
      <div className="about-container" id="about">
        <div className="about-content">
          <div className="about-details">
            <h3>À propos</h3>
            <div className="line"></div>

            <p>Passionné par l'informatique et les nouvelles technologies, j'ai suivi une formation <strong>d'intégrateur-développeur web</strong> au CEF. Au cours de cette formation, j'ai pu acquérir des bases solides pour travailler dans le domaine du <strong>développement web</strong>.</p>
            
            <p>Basé à Lyon, je suis en recherche d'une alternance au sein d'une agence digitale pour consolider ma formation de <strong>développeur web full stack</strong></p>
            
            <p>J'accorde une attention particulière à la qualité du code que j'écris et je respecte les bonnes pratiques du web</p>
          </div>

          <div className='column'>

            

            <div className="about-photo">
              <img src="/images/john-doe-about.jpg" alt="John Doe" />
            </div>

            
              <h3>Mes compétences</h3>
            
            
            <div className="progress-bars">
              <div className="ProgressBar">
                <h4>HTML5 90%</h4>
              <div className="progress" style={{ width: '90%', backgroundColor: '#d9534f' }}></div>
            </div>
            <div className="ProgressBar">
              <h4>CSS3 80%</h4>
              <div className="progress" style={{ width: '80%', backgroundColor: '#5bc0de' }}></div>
            </div>
            <div className="ProgressBar">
              <h4>JavaScript 70%</h4>
              <div className="progress" style={{ width: '70%', backgroundColor: '#f0ad4e' }}></div>
            </div>
            <div className="ProgressBar">
              <h4>PHP 60%</h4>
              <div className="progress" style={{ width: '60%', backgroundColor: '#5bc0de' }}></div>
            </div>
            <div className="ProgressBar">
              <h4>React 50%</h4>
              <div className="progress" style={{ width: '50%', backgroundColor: '#0275d8' }}></div>
            </div>
          </div>
          
          
        </div>
      </div>
    </div>
  </div>
  );
}

export default Accueil;
