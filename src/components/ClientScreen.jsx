import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
const ClientScreen = ({
  handleMutualFundClick,
  handleFixedDepositeClick,
  handleTopStokesClick,
}) => {
  const [isMobile, setIsMobile] = useState(false);
  const [showButtons, setShowButtons] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
        setShowButtons(false); // Hide buttons when switching to larger screens
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleButtons = () => {
    setShowButtons(!showButtons);
  };
  return (
    <div className="main-container">
      {isMobile && (
        <button className="menu-btn" onClick={toggleButtons}>
          <FontAwesomeIcon icon={faBars} className="menu-icon" />
        </button>
      )}
      {showButtons && (
        <div className={`horizontal-menu${isMobile ? " mobile-view" : ""}`}>
          <button className="menu-item" onClick={() => handleTopStokesClick()}>
            Stokes
          </button>
          <button className="menu-item" onClick={() => handleMutualFundClick()}>
            Mutual Funds
          </button>
          <button
            className="menu-item"
            onClick={() => handleFixedDepositeClick()}
          >
            Fixed Deposit
          </button>
        </div>
      )}
      {/* <button onClick={fetchTopPerformingFD}>Fetch Top FD Data</button> */}
      {/* Display fetched Fixed Deposit data */}
    </div>
  );
};

export default ClientScreen;
