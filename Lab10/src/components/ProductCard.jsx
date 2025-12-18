import './ProductCard.css';

export default function ProductCard({ product, onAddToCart, onViewDetails }) {
  return (
    <div className="product-card">
      <div className="product-image-wrapper">
        <img src={product.image} alt={product.name} className="product-image" />
        <span className="category-badge">{product.category}</span>
      </div>
      
      <div className="product-content">
        <h3 className="product-name">{product.name}</h3>
        
        <p className="product-description">{product.description}</p>
        
        <div className="product-rating">
          <span className="stars">⭐ {product.rating}</span>
          <span className="review-count">({product.reviews} reviews)</span>
        </div>
        
        <div className="product-footer">
          <span className="product-price">${product.price}</span>
          <div className="product-buttons">
            <button 
              className="btn btn-details"
              onClick={onViewDetails}
            >
              View Details
            </button>
            <button 
              className="btn btn-cart"
              onClick={() => onAddToCart(product)}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
