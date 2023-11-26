import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const SidebarLeft = ({
  handleMutualFundClick,
  handleFixedDepositeClick,
  handleTopStokesClick,
}) => {
  const [collapsed, setCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

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

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  return (
    !isMobile && (
      <aside className={`sidebar-left${collapsed ? " collapsed" : ""}`}>
        <nav className={`sidebar-menu${collapsed ? " hide-background" : ""}`}>
          <ul className="sidebar-menu">
            <li>
              <button
                className="sidebar-link"
                onClick={() => handleTopStokesClick()}
              >
                Stokes
              </button>
            </li>
            <li>
              <button
                className="sidebar-link"
                onClick={() => handleMutualFundClick()} // Handle Mutual Fund button click
              >
                Mutual Funds
              </button>
            </li>
            <li>
              <button
                className="sidebar-link"
                onClick={() => handleFixedDepositeClick()}
              >
                Fixed Deposit
              </button>
            </li>
            {/* Add more menu options */}
          </ul>
        </nav>
      </aside>
    )
  );
};

export default SidebarLeft;
