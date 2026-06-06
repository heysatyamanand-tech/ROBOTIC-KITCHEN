import React from 'react';
import ProductCard from '../components/ProductCard';
import './Shop.css';

const MOCK_PRODUCTS = [
  { id: 1, name: 'Arduino Uno R3', category: 'Board', price: 850, reviews: 156, isNew: false },
  { id: 2, name: 'ESP32 Wi-Fi & Bluetooth Module', category: 'IoT', price: 450, reviews: 89, isNew: true },
  { id: 3, name: 'Ultrasonic Sensor HC-SR04', category: 'Sensor', price: 85, reviews: 312, isNew: false },
  { id: 4, name: 'L298N Motor Driver', category: 'Motor', price: 150, reviews: 145, isNew: false },
  { id: 5, name: 'NEMA 17 Stepper Motor', category: 'Motor', price: 800, reviews: 76, isNew: true },
  { id: 6, name: 'Raspberry Pi 4 Model B (4GB)', category: 'Board', price: 5500, reviews: 423, isNew: false },
  { id: 7, name: 'MG996R Metal Gear Servo', category: 'Servo', price: 350, reviews: 210, isNew: false },
  { id: 8, name: 'OLED Display 0.96" I2C', category: 'Display', price: 220, reviews: 118, isNew: true },
  { id: 9, name: 'F450 Quadcopter Frame', category: 'Drone', price: 950, reviews: 56, isNew: false },
  { id: 10, name: 'A2212 1000KV Brushless Motor', category: 'Drone', price: 380, reviews: 104, isNew: false },
  { id: 11, name: '30A SimonK ESC', category: 'Drone', price: 320, reviews: 88, isNew: false },
  { id: 12, name: '1045 Propellers (2 Pairs)', category: 'Drone', price: 150, reviews: 62, isNew: false },
  { id: 13, name: 'LiPo Battery 3S 2200mAh', category: 'Battery', price: 1200, reviews: 130, isNew: true },
  { id: 14, name: 'Flight Controller KK2.1.5', category: 'Drone', price: 1650, reviews: 45, isNew: false }
];

const Shop = () => {
  return (
    <div className="shop-page animate-fade-in" style={{ padding: '4rem 2rem', maxWidth: '1400px', margin: '0 auto' }}>
      <h1 className="section-title">All <span className="text-gradient">Products</span></h1>
      
      <div className="shop-layout">
        {/* Sidebar filters could go here */}
        <aside className="shop-sidebar glass-panel" style={{ padding: '1.5rem', height: 'fit-content', display: 'none' }}>
           <h3>Filters</h3>
        </aside>
        
        {/* Product Grid */}
        <div className="product-grid">
          {MOCK_PRODUCTS.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;
