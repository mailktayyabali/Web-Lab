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
          <p>Browse products from the Fake Store API</p>
          <button
            className="hero-btn"
            onClick={() => navigate('/products')}
          >
            Browse Products
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2>What We Offer</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>Free Shipping</h3>
            <p>Orders over $50 ship free</p>
          </div>
          <div className="feature-card">
            <h3>Good Prices</h3>
            <p>Competitive pricing on electronics</p>
          </div>
          <div className="feature-card">
            <h3>Secure Checkout</h3>
            <p>Safe payment processing</p>
          </div>
          <div className="feature-card">
            <h3>Easy Returns</h3>
            <p>30-day return policy</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta">
        <h2>First Order Special</h2>
        <p>Use code WELCOME20 for 20% off your first order</p>
        <button
          className="cta-btn"
          onClick={() => navigate('/products')}
        >
          Start Shopping
        </button>
      </section>

      {/* About Section */}
      <section className="about-preview">
        <div className="about-content">
          <h2>About Us</h2>
          <p>We're an online shop selling electronics and accessories. This is a demo site using the Fake Store API to display products.</p>
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
