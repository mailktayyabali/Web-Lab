import { useNavigate } from 'react-router-dom';
import './ShoppingCart.css';

export default function ShoppingCart({ cartItems, onUpdateQuantity, onRemoveItem, onClearCart }) {
  const navigate = useNavigate();

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = subtotal > 50 ? 0 : 10;
  const tax = subtotal * 0.1;
  const total = subtotal + shipping + tax;

  if (cartItems.length === 0) {
    return (
      <div className="cart-container">
        <h1>Shopping Cart</h1>
        <div className="empty-cart">
          <div className="empty-icon">🛒</div>
          <h2>Your cart is empty</h2>
          <p>Add items to your cart to get started shopping!</p>
          <button 
            className="continue-shopping-btn"
            onClick={() => navigate('/products')}
          >
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <h1>Shopping Cart</h1>

      <div className="cart-wrapper">
        <div className="cart-items-section">
          <div className="cart-items">
            {cartItems.map((item) => (
              <div key={`${item.id}-${item.quantity}`} className="cart-item">
                <img src={item.image} alt={item.name} className="item-image" />
                
                <div className="item-details">
                  <h3>{item.name}</h3>
                  <p className="item-category">{item.category}</p>
                  <p className="item-price">${item.price}</p>
                </div>

                <div className="quantity-controls">
                  <button
                    onClick={() => onUpdateQuantity(item.id, Math.max(1, item.quantity - 1))}
                    className="qty-btn"
                  >
                    −
                  </button>
                  <input
                    type="number"
                    value={item.quantity}
                    onChange={(e) => onUpdateQuantity(item.id, Math.max(1, parseInt(e.target.value) || 1))}
                    className="qty-input"
                  />
                  <button
                    onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                    className="qty-btn"
                  >
                    +
                  </button>
                </div>

                <div className="item-total">
                  ${(item.price * item.quantity).toFixed(2)}
                </div>

                <button
                  className="remove-btn"
                  onClick={() => onRemoveItem(item.id)}
                  title="Remove item"
                >
                  ✕
                </button>
              </div>
            ))}
          </div>

          <button 
            className="clear-cart-btn"
            onClick={onClearCart}
          >
            Clear Cart
          </button>
        </div>

        <div className="order-summary">
          <h2>Order Summary</h2>
          
          <div className="summary-items">
            <div className="summary-row">
              <span>Subtotal ({cartItems.length} items):</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            
            <div className="summary-row">
              <span>Shipping:</span>
              <span className={shipping === 0 ? 'free' : ''}>
                {shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}
              </span>
            </div>
            
            <div className="summary-row">
              <span>Tax (10%):</span>
              <span>${tax.toFixed(2)}</span>
            </div>
          </div>

          <div className="summary-divider"></div>

          <div className="summary-total">
            <span>Total:</span>
            <span>${total.toFixed(2)}</span>
          </div>

          {shipping > 0 && (
            <p className="shipping-note">
              📦 Free shipping available on orders over $50!
            </p>
          )}

          <button className="checkout-btn">
            Proceed to Checkout
          </button>

          <button 
            className="continue-shopping-link"
            onClick={() => navigate('/products')}
          >
            Continue Shopping
          </button>
        </div>
      </div>

      <div className="cart-benefits">
        <div className="benefit">
          <span className="icon">✓</span>
          <span>Free returns within 30 days</span>
        </div>
        <div className="benefit">
          <span className="icon">✓</span>
          <span>Secure checkout with SSL</span>
        </div>
        <div className="benefit">
          <span className="icon">✓</span>
          <span>30-day money-back guarantee</span>
        </div>
      </div>
    </div>
  );
}
