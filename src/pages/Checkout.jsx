import React, { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';
import { Link, useNavigate } from 'react-router-dom';
import { CreditCard, CheckCircle, Truck, Loader } from 'lucide-react';
import './Checkout.css';

// ✅ Razorpay TEST Key — replace with real key from razorpay.com
const RAZORPAY_KEY = 'rzp_test_1DP5mmOlF5G5ag';

const Checkout = () => {
  const { cart, cartTotal, clearCart } = useCart();
  const navigate = useNavigate();
  const [isSuccess, setIsSuccess] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('razorpay');
  const [isLoading, setIsLoading] = useState(false);
  const [orderId, setOrderId] = useState('');

  const [form, setForm] = useState({
    firstName: '', lastName: '', email: '', phone: '',
    address: '', city: '', state: '', pin: ''
  });

  const shippingCost = cartTotal > 0 ? 150 : 0;
  const finalTotal = cartTotal + shippingCost;

  useEffect(() => {
    if (cart.length === 0 && !isSuccess) navigate('/cart');
    window.scrollTo(0, 0);
  }, [cart.length, isSuccess, navigate]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRazorpayPayment = () => {
    setIsLoading(true);
    const options = {
      key: RAZORPAY_KEY,
      amount: finalTotal * 100,
      currency: 'INR',
      name: 'Robotic Kitchen',
      description: `Order of ${cart.length} item(s)`,
      image: '/favicon.svg',
      handler: function (response) {
        const newOrderId = 'RK-' + Math.floor(Math.random() * 1000000);
        setOrderId(newOrderId);
        clearCart();
        setIsSuccess(true);
        setIsLoading(false);
      },
      prefill: {
        name: `${form.firstName} ${form.lastName}`,
        email: form.email,
        contact: form.phone,
      },
      notes: {
        address: `${form.address}, ${form.city}, ${form.state} - ${form.pin}`,
      },
      theme: { color: '#00d2ff' },
      modal: {
        ondismiss: function () {
          setIsLoading(false);
        }
      }
    };
    const rzp = new window.Razorpay(options);
    rzp.on('payment.failed', function (response) {
      alert('Payment failed! Please try again.\n' + response.error.description);
      setIsLoading(false);
    });
    rzp.open();
  };

  const handleCOD = () => {
    setIsLoading(true);
    setTimeout(() => {
      setOrderId('RK-' + Math.floor(Math.random() * 1000000));
      clearCart();
      setIsSuccess(true);
      setIsLoading(false);
    }, 1500);
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    if (paymentMethod === 'razorpay') {
      handleRazorpayPayment();
    } else {
      handleCOD();
    }
  };

  if (isSuccess) {
    return (
      <div className="checkout-page animate-fade-in">
        <div className="success-container glass-panel">
          <CheckCircle size={80} className="success-icon" />
          <h1>Payment Successful! 🎉</h1>
          <p>Thank you for your purchase! Your order is being packed and will be shipped soon by the Robotic Kitchen team.</p>
          <div className="order-details">
            <p><span>Order ID: </span><strong>{orderId}</strong></p>
            <p><span>Status: </span><strong style={{ color: '#00ff88' }}>✅ Confirmed</strong></p>
            <p><span>Payment: </span><strong>{paymentMethod === 'cod' ? 'Cash on Delivery' : 'Online Payment'}</strong></p>
            <p><span>Amount: </span><strong>₹{finalTotal.toLocaleString('en-IN')}</strong></p>
            <p><span>Expected Delivery: </span><strong>3–5 Business Days</strong></p>
          </div>
          <Link to="/shop" className="btn btn-primary w-100" style={{ textAlign: 'center', textDecoration: 'none' }}>
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="checkout-page animate-fade-in">
      <h1 className="page-title">Checkout</h1>
      <div className="checkout-container">

        <div className="checkout-form-section glass-panel">
          <form onSubmit={handlePlaceOrder}>
            <h2>Shipping Information</h2>
            <div className="form-row">
              <div className="form-group">
                <label>First Name</label>
                <input name="firstName" type="text" required placeholder="Satyam" value={form.firstName} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label>Last Name</label>
                <input name="lastName" type="text" required placeholder="Anand" value={form.lastName} onChange={handleChange} />
              </div>
            </div>
            <div className="form-group">
              <label>Email Address</label>
              <input name="email" type="email" required placeholder="hello@example.com" value={form.email} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Phone Number</label>
              <input name="phone" type="tel" required placeholder="+91 9876543210" value={form.phone} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Full Address</label>
              <input name="address" type="text" required placeholder="123 Innovation Street, Tech Park" value={form.address} onChange={handleChange} />
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>City</label>
                <input name="city" type="text" required placeholder="New Delhi" value={form.city} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label>State</label>
                <input name="state" type="text" required placeholder="Delhi" value={form.state} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label>PIN Code</label>
                <input name="pin" type="text" required placeholder="110001" value={form.pin} onChange={handleChange} />
              </div>
            </div>

            <h2 style={{ marginTop: '2rem' }}>Payment Method</h2>
            <div className="payment-methods">
              <div
                className={`payment-method-btn ${paymentMethod === 'razorpay' ? 'selected' : ''}`}
                onClick={() => setPaymentMethod('razorpay')}
              >
                <CreditCard size={20} />
                <span>Pay Online</span>
                <small style={{ fontSize: '0.7rem', display: 'block', opacity: 0.7 }}>Card / UPI / NetBanking</small>
              </div>
              <div
                className={`payment-method-btn ${paymentMethod === 'cod' ? 'selected' : ''}`}
                onClick={() => setPaymentMethod('cod')}
              >
                <Truck size={20} />
                <span>Cash on Delivery</span>
                <small style={{ fontSize: '0.7rem', display: 'block', opacity: 0.7 }}>Pay when delivered</small>
              </div>
            </div>

            {paymentMethod === 'razorpay' && (
              <div className="animate-fade-in">
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '1rem', padding: '0.8rem', background: 'rgba(0,210,255,0.05)', borderRadius: '8px', border: '1px solid rgba(0,210,255,0.2)' }}>
                  🔒 Secure payment via <strong>Razorpay</strong> — Supports UPI, Debit/Credit Card, NetBanking & Wallets
                </p>
              </div>
            )}

            {paymentMethod === 'cod' && (
              <div className="animate-fade-in">
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '1rem', padding: '0.8rem', background: 'rgba(255,107,0,0.05)', borderRadius: '8px', border: '1px solid rgba(255,107,0,0.2)' }}>
                  🚚 Cash on Delivery — Pay ₹{finalTotal.toLocaleString('en-IN')} when your order arrives.
                </p>
              </div>
            )}

            <button
              type="submit"
              className="btn btn-primary w-100"
              style={{ marginTop: '2rem', padding: '1rem', fontSize: '1.1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}
              disabled={isLoading}
            >
              {isLoading ? (
                <><Loader size={20} className="spin" /> Processing...</>
              ) : (
                paymentMethod === 'razorpay'
                  ? `🔒 Pay ₹${finalTotal.toLocaleString('en-IN')} via Razorpay`
                  : `🚚 Place COD Order (₹${finalTotal.toLocaleString('en-IN')})`
              )}
            </button>
          </form>
        </div>

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
