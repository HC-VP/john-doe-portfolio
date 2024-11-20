import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-column">
        <h4>John Doe</h4>
        <p>Address: 123 John Doe St., City, Country</p>
        <p>Phone: +123456789</p>
        <div className="social-links">
          <a href="https://github.com/johndoe" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://twitter.com/johndoe" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="https://linkedin.com/in/johndoe" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </div>

      <div className="footer-column">
        <h4>Links</h4>
        <ul>
          <li><a href="/services">Services</a></li>
          <li><a href="/realizations">Realizations</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </div>

      <div className="footer-column">
        <h4>Recent Projects</h4>
        <ul>
          <li><a href="/realizations">Project 1</a></li>
          <li><a href="/realizations">Project 2</a></li>
        </ul>
      </div>

      <div className="footer-column">
        <h4>Recent Blog Posts</h4>
        <ul>
          <li><a href="/blog">Blog Post 1</a></li>
          <li><a href="/blog">Blog Post 2</a></li>
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
