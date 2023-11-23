// Footer.js
import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      {/* Copyright info */}
      <p>
        &copy; {new Date().getFullYear()} Stock Exchange Website. All rights
        reserved.
      </p>
    </footer>
  );
};

export default Footer;
