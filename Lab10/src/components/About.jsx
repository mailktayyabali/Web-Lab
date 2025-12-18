import './About.css';

export default function About() {
  return (
    <div className="about-container">
      <div className="about-header">
        <h1>About ShopHub</h1>
        <p>Your trusted online shopping destination</p>
      </div>

      <section className="about-section">
        <h2>Our Story</h2>
        <p>
          Founded in 2020, ShopHub began with a simple mission: to make quality products accessible to everyone at the best possible prices. What started as a small team has grown into a thriving e-commerce platform serving thousands of satisfied customers worldwide.
        </p>
      </section>

      <section className="about-section">
        <h2>Our Mission</h2>
        <p>
          We believe in providing an exceptional shopping experience by offering:
        </p>
        <ul className="mission-list">
          <li>🎯 Wide selection of quality products</li>
          <li>💵 Competitive and transparent pricing</li>
          <li>📦 Fast and reliable shipping</li>
          <li>👥 Responsive customer support</li>
          <li>🔒 Secure and safe transactions</li>
        </ul>
      </section>

      <section className="about-section">
        <h2>Why Choose ShopHub?</h2>
        <div className="benefits-grid">
          <div className="benefit-item">
            <h3>Quality Assurance</h3>
            <p>Every product goes through rigorous quality checks before shipment.</p>
          </div>
          <div className="benefit-item">
            <h3>Customer First</h3>
            <p>Your satisfaction is our priority. We offer hassle-free returns and refunds.</p>
          </div>
          <div className="benefit-item">
            <h3>Best Prices</h3>
            <p>We work directly with manufacturers to bring you unbeatable prices.</p>
          </div>
          <div className="benefit-item">
            <h3>Fast Delivery</h3>
            <p>Most orders are shipped within 24 hours for quick delivery.</p>
          </div>
          <div className="benefit-item">
            <h3>Secure Shopping</h3>
            <p>Your data is protected with industry-leading security measures.</p>
          </div>
          <div className="benefit-item">
            <h3>Expert Support</h3>
            <p>Our team is here 24/7 to help with any questions or concerns.</p>
          </div>
        </div>
      </section>

      <section className="about-section">
        <h2>Contact Us</h2>
        <div className="contact-info">
          <p>📧 Email: <a href="mailto:support@shophub.com">support@shophub.com</a></p>
          <p>📞 Phone: <a href="tel:+1234567890">+1 (234) 567-890</a></p>
          <p>📍 Address: 123 Shopping Street, Commerce City, CC 12345</p>
          <p>⏰ Hours: Monday - Friday, 9:00 AM - 6:00 PM (EST)</p>
        </div>
      </section>
    </div>
  );
}
