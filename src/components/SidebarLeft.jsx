// // SidebarLeft.js
// import React from "react";

// const SidebarLeft = ({ handleItemClick }) => {
//   return (
//     <aside className="sidebar-left">
//       {/* Menu options for stocks, mutual funds, FD */}
//       <nav>
//         <ul className="sidebar-menu">
//           <li>
//             <button
//               className="btn btn-primary"
//               onClick={() => handleItemClick("Tokens")}
//             >
//               Tokens
//             </button>
//           </li>
//           <li>
//             <button onClick={() => handleItemClick("Mutual Funds")}>
//               Mutual Funds
//             </button>
//           </li>
//           <li>
//             <button onClick={() => handleItemClick("Fixed Deposit")}>
//               Fixed Deposit
//             </button>
//           </li>
//           {/* Add more menu options */}
//         </ul>
//       </nav>
//     </aside>
//   );
// };

// export default SidebarLeft;
// SidebarLeft.js
import React from "react";

const SidebarLeft = ({ handleItemClick }) => {
  return (
    <aside className="sidebar-left">
      {/* Menu options for stocks, mutual funds, FD */}
      <nav>
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
          {/* Add more menu options */}
        </ul>
      </nav>
    </aside>
  );
};

export default SidebarLeft;
