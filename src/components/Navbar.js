import React from 'react';

const Navbar = () => {
  return (
    <>
      <div className="navbar">
          <div className="navbar-container container">
           <Link to="/" className="navbar-logo">
               Florrie's <span>Home</span>
           </Link>
           <div className="menu-icon"></div>
          </div>
      </div>
    </>
  );
}

export default Navbar;
