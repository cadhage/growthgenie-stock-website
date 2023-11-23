// Header.js
import React from "react";
import LogoImage from "../assets/react.svg"; // Import your logo image

const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        {/* Logo and left-aligned links */}
        <div className="logo">
          <img src={LogoImage} alt="Logo" width="100" height="50" />{" "}
          {/* Use your logo image */}
        </div>
        <nav className="header-nav">
          <ul className="header-menu-left">
            <li>
              <a href="/" className="header-link">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="header-link">
                About
              </a>
            </li>
            <li>
              <a href="/contact" className="header-link">
                Contact Us
              </a>
            </li>
            {/* Add more left-aligned navigation items */}
          </ul>
        </nav>
      </div>
      <div className="header-right">
        {/* Buttons for admin and customer login */}
        <div className="login-buttons">
          <button className="admin-login">Admin Login</button>
          <button className="customer-login">Customer Login</button>
        </div>
      </div>
    </header>
  );
};

export default Header;