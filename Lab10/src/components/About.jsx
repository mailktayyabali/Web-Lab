import './About.css';

export default function About() {
  return (
    <div className="about-container">
      <div className="about-header">
        <h1>About ShopHub</h1>
        <p>An online shop for electronics and more</p>
      </div>

      <section className="about-section">
        <h2>What We Do</h2>
        <p>
          We're a demo e-commerce site that sells electronics and accessories. This site uses the Fake Store API to display and manage products. It's built with React and React Router.
        </p>
      </section>

      <section className="about-section">
        <h2>Features</h2>
        <ul className="mission-list">
          <li>Browse products by category</li>
          <li>Search and filter items</li>
          <li>Add products to cart</li>
          <li>View product details and ratings</li>
          <li>Manage cart quantities</li>
        </ul>
      </section>

      <section className="about-section">
        <h2>What We Offer</h2>
        <div className="benefits-grid">
          <div className="benefit-item">
            <h3>Free Shipping</h3>
            <p>Orders over $50 ship free</p>
          </div>
          <div className="benefit-item">
            <h3>Easy Returns</h3>
            <p>30-day return policy on all orders</p>
          </div>
          <div className="benefit-item">
            <h3>Fair Prices</h3>
            <p>Competitive pricing on electronics</p>
          </div>
          <div className="benefit-item">
            <h3>Quick Delivery</h3>
            <p>Most orders ship within 2-3 days</p>
          </div>
          <div className="benefit-item">
            <h3>Secure Checkout</h3>
            <p>Safe payment processing</p>
          </div>
          <div className="benefit-item">
            <h3>Customer Support</h3>
            <p>Email support for questions</p>
          </div>
        </div>
      </section>

      <section className="about-section">
        <h2>Contact</h2>
        <div className="contact-info">
          <p>Email: <a href="mailto:support@shophub.com">support@shophub.com</a></p>
          <p>Phone: <a href="tel:+1234567890">032567890</a></p>
          <p>Address: 123 Main Street, City, State 12345</p>
        </div>
      </section>
    </div>
  );
}
