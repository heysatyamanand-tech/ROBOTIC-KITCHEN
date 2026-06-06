import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, User, Menu, X, Search } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled glass-panel' : ''}`}>
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <span className="text-gradient">ROBOTIC</span> KITCHEN
        </Link>

        <div className="search-bar desktop-only">
          <input type="text" placeholder="Search components, kits, sensors..." className="search-input" />
          <button className="search-btn">
            <Search size={18} />
          </button>
        </div>

        <div className={`nav-links ${mobileMenuOpen ? 'active glass-panel' : ''}`}>
          <Link to="/" onClick={() => setMobileMenuOpen(false)}>Home</Link>
          <Link to="/shop" onClick={() => setMobileMenuOpen(false)}>Shop</Link>
          <Link to="/categories" onClick={() => setMobileMenuOpen(false)}>Categories</Link>
          <Link to="/projects" onClick={() => setMobileMenuOpen(false)}>Projects</Link>
          <Link to="/blog" onClick={() => setMobileMenuOpen(false)}>Blog</Link>
        </div>

        <div className="nav-icons">
          <Link to="/cart" className="icon-btn cart-icon">
            <ShoppingCart size={24} />
            <span className="cart-badge">2</span>
          </Link>
          <Link to="/login" className="icon-btn">
            <User size={24} />
          </Link>
          <button className="mobile-menu-btn" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
