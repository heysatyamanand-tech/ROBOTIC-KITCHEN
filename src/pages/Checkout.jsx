import React, { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';
import { Link, useNavigate } from 'react-router-dom';
import { CreditCard, CheckCircle, Truck, Wallet } from 'lucide-react';
import './Checkout.css';

const Checkout = () => {
  const { cart, cartTotal, clearCart } = useCart();
  const navigate = useNavigate();
  const [isSuccess, setIsSuccess] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [orderId, setOrderId] = useState('');

  const shippingCost = cartTotal > 0 ? 150 : 0; // Flat ₹150 shipping
  const finalTotal = cartTotal + shippingCost;

  useEffect(() => {
    // Redirect back to cart if they try to checkout with empty cart (unless they just succeeded)
    if (cart.length === 0 && !isSuccess) {
      navigate('/cart');
    }
    window.scrollTo(0, 0);
  }, [cart.length, isSuccess, navigate]);

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setOrderId('RK-' + Math.floor(Math.random() * 1000000));
      clearCart();
      setIsSuccess(true);
    }, 1000);
  };

  if (isSuccess) {
    return (
      <div className="checkout-page animate-fade-in">
        <div className="success-container glass-panel">
          <CheckCircle size={80} className="success-icon" />
          <h1>Payment Successful!</h1>
          <p>Thank you for your purchase. Your order has been placed and is currently being processed by the Robotic Kitchen team.</p>
          
          <div className="order-details">
            <p><span>Order ID:</span> <strong>{orderId}</strong></p>
            <p><span>Status:</span> <strong>Processing for Shipment</strong></p>
            <p><span>Expected Delivery:</span> <strong>3-5 Business Days</strong></p>
          </div>
          
          <Link to="/shop" className="btn btn-primary w-100">Continue Shopping</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="checkout-page animate-fade-in">
      <h1 className="page-title">Checkout</h1>
      
      <div className="checkout-container">
        
        {/* Checkout Form */}
        <div className="checkout-form-section glass-panel">
          <form onSubmit={handlePlaceOrder}>
            <h2>Shipping Information</h2>
            <div className="form-row">
              <div className="form-group">
                <label>First Name</label>
                <input type="text" required placeholder="Satyam" />
              </div>
              <div className="form-group">
                <label>Last Name</label>
                <input type="text" required placeholder="Anand" />
              </div>
            </div>
            <div className="form-group">
              <label>Email Address</label>
              <input type="email" required placeholder="hello@example.com" />
            </div>
            <div className="form-group">
              <label>Phone Number</label>
              <input type="tel" required placeholder="+91 9876543210" />
            </div>
            <div className="form-group">
              <label>Full Address</label>
              <input type="text" required placeholder="123 Innovation Street, Tech Park" />
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>City</label>
                <input type="text" required placeholder="New Delhi" />
              </div>
              <div className="form-group">
                <label>State</label>
                <input type="text" required placeholder="Delhi" />
              </div>
              <div className="form-group">
                <label>PIN Code</label>
                <input type="text" required placeholder="110001" />
              </div>
            </div>

            <h2 style={{ marginTop: '2rem' }}>Payment Method</h2>
            <div className="payment-methods">
              <div 
                className={`payment-method-btn ${paymentMethod === 'card' ? 'selected' : ''}`}
                onClick={() => setPaymentMethod('card')}
              >
                <CreditCard size={20} /> Card
              </div>
              <div 
                className={`payment-method-btn ${paymentMethod === 'upi' ? 'selected' : ''}`}
                onClick={() => setPaymentMethod('upi')}
              >
                <Wallet size={20} /> UPI
              </div>
              <div 
                className={`payment-method-btn ${paymentMethod === 'cod' ? 'selected' : ''}`}
                onClick={() => setPaymentMethod('cod')}
              >
                <Truck size={20} /> COD
              </div>
            </div>

            {paymentMethod === 'card' && (
              <div className="card-details animate-fade-in">
                <div className="form-group">
                  <label>Card Number</label>
                  <input type="text" placeholder="XXXX XXXX XXXX XXXX" required />
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label>Expiry Date</label>
                    <input type="text" placeholder="MM/YY" required />
                  </div>
                  <div className="form-group">
                    <label>CVV</label>
                    <input type="password" placeholder="123" required />
                  </div>
                </div>
              </div>
            )}

            {paymentMethod === 'upi' && (
              <div className="form-group animate-fade-in">
                <label>UPI ID</label>
                <input type="text" placeholder="username@upi" required />
              </div>
            )}

            <button type="submit" className="btn btn-primary w-100" style={{ marginTop: '2rem', padding: '1rem' }}>
              Place Order (₹{finalTotal.toLocaleString('en-IN')})
            </button>
          </form>
        </div>

        {/* Order Summary Sidebar */}
        <div className="checkout-summary glass-panel">
          <h2>Order Summary</h2>
          
          <div className="summary-items">
            {cart.map(item => (
              <div key={item.id} className="summary-item">
                <div className="summary-item-name">
                  <span className="item-qty">{item.quantity}x</span> {item.name}
                </div>
                <span className="summary-item-price">₹{(item.price * item.quantity).toLocaleString('en-IN')}</span>
              </div>
            ))}
          </div>

          <div className="summary-row">
            <span>Subtotal</span>
            <span>₹{cartTotal.toLocaleString('en-IN')}</span>
          </div>
          <div className="summary-row">
            <span>Shipping</span>
            <span>₹{shippingCost.toLocaleString('en-IN')}</span>
          </div>
          <div className="summary-row total">
            <span>Total</span>
            <span>₹{finalTotal.toLocaleString('en-IN')}</span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Checkout;
