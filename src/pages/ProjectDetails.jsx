import React, { useEffect } from 'react';
import { ExternalLink, Tag, User, Clock, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import './ProjectDetails.css';

const ProjectDetails = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="project-details-page animate-fade-in">
      {/* Main Content Area */}
      <div className="project-main-content">
        
        {/* Introduction Section */}
        <section className="project-section glass-panel">
          <h2>Introduction</h2>
          <p>
            Building a Quadcopter Drone from scratch is one of the most rewarding and challenging robotics projects. 
            This project uses an <strong>F450 Frame</strong>, a <strong>KK2.1.5 Flight Controller</strong>, and 
            <strong> 1000KV Brushless Motors</strong> to achieve stable flight and maneuverability.
          </p>
          <p>
            This setup offers <strong>powerful lift capacity, gyro-stabilization</strong>, and a <strong>customizable payload area</strong>, 
            making it perfect for enthusiasts looking to understand aerodynamics, electronic speed control, and remote radio operation.
          </p>
        </section>

        {/* Materials Section */}
        <section className="project-section glass-panel">
          <h2>Materials Needed</h2>
          <div className="materials-list">
            <div className="material-item">
              <div className="material-image">Frame</div>
              <div className="material-info">
                <h4>F450 Quadcopter Frame</h4>
                <p>Quantity: 1</p>
                <Link to="/shop" className="material-link">View Product <ExternalLink size={14} /></Link>
              </div>
            </div>
            <div className="material-item">
              <div className="material-image">Motor</div>
              <div className="material-info">
                <h4>A2212 1000KV Brushless Motor</h4>
                <p>Quantity: 4</p>
                <Link to="/shop" className="material-link">View Product <ExternalLink size={14} /></Link>
              </div>
            </div>
            <div className="material-item">
              <div className="material-image">ESC</div>
              <div className="material-info">
                <h4>30A SimonK ESC</h4>
                <p>Quantity: 4</p>
                <Link to="/shop" className="material-link">View Product <ExternalLink size={14} /></Link>
              </div>
            </div>
            <div className="material-item">
              <div className="material-image">FC</div>
              <div className="material-info">
                <h4>Flight Controller KK2.1.5</h4>
                <p>Quantity: 1</p>
                <Link to="/shop" className="material-link">View Product <ExternalLink size={14} /></Link>
              </div>
            </div>
          </div>
        </section>

        {/* Step by Step Section */}
        <section className="project-section glass-panel">
          <h2>Step-by-Step Instructions</h2>
          
          <div className="step-timeline">
            <div className="step-item">
              <div className="step-number">1</div>
              <div className="step-content">
                <h3>Frame Assembly & Power Distribution</h3>
                <p>Solder the ESC power cables to the bottom plate of the F450 frame, which acts as a Power Distribution Board (PDB).</p>
                <div className="step-code">
{`ESC 1-4 Red Wire -> PDB Positive (+) Pad
ESC 1-4 Black Wire -> PDB Negative (-) Pad
Battery Connector Red -> PDB Positive (+)
Battery Connector Black -> PDB Negative (-)`}
                </div>
              </div>
            </div>

            <div className="step-item">
              <div className="step-number">2</div>
              <div className="step-content">
                <h3>Mounting Motors and ESCs</h3>
                <p>Attach the 4 brushless motors to the frame arms. Connect the 3 wires from each motor to the 3 wires of its corresponding ESC. (Swap any two wires later if the motor spins in the wrong direction).</p>
              </div>
            </div>

            <div className="step-item">
              <div className="step-number">3</div>
              <div className="step-content">
                <h3>Flight Controller Connections (KK2.1.5)</h3>
                <p>Mount the flight controller in the center, facing the designated forward direction.</p>
                <div className="step-code">
{`Motor 1 (Front Left, CW)   -> FC M1
Motor 2 (Front Right, CCW) -> FC M2
Motor 3 (Rear Right, CW)   -> FC M3
Motor 4 (Rear Left, CCW)   -> FC M4`}
                </div>
              </div>
            </div>
            
            <div className="step-item">
              <div className="step-number">4</div>
              <div className="step-content">
                <h3>Radio Receiver Wiring</h3>
                <p>Connect your Radio Receiver (Rx) to the input pins on the left side of the KK2 board.</p>
                <div className="step-code">
{`Rx Aileron  -> FC AIL (CH1)
Rx Elevator -> FC ELE (CH2)
Rx Throttle -> FC THR (CH3)
Rx Rudder   -> FC RUD (CH4)`}
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>

      {/* Sidebar Info */}
      <aside className="project-sidebar glass-panel project-section">
        <h2 style={{ fontSize: '1.4rem' }}>Guide Info</h2>
        
        <div className="sidebar-info-group">
          <label><CheckCircle size={14}/> Difficulty</label>
          <span className="badge" style={{ background: 'rgba(255, 107, 0, 0.1)', color: 'var(--accent-orange)', borderColor: 'var(--accent-orange)' }}>
            Advanced
          </span>
        </div>

        <div className="sidebar-info-group">
          <label><Tag size={14}/> Category</label>
          <p style={{ margin: 0, fontWeight: '500', color: 'var(--text-primary)' }}>Drone / Aerial</p>
        </div>

        <div className="sidebar-info-group">
          <label><User size={14}/> Author</label>
          <p style={{ margin: 0, fontWeight: '500', color: 'var(--text-primary)' }}>RoboticKitchen Team</p>
        </div>

        <div className="sidebar-info-group">
          <label><Clock size={14}/> Estimated Time</label>
          <p style={{ margin: 0, fontWeight: '500', color: 'var(--text-primary)' }}>1 Week</p>
        </div>

        <div className="sidebar-info-group">
          <label><Tag size={14}/> Tags</label>
          <div className="tag-list">
            <span className="tag">drone</span>
            <span className="tag">quadcopter</span>
            <span className="tag">brushless</span>
            <span className="tag">flight-controller</span>
          </div>
        </div>
      </aside>

    </div>
  );
};

export default ProjectDetails;
