import React from 'react';
import './Home.css';
import { ArrowRight, Cpu, Zap, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-page animate-fade-in">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="text-gradient">Smart Electronics,</span> <br />
            Robotics & Automation Solutions
          </h1>
          <p className="hero-subtitle">
            Premium components for students, makers, engineers, and innovators. Build the future with cutting-edge robotics.
          </p>
          <div className="hero-actions">
            <Link to="/shop" className="btn btn-primary" style={{ textDecoration: 'none' }}>
              Shop Now <ArrowRight size={20} style={{ marginLeft: '8px' }} />
            </Link>
            <Link to="/projects" className="btn btn-secondary" style={{ textDecoration: 'none' }}>Explore Projects</Link>
          </div>
        </div>
        
        {/* Abstract futuristic background elements would go here or via CSS */}
        <div className="hero-glow"></div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="feature-card glass-panel">
          <Cpu className="feature-icon text-gradient-blue" size={48} />
          <h3>Premium Quality</h3>
          <p>Tested and verified components for reliable projects.</p>
        </div>
        <div className="feature-card glass-panel">
          <Zap className="feature-icon text-gradient-blue" size={48} />
          <h3>Fast Shipping</h3>
          <p>Express delivery on all orders worldwide.</p>
        </div>
        <div className="feature-card glass-panel">
          <Activity className="feature-icon text-gradient-blue" size={48} />
          <h3>Expert Support</h3>
          <p>24/7 technical assistance for your builds.</p>
        </div>
      </section>
      
      {/* Featured Categories (Placeholder for Grid) */}
      <section className="featured-categories">
        <h2 className="section-title">Explore <span className="text-gradient">Categories</span></h2>
        <div className="category-grid">
           {/* We will build the category grid component next */}
           <Link to="/categories" className="category-card glass-panel" style={{ textDecoration: 'none', color: 'inherit' }}>Arduino Boards</Link>
           <Link to="/categories" className="category-card glass-panel" style={{ textDecoration: 'none', color: 'inherit' }}>Sensors</Link>
           <Link to="/categories" className="category-card glass-panel" style={{ textDecoration: 'none', color: 'inherit' }}>Motors & Drivers</Link>
           <Link to="/categories" className="category-card glass-panel" style={{ textDecoration: 'none', color: 'inherit' }}>Drone Components</Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
