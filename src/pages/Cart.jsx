import React from 'react';

const Cart = () => {
  return (
    <div className="animate-fade-in" style={{ padding: '4rem 2rem', maxWidth: '1400px', margin: '0 auto' }}>
      <h1 className="section-title">Shopping <span className="text-gradient">Cart</span></h1>
      <p style={{ textAlign: 'center', color: 'var(--text-secondary)' }}>Your cart is empty.</p>
    </div>
  );
};

export default Cart;
