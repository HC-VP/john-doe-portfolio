import React from 'react';
import './Realizations.css';

const Realizations = () => {
  return (
    <div className="realizations-container">
      <h2>Portfolio</h2>
      <div className="projects">
        <div className="card">
          <h3>Fresh food</h3>
          <p>A brief description of the project.</p>
        </div>
        <div className="card">
          <h3>Restaurant Akira</h3>
          <p>A brief description of the project.</p>
        </div>
        <div className="card">
          <h3>Espace bien-être</h3>
          <p>A brief description of the project.</p>
        </div>
      </div>
    </div>
  );
};

export default Realizations;
