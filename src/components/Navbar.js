import React from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css"

const Navbar = () => {
  return (
    <div>
  <nav className="navbar">
    <div className="nav-container">
      <Link exact to="/" className="nav-logo">
        Florrie's Home
      </Link>
      <ul className="nav-menu">
        <li className="nav-item">
        <Link to="/" className="nav-links">
        Home
      </Link>
        </li>
        <li className="nav-item">
        <Link to="/about" className="nav-links">
        About
      </Link>
        </li>
        <li className="nav-item">
        <Link to="/property" className="nav-links">
        Property
      </Link>
        </li>
        <li className="nav-item">
        <Link to="/rental" className="nav-links">
        Rentals
      </Link>
        </li>
        <li className="nav-item">
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
