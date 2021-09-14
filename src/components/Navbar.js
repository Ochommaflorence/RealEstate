import React, { useState} from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { FaTimes } from "react-icons/fa";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <div>
      <nav className="navbar">
        <div className="nav-container">
          <Link exact to="/" activeClassName="active" className="nav-logo">
            Florrie's Home
          </Link>
          <ul className="nav-menu">
            <li className="nav-item">
              <Link to="/" activeClassName="active" className="nav-links">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" activeClassName="active" className="nav-links">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/property"
                activeClassName="active"
                className="nav-links"
              >
                Property
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/rental" activeClassName="active" className="nav-links">
                Rentals
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/contact"
                activeClassName="active"
                className="nav-links"
              >
                Contact Us
              </Link>
            </li>
          </ul>
          <div className="navbar-icon" onClick={handleClick}>
            {click ? <FaTimes/> : <FaBars/>}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
