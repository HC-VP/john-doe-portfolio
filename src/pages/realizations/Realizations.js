import React from 'react';
import { Helmet } from "react-helmet";
import './Realizations.css';

const Realisations = () => {
  return (
    <div className="realisations-container">

      <Helmet>
        <title>Realizations - John Doe Portfolio</title>
        <meta
          name="description"
          content="View John Doe's web development projects and portfolio, showcasing skills in React, JavaScript, and more."
        />
        <meta
          name="keywords"
          content="portfolio, projects, web development, JavaScript, React"
        />
        <meta property="og:title" content="Realizations - John Doe Portfolio" />
        <meta
          property="og:description"
          content="Explore John Doe's web development projects and portfolio, including full-stack web applications."
        />
        <meta property="og:image" content="/images/blog/technos.png" />
        <meta property="og:url" content="https://john-doe-portfolio.com/realizations" />
      </Helmet>




      <h1>PORTFOLIO</h1>
      
      <p>Voici quelques-unes de mes réalisations.</p>
      <div className="underline"></div>
      
      <div className="row">
        {/* First Project Card */}
        <div className="col-md-4 mb-4">
          <div className="card">
            <img
              src="/images/portfolio/fresh-food.jpg"
              className="card-img-top"
              alt="Fresh food"
            />
            <div className="card-body">
              <h5 className="card-title">Fresh food</h5>
              <p className="card-text">
                Réalisation d'un site avec commande en ligne.
              </p>
              <a href="/#fresh-food" className="btn btn-primary">
                Voir
              </a>
              <p className="card-footer">
                Site réalisé avec PHP et MySQL.
              </p>
            </div>
          </div>
        </div>

        {/* Second Project Card */}
        <div className="col-md-4 mb-4">
          <div className="card">
            <img
              src="/images/portfolio/restaurant-japonais.jpg"
              className="card-img-top"
              alt="Restaurant Akira"
            />
            <div className="card-body">
              <h5 className="card-title">Restaurant Akira</h5>
              <p className="card-text">
                Réalisation d'un site vitrine.
              </p>
              <a href="/#restaurant-akira" className="btn btn-primary">
                Voir
              </a>
              <p className="card-footer">
                Site réalisé avec WordPress.
              </p>
            </div>
          </div>
        </div>

        {/* Third Project Card */}
        <div className="col-md-4 mb-4">
          <div className="card">
            <img
              src="/images/portfolio/espace-bien-etre.jpg"
              className="card-img-top"
              alt="Espace Bien-être"
            />
            <div className="card-body">
              <h5 className="card-title">Espace bien-être</h5>
              <p className="card-text">
                Réalisation d'un site vitrine pour un praticien de bien-être.
              </p>
              <a href="/#espace-bien-etre" className="btn btn-primary">
                Voir
              </a>
              <p className="card-footer">
                Site réalisé en HTML/CSS.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Realisations;
