import React from 'react';
import './Header.scss';

const Header = () => (
  <header className="navbar navbar-expand navbar-dark flex-column flex-md-row bd-navbar">
    <nav>
      <ul className="navbar-nav bd-navbar-nav flex-row">
        <li className="nav-item">
          <a className="nav-link" href="/">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">
            About
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
