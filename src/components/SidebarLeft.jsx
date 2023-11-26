// // // const SidebarLeft = ({ handleItemClick }) => {
// // //   return (
// // //     <aside className="sidebar-left">
// // //       {/* Menu options for stocks, mutual funds, FD */}
// // //       <nav>
// // //         <ul className="sidebar-menu">
// // //           <li>
// // //             <button
// // //               className="sidebar-link"
// // //               onClick={() => handleItemClick("Stokes")}
// // //             >
// // //               Stokes
// // //             </button>
// // //           </li>
// // //           <li>
// // //             <button
// // //               className="sidebar-link"
// // //               onClick={() => handleItemClick("Mutual Funds")}
// // //             >
// // //               Mutual Funds
// // //             </button>
// // //           </li>
// // //           <li>
// // //             <button
// // //               className="sidebar-link"
// // //               onClick={() => handleItemClick("Fixed Deposit")}
// // //             >
// // //               Fixed Deposit
// // //             </button>
// // //           </li>
// // //           {/* Add more menu options */}
// // //         </ul>
// // //       </nav>
// // //     </aside>
// // //   );
// // // };

// // // export default SidebarLeft;
// // import { useState, useEffect } from "react";
// // import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// // import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";

// // const SidebarLeft = ({ handleItemClick }) => {
// //   const [collapsed, setCollapsed] = useState(false);
// //   const [isMobile, setIsMobile] = useState(false);

// //   const toggleCollapse = () => {
// //     setCollapsed(!collapsed);
// //   };

// //   useEffect(() => {
// //     const handleResize = () => {
// //       if (window.innerWidth <= 768) {
// //         setIsMobile(true);
// //         setCollapsed(true);
// //       } else {
// //         setIsMobile(false);
// //         setCollapsed(false);
// //       }
// //     };

// //     // Listen for window resize events
// //     window.addEventListener("resize", handleResize);

// //     // Initial check on component mount
// //     handleResize();

// //     // Cleanup the event listener
// //     return () => {
// //       window.removeEventListener("resize", handleResize);
// //     };
// //   }, []);

// //   return (
// //     <aside className={`sidebar-left${collapsed ? " collapsed" : ""}`}>
// //       {isMobile && (
// //         <button className="toggle-btn" onClick={toggleCollapse}>
// //           <FontAwesomeIcon icon={faEllipsisV} />
// //         </button>
// //       )}
// //       <nav className="sidebar-menu">
// //         <ul className="sidebar-menu">
// //           <li>
// //             <button
// //               className="sidebar-link"
// //               onClick={() => handleItemClick("Stokes")}
// //             >
// //               Stokes
// //             </button>
// //           </li>
// //           <li>
// //             <button
// //               className="sidebar-link"
// //               onClick={() => handleItemClick("Mutual Funds")}
// //             >
// //               Mutual Funds
// //             </button>
// //           </li>
// //           <li>
// //             <button
// //               className="sidebar-link"
// //               onClick={() => handleItemClick("Fixed Deposit")}
// //             >
// //               Fixed Deposit
// //             </button>
// //           </li>
// //           Add more menu options
// //         </ul>
// //       </nav>
// //     </aside>
// //   );
// // };

// // export default SidebarLeft;
// // import { useState, useEffect } from "react";
// // import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// // import { faBars } from "@fortawesome/free-solid-svg-icons";

// // const SidebarLeft = ({ handleItemClick }) => {
// //   const [collapsed, setCollapsed] = useState(false);
// //   const [isMobile, setIsMobile] = useState(false);

// //   const toggleCollapse = () => {
// //     setCollapsed(!collapsed);
// //   };

// //   useEffect(() => {
// //     const handleResize = () => {
// //       if (window.innerWidth <= 768) {
// //         setIsMobile(true);
// //         setCollapsed(true);
// //       } else {
// //         setIsMobile(false);
// //         setCollapsed(false);
// //       }
// //     };

// //     // Listen for window resize events
// //     window.addEventListener("resize", handleResize);

// //     // Initial check on component mount
// //     handleResize();

// //     // Cleanup the event listener
// //     return () => {
// //       window.removeEventListener("resize", handleResize);
// //     };
// //   }, []);

