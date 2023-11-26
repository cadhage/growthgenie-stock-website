// App.js
import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SidebarLeft from "./components/SidebarLeft";
import SidebarRight from "./components/SidebarRight";
import "./assets/styles.css";
import MainContent from "./components/MainContent";
import YourComponent from "./components/YourComponent";
import TopPerformingFD from "./components/TopPerformingFDs";

function App() {
  const [selectedItem, setSelectedItem] = useState("");
  const [fdData, setFdData] = useState([]);

  const handleItemClick = (itemName) => {
    setSelectedItem(itemName);
  };
  const handleMutualFundClick = () => {
    fetch("http://localhost:8080/api/topmutualfunds") // Replace with your API endpoint
      .then((response) => response.json())
      .then((data) => {
        setFdData(data);
        console.log(data); // Process the fetched data
      })
      .catch((error) => {
        console.error("Error fetching Mutual Funds data:", error);
      });
  };
  return (
    <div className="app">
      <Header />
      <div className="content">
        <SidebarLeft handleMutualFundClick={handleMutualFundClick} />
        <main className="main-content">
          {/* Main content goes here */}
          {/* <p>Main Content Area</p> */}
          {/* <MainContent selectedItem={selectedItem} /> */}
          <TopPerformingFD selectedItem={selectedItem} />
          {/* <LeftSidebar  /> */}
          {/* <TopPerformingFDs /> */}
          {/* <YourComponent /> */}
          <div>
            <table>
              <thead>
                <tr>
                  <th>FUNDNAME</th>
                  <th>FUNDMANAGER</th>
                  <th>NAV</th>
                  <th>INVESTMENTAMOUNT</th>
                  <th>MUTUALFUNDID</th>
                </tr>
              </thead>
              <tbody>
                {fdData.map((item, index) => (
                  <tr key={index}>
                    <td>{item.FUNDNAME}</td>
                    <td>{item.FUNDMANAGER}</td>
                    <td>{item.NAV}</td>
                    <td>{item.INVESTMENTAMOUNT}</td>
                    <td>{item.MUTUALFUNDID}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
        <SidebarRight />
      </div>
      <Footer />
    </div>
  );
}

export default App;
