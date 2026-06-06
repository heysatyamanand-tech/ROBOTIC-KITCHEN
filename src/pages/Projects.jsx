import React from 'react';
import { Link } from 'react-router-dom';
import './Shop.css'; // Reusing grid styles

const MOCK_PROJECTS = [
  { id: 1, title: 'Smart Home Automation System', level: 'Intermediate', type: 'IoT', image: 'Home Auto' },
  { id: 2, title: 'Obstacle Avoiding Robot Car', level: 'Beginner', type: 'Robotics', image: 'Robot Car' },
  { id: 3, title: 'Weather Station with ESP32', level: 'Beginner', type: 'IoT', image: 'Weather' },
  { id: 4, title: 'Quadcopter Drone Build', level: 'Advanced', type: 'Drone', image: 'Drone' },
];

const Projects = () => {
  return (
    <div className="animate-fade-in" style={{ padding: '4rem 2rem', maxWidth: '1400px', margin: '0 auto' }}>
      <h1 className="section-title">DIY <span className="text-gradient">Projects</span></h1>
      <p style={{ textAlign: 'center', color: 'var(--text-secondary)', marginBottom: '3rem' }}>
        Learn, build, and innovate with our step-by-step robotics tutorials.
      </p>

      <div className="product-grid">
        {MOCK_PROJECTS.map(project => (
          <div key={project.id} className="product-card glass-panel" style={{ padding: '0', display: 'flex', flexDirection: 'column' }}>
            <div className="product-image-container">
              <div className="product-image-placeholder">
                 <span>{project.image}</span>
              </div>
            </div>
            <div className="product-info">
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                 <span style={{ fontSize: '0.8rem', color: 'var(--accent-blue)', fontWeight: 'bold' }}>{project.type}</span>
                 <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{project.level}</span>
              </div>
              <h3 className="product-title">{project.title}</h3>
              <Link 
                to={project.id === 4 ? '/projects/drone' : '#'} 
                className="btn btn-secondary" 
                style={{ marginTop: 'auto', alignSelf: 'flex-start', padding: '0.5rem 1rem', fontSize: '0.9rem', textDecoration: 'none' }}
              >
                View Tutorial
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
