import React from 'react';
import './Services.css';

const Services = () => {
  return (
    
    <div className="services-container">
      
      <div className="services-image">
        <img src="/images/banner.jpg" alt="Services Banner" />
      </div>

      
      <h1>MON OFFRE DE SERVICES</h1>      
      <p>Voici les prestations sur lesquelles je peux intervenir.</p>

      <div className="services-list">
        {/* UX Design Service */}
        <div className="service-card">
          <div className="service-icon">
            <i className="fas fa-laptop"></i> {/* Use FontAwesome icon */}
          </div>
          <h3>UX DESIGN</h3>
          <p>
            L'UX Design est une méthode de conception centrée sur l'utilisateur.
            Son but est d’offrir une expérience de navigation optimale à l’internaute.
          </p>
        </div>

        {/* Web Development Service */}
        <div className="service-card">
          <div className="service-icon">
            <i className="fas fa-code"></i> {/* Use FontAwesome icon */}
          </div>
          <h3>Développement Web</h3>
          <p>
            Le développement de sites web repose sur l’utilisation des langages HTML, CSS, JavaScript et PHP.
          </p>
        </div>

        {/* SEO Service */}
        <div className="service-card">
          <div className="service-icon">
            <i className="fas fa-search"></i> {/* Use FontAwesome icon */}
          </div>
          <h3>Référencement</h3>
          <p>
            Le référencement naturel d’un site, aussi appelé SEO, consiste à mettre des techniques en œuvre pour améliorer sa position dans les résultats des moteurs de recherche.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
