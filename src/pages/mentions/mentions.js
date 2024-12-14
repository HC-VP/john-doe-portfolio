import React from 'react';
import './mentions.css'; // Add CSS file

const MentionsLegales = () => {
  return (
    <div className="mentions-container">
      <h1>Mentions Légales</h1>
      <div className="underline"></div>
      <div className="accordion" id="mentionsAccordion">
        {/* Éditeur du site */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Éditeur du site
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#mentionsAccordion"
          >
            <div className="accordion-body">
                <h5>John Doe</h5>
                <p>                     
                    40 Rue Laure Diebold <br />
                    69009 Lyon, France <br />
                    06 20 30 40 50 <br />
                    john.doe@gmail.com
              </p>
            </div>
          </div>
        </div>

        {/* Hébergeur */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Hébergeur
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#mentionsAccordion"
          >
            <div className="accordion-body">              
              <h5>Always Data</h5>
              <p>                 
                91 rue du Faubourg Saint-Honoré <br />
                75008 Paris <br />
                
                {' '}
                <a href="https://www.alwaysdata.com/" target="_blank" rel="noopener noreferrer">
                www.alwaysdata.com
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Crédits */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Crédits
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#mentionsAccordion"
          >
            <div className="accordion-body">
                <h5>Crédits </h5>
                <p>
                Site développé par John Doe, étudiant du CEF. <br />
                Les images libres de droit sont issues du site{' '}
                <a href="https://pixabay.com" target="_blank" rel="noopener noreferrer">
                  Pixabay
                </a>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentionsLegales;
