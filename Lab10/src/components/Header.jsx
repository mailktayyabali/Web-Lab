import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';

export default function Header({ cartCount }) {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo" onClick={() => navigate('/')}>
          <h1>🛍️ ShopHub</h1>
        </div>
        
        <nav className="nav-menu">
          <button className="nav-link" onClick={() => navigate('/')}>
            Home
          </button>
          <button className="nav-link" onClick={() => navigate('/products')}>
            Products
          </button>
          <button className="nav-link" onClick={() => navigate('/about')}>
            About
          </button>
        </nav>

        <button 
          className="cart-button"
          onClick={() => navigate('/cart')}
        >
          🛒 Cart 
          {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
        </button>
      </div>
    </header>
  );
}
