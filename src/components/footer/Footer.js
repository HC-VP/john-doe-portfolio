import React from 'react';

import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa'; // Import icons from React Icons
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-column">
        <h4>John Doe</h4>
        <p>40 Rue Laure Diebold</p>
        <p>69009 Lyon, France</p>
        <p>Téléphone: 06 20 30 40 50</p>
        <div className="social-links">
          <a href="https://github.com/johndoe" target="_blank" rel="noopener noreferrer">
            <FaGithub size={30} />
          </a>
          <a href="https://twitter.com/johndoe" target="_blank" rel="noopener noreferrer">
            <FaTwitter size={30} />
          </a>
          <a href="https://linkedin.com/in/johndoe" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={30} />
          </a>
        </div>
      </div>

      <div className="footer-column">
        <h4>Liens utiles</h4>
        <ul>
          <li><a href="/">Accueil</a></li>
          <li><a href="/#about">A propos</a></li> 
          <li><a href="/services">Services</a></li>          
          <li><a href="/contact">Me contacter</a></li>
          <li><a href="/mentions">Mentions Légales</a></li>
        </ul>
      </div>

      <div className="footer-column">
        <h4>Mes dernières réalisations</h4>
        <ul>
          <li><a href="/realizations">Fresh food</a></li>
          <li><a href="/realizations">Restaurant Akira</a></li>
          <li><a href="/realizations">Espace bien-être</a></li>
        </ul>
      </div>

      <div className="footer-column">
        <h4> Mes derniers articles</h4>
        <ul>
          <li><a href="/blog">Coder son site en HTML/CSS</a></li>
          <li><a href="/blog">Vendre ses produits sur le web</a></li>
          <li><a href="/blog">Se positionner sur Google</a></li>
        </ul>
      </div>

      <div className="copyright">
        <p>&copy; 2024 John Doe</p>
        <a href="#top">Back to top</a>
      </div>
    </footer>
  );
};

export default Footer;
