import React from 'react';
import '../Styles/Fotter.css';

const Footer = () => (
  <footer className="footer-section py-4 bg-dark text-center text-light">
    <div className="container">
      <p>© {new Date().getFullYear()} Suyog Raosaheb Daule. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
