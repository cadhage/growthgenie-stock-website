import { useState } from "react";

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
