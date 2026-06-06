import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer glass-panel">
      <div className="footer-content">
        <div className="footer-brand">
          <h2 className="navbar-logo">
            <span className="text-gradient">ROBOTIC</span> KITCHEN
          </h2>
          <p className="footer-tagline">"Everything for Robotics, Electronics & Innovation"</p>
          <div className="footer-socials">
            {/* Social Icons would go here */}
          </div>
        </div>
        <div className="footer-links">
          <div className="link-group">
            <h3>Shop</h3>
            <a href="/categories/arduino">Arduino</a>
            <a href="/categories/sensors">Sensors</a>
            <a href="/categories/motors">Motors</a>
          </div>
          <div className="link-group">
            <h3>Company</h3>
            <a href="/about">About Us</a>
            <a href="/contact">Contact</a>
            <a href="/blog">Blog</a>
          </div>
          <div className="link-group">
            <h3>Support</h3>
            <a href="/faq">FAQ</a>
            <a href="/shipping">Shipping</a>
            <a href="/returns">Returns</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Robotic Kitchen. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
