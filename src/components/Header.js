import React, { Component } from "react";
import "./Header.scss";

class Header extends Component {
  render() {
    return (
      <header className="navbar navbar-expand navbar-dark flex-column flex-md-row bd-navbar">
        <nav role="nav">
          <ul className="navbar-nav bd-navbar-nav flex-row">
            <li className="nav-item">
              <a className="nav-link" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Home
              </a>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
