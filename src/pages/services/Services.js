import React from 'react';
import './Services.css';

const Services = () => {
  return (
    <div className="services-container">
      <h2>Services Offered</h2>
      <div className="services-cards">
        <div className="card">
          <h3>Web Development</h3>
          <p>Building responsive and dynamic websites using React, HTML, CSS, and JavaScript.</p>
        </div>
        <div className="card">
          <h3>UI/UX Design</h3>
          <p>Creating user-friendly interfaces and great user experiences for websites and apps.</p>
        </div>
        <div className="card">
          <h3>SEO Optimization</h3>
          <p>Optimizing websites for better search engine ranking and visibility.</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
