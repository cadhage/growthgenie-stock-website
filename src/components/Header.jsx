// Header.js
import React from "react";

const Header = () => {
  return (
    <header className="header">
      <nav>
        <div className="logo">
          <h1>Stock Website</h1>
        </div>
        <input type="checkbox" id="nav-toggle" className="nav-toggle" />
        <label htmlFor="nav-toggle" className="nav-burger">
          <span></span>
        </label>
        <ul className="nav-links">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          {/* Add more navigation items */}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
