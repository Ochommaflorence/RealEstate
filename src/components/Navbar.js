import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <div className="navbar">
        <div className="navbar-container container">
          <Link to="/" className="navbar-logo">
            <FaHome className="navbar-icon" />
            Florrie's <span>Home</span>
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
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
              <Link to="/rentals" className="nav-links">
                Rentals
              </Link>
            </li>
            <li className="nav-btn">
                {button ? (
                    <Link className="btn-link">
                        <Button buttonStyle="btn--outline">SEE ME</Button>
                    </Link>
                ) : (
                    <Link className="btn-link">
                        <Button buttonStyle="btn--outline" buttonSize="btn--mobile">SEE ME</Button>
                    </Link>
                )}
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
