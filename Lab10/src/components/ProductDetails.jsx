import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { PRODUCTS } from '../constants/products';
import './ProductDetails.css';

export default function ProductDetails({ onAddToCart }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  
  const product = PRODUCTS.find(p => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="not-found">
        <h2>Product not found</h2>
        <button onClick={() => navigate('/products')}>Back to Products</button>
      </div>
    );
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      onAddToCart(product);
    }
    setQuantity(1);
  };

  // Get related products from same category
  const relatedProducts = PRODUCTS.filter(
    p => p.category === product.category && p.id !== product.id
  ).slice(0, 3);

  return (
    <div className="product-details-container">
      <button className="back-button" onClick={() => navigate('/products')}>
        ← Back to Products
      </button>

      <div className="details-wrapper">
        <div className="details-image">
          <img src={product.image} alt={product.name} />
          <span className="in-stock">In Stock</span>
        </div>

        <div className="details-info">
          <div className="breadcrumb">
            <span>{product.category}</span>
          </div>

          <h1>{product.name}</h1>

          <div className="rating-section">
            <div className="rating">⭐ {product.rating} out of 5</div>
            <div className="reviews">{product.reviews} customer reviews</div>
          </div>

          <div className="price-section">
            <h2 className="price">${product.price}</h2>
            <p className="price-note">Price may vary by location</p>
          </div>

          <div className="description-section">
            <h3>About this item</h3>
            <p>{product.description}</p>
          </div>

          <div className="purchase-section">
            <div className="quantity-selector">
              <label htmlFor="quantity">Quantity:</label>
              <div className="quantity-controls">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="qty-btn"
                >
                  −
                </button>
                <input
                  id="quantity"
                  type="number"
                  value={quantity}
                  onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                  className="qty-input"
                />
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="qty-btn"
                >
                  +
                </button>
              </div>
            </div>

            <button 
              className="add-cart-button"
              onClick={handleAddToCart}
            >
               Add {quantity > 1 ? `${quantity} Items` : 'to Cart'}
            </button>

            <button className="wishlist-button">
               Add to Wishlist
            </button>
          </div>

          <div className="features">
            <h3>Key Features</h3>
            <ul>
              <li>✓ Free shipping on orders over $50</li>
              <li>✓ 30-day money-back guarantee</li>
              <li>✓ 2-year warranty included</li>
              <li>✓ 24/7 customer support</li>
            </ul>
          </div>
        </div>
      </div>

      {relatedProducts.length > 0 && (
        <div className="related-products">
          <h2>Related Products</h2>
          <div className="related-grid">
            {relatedProducts.map(prod => (
              <div 
                key={prod.id} 
                className="related-item"
                onClick={() => navigate(`/product/${prod.id}`)}
              >
                <img src={prod.image} alt={prod.name} />
                <h4>{prod.name}</h4>
                <p className="related-price">${prod.price}</p>
                <div className="related-rating">⭐ {prod.rating}</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
