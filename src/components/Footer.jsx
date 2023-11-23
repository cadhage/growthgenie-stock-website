// Footer.js
import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>
          &copy; {new Date().getFullYear()} Stock Website. All rights reserved.
        </p>
        {/* Other footer content */}
      </div>
    </footer>
  );
};

export default Footer;
