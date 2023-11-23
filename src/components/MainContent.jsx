// // // MainContent.js
// // import React from "react";

// // const MainContent = ({ selectedItem }) => {
// //   return (
// //     <main className="main-content">
// //       {/* Display the selected item from SidebarLeft */}
// //       <div className="selected-item">
// //         <p>Selected Item: {selectedItem}</p>
// //       </div>
// //       {/* Other main content goes here */}
// //       <p>
// //         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
// //         tempor incididunt ut labore et dolore magna aliqua. Porttitor leo a diam
// //         sollicitudin. Sed turpis tincidunt id aliquet risus feugiat in ante.
// //         Tristique senectus et netus et. Sollicitudin nibh sit amet commodo nulla
// //         facilisi nullam vehicula. Nisl purus in mollis nunc sed id semper.
// //         Convallis tellus id interdum velit laoreet id donec ultrices. Sit amet
// //         risus nullam eget felis eget nunc lobortis mattis. Sollicitudin nibh sit
// //         amet commodo nulla facilisi nullam. Odio euismod lacinia at quis. Urna
// //         duis convallis convallis tellus id interdum. Adipiscing commodo elit at
// //         imperdiet dui accumsan sit. Non arcu risus quis varius quam quisque id
// //         diam vel. Faucibus scelerisque eleifend donec pretium vulputate sapien
// //         nec sagittis. Sed sed risus pretium quam vulputate dignissim suspendisse
// //         in est.
// //       </p>
// //       {/* ... */}
// //     </main>
// //   );
// // };

// // export default MainContent;
// // MainContent.js
// // MainContent.js
// import React, { useState } from "react";
// import axios from "axios"; // Import Axios

// const MainContent = () => {
//   const [apiData, setApiData] = useState(null);

//   const fetchDataFromApi = async () => {
//     try {
//       // Fetch data using Axios from your REST API endpoint
//       const response = await axios.get(
//         "http://localhost:8080/api/topwealthiest"
//       ); // Replace with your API endpoint
//       setApiData(response.data); // Set the fetched data in state
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   };

//   return (
//     <main className="main-content">
//       <div>
//         <button onClick={fetchDataFromApi}>Fetch Data from API</button>
//       </div>
//       {/* Display the fetched API data */}
//       {apiData && (
//         <div className="api-data">
//           <h2>API Data:</h2>
//           <pre>{JSON.stringify(apiData, null, 2)}</pre>
//         </div>
//       )}
//       {/* Other main content goes here */}
//       {/* ... */}
//     </main>
//   );
// };

// export default MainContent;
import React, { useState } from "react";

const MainContain = () => {
  const [data, setData] = useState([]);

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
  );
};

export default MainContain;
