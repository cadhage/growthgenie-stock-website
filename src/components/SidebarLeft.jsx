import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const SidebarLeft = ({ handleItemClick }) => {
  const [collapsed, setCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setIsMobile(true);
        setCollapsed(true);
      } else {
        setIsMobile(false);
        setCollapsed(false);
      }
    };

    // Listen for window resize events
    window.addEventListener("resize", handleResize);

    // Initial check on component mount
    handleResize();

    // Cleanup the event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <aside className={`sidebar-left${collapsed ? " collapsed" : ""}`}>
      {isMobile && (
        <button
          className={`toggle-btn${collapsed ? " collapsed" : ""}`}
          onClick={toggleCollapse}
        >
          <FontAwesomeIcon icon={faBars} className="menu-icon" />
        </button>
      )}
      <nav className={`sidebar-menu${collapsed ? " hide-background" : ""}`}>
        <ul>
          <li>
            <button
              className="sidebar-link"
              onClick={() => handleItemClick("Stokes")}
            >
              Stokes
            </button>
          </li>
          <li>
            <button
              className="sidebar-link"
              onClick={() => handleItemClick("Mutual Funds")}
            >
              Mutual Funds
            </button>
          </li>
          <li>
            <button
              className="sidebar-link"
              onClick={() => handleItemClick("Fixed Deposit")}
            >
              Fixed Deposit
            </button>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default SidebarLeft;
