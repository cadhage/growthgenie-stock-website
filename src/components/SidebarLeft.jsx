import { useState, useEffect } from "react";

const SidebarLeft = ({
  handleMutualFundClick,
  handleFixedDepositeClick,
  handleTopStokesClick,
  userType,
}) => {
  const [collapsed, setCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  console.log(userType);
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
            {userType === "admin" ? (
              <>
                <li>
                  <button
                    className="sidebar-link sidebar-button"
                    onClick={() => console.log("High-Net-Worth Investors")}
                  >
                    High-Net-Worth Investors
                  </button>
                </li>
                <li>
                  <button
                    className="sidebar-link sidebar-button"
                    onClick={() => console.log("Historical Returns")}
                  >
                    Historical Returns
                  </button>
                </li>
                <li>
                  <button
                    className="sidebar-link sidebar-button"
                    onClick={() => console.log("Tax Assessment")}
                  >
                    Tax Assessment
                  </button>
                </li>
              </>
            ) : (
              <>
                <li>
                  <button
                    className="sidebar-link sidebar-button"
                    onClick={() => handleTopStokesClick()}
                  >
                    Stokes
                  </button>
                </li>
                <li>
                  <button
                    className="sidebar-link sidebar-button"
                    onClick={() => handleMutualFundClick()}
                  >
                    Mutual Funds
                  </button>
                </li>
                <li>
                  <button
                    className="sidebar-link sidebar-button"
                    onClick={() => handleFixedDepositeClick()}
                  >
                    Fixed Deposit
                  </button>
                </li>
              </>
            )}
          </ul>
        </nav>
      </aside>
    )
  );
};

export default SidebarLeft;
