import './Home.css';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to ShopHub</h1>
          <p>Discover amazing products at unbeatable prices</p>
          <button 
            className="hero-btn"
            onClick={() => navigate('/products')}
          >
            Start Shopping
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2>Why Choose Us?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🚚</div>
            <h3>Free Shipping</h3>
            <p>Free shipping on all orders over $50</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">💰</div>
            <h3>Best Prices</h3>
            <p>We guarantee the lowest prices online</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🔒</div>
            <h3>Secure Payment</h3>
            <p>Your payment information is always safe</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🔄</div>
            <h3>Easy Returns</h3>
            <p>30-day money-back guarantee on all items</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta">
        <h2>Special Offer!</h2>
        <p>Get 20% off your first order with code WELCOME20</p>
        <button 
          className="cta-btn"
          onClick={() => navigate('/products')}
        >
          Shop Now
        </button>
      </section>

      {/* About Section */}
      <section className="about-preview">
        <div className="about-content">
          <h2>About ShopHub</h2>
          <p>ShopHub is your one-stop destination for quality electronics and accessories at the best prices. We are committed to providing excellent customer service and a seamless shopping experience.</p>
          <button 
            className="about-btn"
            onClick={() => navigate('/about')}
          >
            Learn More
          </button>
        </div>
      </section>
    </div>
  );
}
