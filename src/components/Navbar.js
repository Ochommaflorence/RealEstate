import React from 'react';
import styled, { css } from 'styled-components/macro'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <Nav>
          <Logo>Florrie's Home</Logo>
          <MenuBars/>
          <NavMenu>
              <ul>
                  <li>
                      <Link to="/">Home</Link>
                  </li>
                  <li>
                      <Link to="/about">About</Link>
                  </li>
                  <li>
                      <Link to="/rentals">Rentals</Link>
                  </li>
                  <li>
                      <Link to="/property">Property</Link>
                  </li>
              </ul>
          </NavMenu>
      </Nav>
    </div>
  );
}

export default Navbar;
