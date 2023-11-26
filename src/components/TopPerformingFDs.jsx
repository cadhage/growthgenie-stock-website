import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
const TopPerformingFDs = ({ handleMutualFundClick }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [showButtons, setShowButtons] = useState(false);
  const [fdData, setFdData] = useState([]);
  useEffect(() => {
    fetchTopPerformingFD(); // Trigger the API call for Mutual Funds on component mount
  }, [handleMutualFundClick]);
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

  const fetchTopPerformingFD = () => {
    fetch("http://localhost:8080/api/topmutualfunds") // Replace with your API endpoint
      .then((response) => response.json())
      .then((result) => {
        setFdData(result); // Store fetched FD data in state
      })
      .catch((error) => {
        console.error("Error fetching Fixed Deposit data:", error);
      });
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
          <button className="menu-item">Stokes</button>
          <button className="menu-item" onClick={handleMutualFundClick}>
            Mutual Funds
          </button>
          {/* <button className="menu-item">Fixed Deposit</button> */}
          <button className="menu-item" onClick={fetchTopPerformingFD}>
            MFixed Deposit
          </button>
        </div>
      )}
      {/* <button onClick={fetchTopPerformingFD}>Fetch Top FD Data</button> */}
      {/* Display fetched Fixed Deposit data */}
    </div>
  );
};

export default TopPerformingFDs;
