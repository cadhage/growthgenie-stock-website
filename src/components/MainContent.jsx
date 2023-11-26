// // import { useState } from "react";

// // const MainContain = () => {
// //   const [data, setData] = useState([]);

// //   const fetchData = () => {
// //     fetch("http://localhost:8080/api/topwealthiest") // Replace with your API endpoint
// //       .then((response) => response.json())
// //       .then((result) => {
// //         setData(result); // Store fetched data in state
// //       })
// //       .catch((error) => {
// //         console.error("Error fetching data:", error);
// //       });
// //   };

// //   return (
// //     <div className="main-container">
// //       <button onClick={fetchData}>Fetch Data</button>
// //       <table>
// //         <thead>
// //           <tr>
// //             <th>ACCOUNTID</th>
// //             <th>CUSTOMERID</th>
// //             <th>ACCOUNTTYPE</th>
// //             <th>ACCOUNTBALANCE</th>
// //             <th>ACCOUNTSTATUS</th>
// //           </tr>
// //         </thead>
// //         <tbody>
// //           {data.map((item, index) => (
// //             <tr key={index}>
// //               <td>{item.ACCOUNTID}</td>
// //               <td>{item.CUSTOMERID}</td>
// //               <td>{item.ACCOUNTTYPE}</td>
// //               <td>{item.ACCOUNTBALANCE}</td>
// //               <td>{item.ACCOUNTSTATUS}</td>
// //             </tr>
// //           ))}
// //         </tbody>
// //       </table>
// //     </div>
// //   );
// // };

// // export default MainContain;
// import { useState, useEffect } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faEllipsisV, faBars } from "@fortawesome/free-solid-svg-icons";

// const MainContain = ({handleItemClick}) => {
//   const [data, setData] = useState([]);
//   const [collapsed, setCollapsed] = useState(false);
//   const [isMobile, setIsMobile] = useState(false);

//   const toggleCollapse = () => {
//     setCollapsed(!collapsed);
//   };

//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth <= 768) {
//         setIsMobile(true);
//         setCollapsed(true);
//       } else {
//         setIsMobile(false);
//         setCollapsed(false);
//       }
//     };

//     // Listen for window resize events
//     window.addEventListener("resize", handleResize);

//     // Initial check on component mount
//     handleResize();

//     // Cleanup the event listener
//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   const fetchData = () => {
//     fetch("http://localhost:8080/api/topwealthiest") // Replace with your API endpoint
//       .then((response) => response.json())
//       .then((result) => {
//         setData(result); // Store fetched data in state
//       })
//       .catch((error) => {
//         console.error("Error fetching data:", error);
//       });
//   };

//   return (
//     <div className="main-container">
//       {isMobile && (
//         <div className={`toggle-top${collapsed ? " collapsed" : ""}`}>
//           <FontAwesomeIcon icon={faEllipsisV} className="menu-icon" />
//         </div>
//       )}
//       {isMobile && (
//         <button
//           className={`toggle-btn${collapsed ? " collapsed" : ""}`}
//           onClick={toggleCollapse}
//         >
//           <FontAwesomeIcon icon={faBars} className="menu-icon" />
//         </button>
//       )}
//       <aside className={`sidebar-left${collapsed ? " collapsed" : ""}`}>
//         {
//           <ul>
//             <li>
//               <button
//                 className="sidebar-link"
//                 onClick={() => handleItemClick("Stokes")}
//               >
//                 Stokes
//               </button>
//             </li>
//             <li>
//               <button
//                 className="sidebar-link"
//                 onClick={() => handleItemClick("Mutual Funds")}
//               >
//                 Mutual Funds
//               </button>
//             </li>
//             <li>
//               <button
//                 className="sidebar-link"
//                 onClick={() => handleItemClick("Fixed Deposit")}
//               >
//                 Fixed Deposit
//               </button>
//             </li>
//           </ul>
//         }
//       </aside>
//       <div className="content">
//         <button onClick={fetchData}>Fetch Data</button>
//         <table>
//           <thead>
//             <tr>
//               <th>ACCOUNTID</th>
//               <th>CUSTOMERID</th>
//               <th>ACCOUNTTYPE</th>
//               <th>ACCOUNTBALANCE</th>
//               <th>ACCOUNTSTATUS</th>
//             </tr>
//           </thead>
//           <tbody>
//             {data.map((item, index) => (
//               <tr key={index}>
//                 <td>{item.ACCOUNTID}</td>
//                 <td>{item.CUSTOMERID}</td>
//                 <td>{item.ACCOUNTTYPE}</td>
//                 <td>{item.ACCOUNTBALANCE}</td>
//                 <td>{item.ACCOUNTSTATUS}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default MainContain;
// import { useState, useEffect } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faEllipsisV, faBars } from "@fortawesome/free-solid-svg-icons";

// const MainContain = () => {
//   const [data, setData] = useState([]);
//   const [collapsed, setCollapsed] = useState(false);
//   const [isMobile, setIsMobile] = useState(false);

//   const toggleCollapse = () => {
//     setCollapsed(!collapsed);
//   };

//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth <= 768) {
//         setIsMobile(true);
//         setCollapsed(true);
//       } else {
//         setIsMobile(false);
//         setCollapsed(false);
//       }
//     };

//     // Listen for window resize events
//     window.addEventListener("resize", handleResize);

//     // Initial check on component mount
//     handleResize();

//     // Cleanup the event listener
//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   const handleItemClick = (item) => {
//     // Handle item click (You can implement your logic here)
//     console.log(`Clicked: ${item}`);
//   };
// Copy code
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV, faBars } from "@fortawesome/free-solid-svg-icons";

const MainContain = () => {
  const [data, setData] = useState([]);
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

  const handleItemClick = (item) => {
    // Handle item click (You can implement your logic here)
    console.log(`Clicked: ${item}`);
  };

  const fetchData = () => {
    fetch("http://localhost:8080/api/topwealthiest") // Replace with your API endpoint
      .then((response) => response.json())
      .then((result) => {
        setData(result); // Store fetched data in state
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  return (
    <div className="main-container">
      {isMobile && (
        <div className={`toggle-top${collapsed ? " collapsed" : ""}`}>
          <FontAwesomeIcon icon={faEllipsisV} className="menu-icon" />
        </div>
      )}
      {isMobile && (
        <button
          className={`toggle-btn${collapsed ? " collapsed" : ""}`}
          onClick={toggleCollapse}
        >
          <FontAwesomeIcon icon={faBars} className="menu-icon" />
        </button>
      )}
      <aside
        className={`sidebar-left${isMobile && collapsed ? " collapsed" : ""}`}
      >
        <nav
          className={`sidebar-menu${
            isMobile && collapsed ? " hide-background" : ""
          }`}
        >
          <ul className="sidebar-menu">
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

      <div className="content">
        <button onClick={fetchData}>Fetch Data</button>
        <table>
          <thead>
            <tr>
              <th>ACCOUNTID</th>
              <th>CUSTOMERID</th>
              <th>ACCOUNTTYPE</th>
              <th>ACCOUNTBALANCE</th>
              <th>ACCOUNTSTATUS</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>{item.ACCOUNTID}</td>
                <td>{item.CUSTOMERID}</td>
                <td>{item.ACCOUNTTYPE}</td>
                <td>{item.ACCOUNTBALANCE}</td>
                <td>{item.ACCOUNTSTATUS}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MainContain;
