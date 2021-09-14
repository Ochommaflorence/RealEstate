import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
  <nav className="navbar">
    <div className="nav-container">
      <Link exact to="/" className="nav-logo">
        Florrie's Home
      </Link>
      <ul>
        <li>
        <Link to="/" className="nav-links">
        Home
      </Link>
        </li>
        <li>
        <Link to="/about" className="nav-links">
        About
      </Link>
        </li>
        <li>
        <Link to="/property" className="nav-links">
        Property
      </Link>
        </li>
        <li>
        <Link to="/rentals" className="nav-links">
        Rentals
      </Link>
        </li>
        <li>
        <Link to="/contact" className="nav-links">
        Contact Us
      </Link>
        </li>
      </ul>
    </div>
  </nav>
    </div>
  );
}

export default Navbar;
