import React from 'react';
import { useCart } from '../context/CartContext';
import { Trash2, Plus, Minus, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Cart.css';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, cartTotal, clearCart } = useCart();

  if (cart.length === 0) {
    return (
      <div className="cart-page empty-cart animate-fade-in">
        <div className="empty-cart-content glass-panel">
          <ShoppingBag size={64} className="empty-icon" />
          <h2>Your Cart is Empty</h2>
          <p>Looks like you haven't added any electronic components yet.</p>
          <Link to="/shop" className="btn btn-primary mt-4">Start Shopping</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page animate-fade-in">
      <h1 className="page-title">Shopping Cart</h1>
      
      <div className="cart-container">
        <div className="cart-items glass-panel">
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <div className="cart-item-image">
                <span>{item.category}</span>
              </div>
              
              <div className="cart-item-details">
                <h3>{item.name}</h3>
                <p className="cart-item-price">₹{item.price.toLocaleString('en-IN')}</p>
              </div>
              
              <div className="cart-item-controls">
                <div className="quantity-control">
                  <button onClick={() => updateQuantity(item.id, item.quantity - 1)} disabled={item.quantity <= 1}>
                    <Minus size={16} />
                  </button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                    <Plus size={16} />
                  </button>
                </div>
                
                <p className="cart-item-subtotal">₹{(item.price * item.quantity).toLocaleString('en-IN')}</p>
                
                <button className="remove-btn" onClick={() => removeFromCart(item.id)}>
                  <Trash2 size={18} />
                </button>
              </div>
            </div>
          ))}
          
          <div className="cart-actions">
            <button className="btn btn-secondary" onClick={clearCart}>Clear Cart</button>
            <Link to="/shop" className="btn btn-primary" style={{ background: 'transparent', border: '1px solid var(--accent-blue)', color: 'var(--accent-blue)' }}>Continue Shopping</Link>
          </div>
        </div>
        
        <div className="cart-summary glass-panel">
          <h2>Order Summary</h2>
          <div className="summary-row">
            <span>Subtotal</span>
            <span>₹{cartTotal.toLocaleString('en-IN')}</span>
          </div>
          <div className="summary-row">
            <span>Shipping</span>
            <span>Calculated at checkout</span>
          </div>
          <div className="summary-row total">
            <span>Total</span>
            <span>₹{cartTotal.toLocaleString('en-IN')}</span>
          </div>
          <button className="btn btn-primary w-100 mt-4">Proceed to Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