// //   return (
// //     <aside className={`sidebar-left${collapsed ? " collapsed" : ""}`}>
// //       {isMobile && (
// //         <button className="toggle-btn" onClick={toggleCollapse}>
// //           <FontAwesomeIcon icon={faBars} className="menu-icon" />
// //         </button>
// //       )}
// //       <nav className="sidebar-menu">
// // import { useState, useEffect } from "react";
// // import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// // import { faBars } from "@fortawesome/free-solid-svg-icons";

// // const SidebarLeft = ({ handleItemClick }) => {
// //   const [collapsed, setCollapsed] = useState(false);
// //   const [isMobile, setIsMobile] = useState(false);

// //   const toggleCollapse = () => {
// //     setCollapsed(!collapsed);
// //   };

// //   useEffect(() => {
// //     const handleResize = () => {
// //       if (window.innerWidth <= 768) {
// //         setIsMobile(true);
// //         setCollapsed(true);
// //       } else {
// //         setIsMobile(false);
// //         setCollapsed(false);
// //       }
// //     };

// //     // Listen for window resize events
// //     window.addEventListener("resize", handleResize);

// //     // Initial check on component mount
// //     handleResize();

// //     // Cleanup the event listener
// //     return () => {
// //       window.removeEventListener("resize", handleResize);
// //     };
// //   }, []);

// //   return (
// //     <>
// //       {isMobile && (
// //         <button
// //           className={`toggle-btn${collapsed ? " collapsed" : ""}`}
// //           onClick={toggleCollapse}
// //         >
// //           <FontAwesomeIcon icon={faBars} className="menu-icon" />
// //         </button>
// //       )}
// //       <aside className={`sidebar-left${collapsed ? " collapsed" : ""}`}>
// //         <nav className="sidebar-menu">
// import { useState, useEffect } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faEllipsisV, faBars } from "@fortawesome/free-solid-svg-icons";

// const SidebarLeft = ({ handleItemClick }) => {
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

//   return (
//     <aside className={`sidebar-left${collapsed ? " collapsed" : ""}`}>
//       {isMobile && (
//         <>
//           <div className="toggle-top">
//             <FontAwesomeIcon icon={faEllipsisV} className="menu-icon" />
//           </div>
//           <button
//             className={`toggle-btn${collapsed ? " collapsed" : ""}`}
//             onClick={toggleCollapse}
//           >
//             <FontAwesomeIcon icon={faBars} className="menu-icon" />
//           </button>
//         </>
//       )}
//       <nav className={`sidebar-menu${collapsed ? " hide-background" : ""}`}>
//         <ul>
//           <li>
//             <button
//               className="sidebar-link"
//               onClick={() => handleItemClick("Stokes")}
//             >
//               Stokes
//             </button>
//           </li>
//           <li>
//             <button
//               className="sidebar-link"
//               onClick={() => handleItemClick("Mutual Funds")}
//             >
//               Mutual Funds
//             </button>
//           </li>
//           <li>
//             <button
//               className="sidebar-link"
//               onClick={() => handleItemClick("Fixed Deposit")}
//             >
//               Fixed Deposit
//             </button>
//           </li>
//         </ul>
//       </nav>
//     </aside>
//   );
// };

// export default SidebarLeft;
// import { useState, useEffect } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faEllipsisV, faBars } from "@fortawesome/free-solid-svg-icons";

// const SidebarLeft = ({ handleItemClick }) => {
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

//   return (
//     <aside className={`sidebar-left${collapsed ? " collapsed" : ""}`}>
//       {isMobile && (
//         <>
//           <div className="toggle-top">
//             <FontAwesomeIcon icon={faEllipsisV} className="menu-icon" />
//           </div>
//           <button
//             className={`toggle-btn${collapsed ? " collapsed" : ""}`}
//             onClick={toggleCollapse}
//           >
//             <FontAwesomeIcon icon={faBars} className="menu-icon" />
//           </button>
//         </>
//       )}
//       <nav className={`sidebar-menu${collapsed ? " hide-background" : ""}`}>
//         <ul>{/* Sidebar menu options */}</ul>
//       </nav>
//     </aside>
//   );
// };

// export default SidebarLeft;
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV, faBars } from "@fortawesome/free-solid-svg-icons";

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
          {/* //{" "} */}
        </ul>
      </nav>
    </aside>
  );
};

export default SidebarLeft;
