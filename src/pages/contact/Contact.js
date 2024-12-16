import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-form-wrapper">
        <h2>ME CONTACTER</h2>        
        <h4>Pour me contacter en vue d'un entretien ou d'une future collaboration, merci de remplir le formulaire de contact</h4>  

        <div className="underline"></div>
        
        <h3>Formulaire de contact</h3>
        <div className="contact-content">
          
          <div className="contact-form">
            <div className="form-group">
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Votre nom"
              />
              <label htmlFor="name">Votre nom</label>
            </div>

            <div className="form-group">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Votre adresse email"
              />
              <label htmlFor="email">Votre adresse email</label>
            </div>

            <div className="form-group">
              <input
                type="text"
                id="phone"
                name="phone"
                placeholder="Votre numéro de téléphone"
              />
              <label htmlFor="phone">Votre numéro de téléphone</label>
            </div>

            <div className="form-group">
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="Sujet"
              />
              <label htmlFor="subject">Sujet</label>
            </div>

            <div className="form-group">
              <textarea
                id="message"
                name="message"
                placeholder="Votre message"
              ></textarea>
              <label htmlFor="message">Votre message</label>
            </div>

            <button type="submit">Envoyer</button>
          </div>

          
          <div className="contact-details">
            <h3>Mes coordonnées</h3>
            <p>40 Rue Laure Diebold, 69009 Lyon, France</p>
            <p>Téléphone: 06 20 30 40 50</p>
            <div className="map">
              <iframe
                src="https://maps.google.com/maps?q=40%20Rue%20Laure%20Diebold,%2069009%20Lyon,%20France&output=embed"
                title="Google Maps Location"
                width="100%"
                height="300"
                frameBorder="0"
                allowFullScreen=""
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
