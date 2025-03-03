import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer bg-dark text-white text-center py-4 mt-5">
      <p>&copy; 2025 Food Lovers. All Rights Reserved. @abhi</p>

      <div className="footer-links mb-3">
        <Link to="/privacy-policy" className="text-white mx-2">Privacy Policy</Link>
        <Link to="/terms-of-service" className="text-white mx-2">Terms of Service</Link>
        <Link to="/contact-us" className="text-white mx-2">Contact Us</Link>
      </div>

      <div className="social-icons mb-3">
        <i className="fab fa-facebook-square text-white mx-2"></i>
        <i className="fab fa-twitter-square text-white mx-2"></i>
        <i className="fab fa-instagram-square text-white mx-2"></i>
      </div>
    </footer>
  );
}

export default Footer;
