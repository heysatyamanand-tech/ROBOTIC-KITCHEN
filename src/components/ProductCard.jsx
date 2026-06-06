import React from 'react';
import { ShoppingCart, Star } from 'lucide-react';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card glass-panel">
      <div className="product-image-container">
        {/* Placeholder for actual image */}
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
          <span className="product-price">${product.price.toFixed(2)}</span>
          <button className="add-to-cart-btn" aria-label="Add to cart">
            <ShoppingCart size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
