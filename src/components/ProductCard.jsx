import React from 'react';
import { ShoppingCart, Star, Check } from 'lucide-react';
import { useCart } from '../context/CartContext';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  const { addToCart, cart } = useCart();
  
  // Check if item is already in cart just for visual feedback (optional)
  const isInCart = cart.some(item => item.id === product.id);

  return (
    <div className="product-card glass-panel">
      <div className="product-image-container">
        <div className="product-image-placeholder">
          <span>{product.category}</span>
        </div>
        {product.isNew && <span className="product-badge">NEW</span>}
      </div>
      
      <div className="product-info">
        <h3 className="product-title">{product.name}</h3>
        
        <div className="product-rating">
          <Star size={14} className="star-icon filled" />
          <Star size={14} className="star-icon filled" />
          <Star size={14} className="star-icon filled" />
          <Star size={14} className="star-icon filled" />
          <Star size={14} className="star-icon half" />
          <span className="rating-count">({product.reviews || 12})</span>
        </div>
        
        <div className="product-price-row">
          <span className="product-price">₹{product.price.toLocaleString('en-IN')}</span>
          <button 
            className={`add-to-cart-btn ${isInCart ? 'added' : ''}`} 
            aria-label="Add to cart"
            onClick={() => addToCart(product)}
            style={isInCart ? { background: 'var(--accent-blue)', color: '#fff' } : {}}
          >
            {isInCart ? <Check size={18} /> : <ShoppingCart size={18} />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
