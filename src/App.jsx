// App.js
import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SidebarLeft from "./components/SidebarLeft";
import SidebarRight from "./components/SidebarRight";
import "./assets/styles.css";
import MainContent from "./components/MainContent";
import Register from "./components/Register";
import ClientScreen from "./components/ClientScreen";

function App() {
  const [selectedItem, setSelectedItem] = useState("");
  const [fdData, setFdData] = useState([]);
  const [tableData, setTableData] = useState([]);
  const [mfData, setMfData] = useState([]);
  const [stoeksData, setStokesData] = useState([]);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    // Add other fields as needed
  });
  const [successMessage, setSuccessMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const handleItemClick = (itemName) => {
    setSelectedItem(itemName);
  };
  const handleMutualFundClick = () => {
    setSelectedItem("Mutual Funds");
    fetch("http://localhost:8080/api/topmutualfunds") // Replace with your API endpoint
      .then((response) => response.json())
      .then((data) => {
        setMfData(data);
        console.log(data); // Process the fetched data
      })
      .catch((error) => {
        console.error("Error fetching Mutual Funds data:", error);
      });
  };
  const handleFixedDepositeClick = () => {
    setSelectedItem("Fixed Deposits");
    fetch("http://localhost:8080/api/topfixeddeposits") // Replace with your API endpoint
      .then((response) => response.json())
      .then((data) => {
        setFdData(data);
        console.log(data); // Process the fetched data
      })
      .catch((error) => {
        console.error("Error fetching Mutual Funds data:", error);
      });
  };
  const handleTopStokesClick = () => {
    setSelectedItem("Stocks");
    fetch("http://localhost:8080/api/topstocks") // Replace with your API endpoint
      .then((response) => response.json())
      .then((data) => {
        setStokesData(data);
        console.log(data); // Process the fetched data
      })
      .catch((error) => {
        console.error("Error fetching Mutual Funds data:", error);
      });
  };
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserData({ ...userData, [name]: value });
  };
  const handleRegister = () => {
    setSelectedItem("Register");
    fetch("http://localhost:8080/api/login/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        // Handle successful response from backend
        console.log("Response from backend:", data);
        setSuccessMessage("Welcome! Data received successfully");
      })
      .catch((error) => {
        // Handle error
        console.error("Error:", error);
      });
    setTimeout(() => {
      setSubmitted(true);
      setSuccessMessage("Welcome! Data received successfully");
    }, 10000);
  };
  const handleLogin = () => {
    // Handle logic to display login screen or call the login API
    // For instance:
    // showLogin();
    console.log("Login");
    // or call a login API function
  };

  return (
    <div className="app">
      <Header handleLogin={handleLogin} handleRegister={handleRegister} />
      <div className="content">
        <SidebarLeft
          handleMutualFundClick={handleMutualFundClick}
          handleFixedDepositeClick={handleFixedDepositeClick}
          handleTopStokesClick={handleTopStokesClick}
        />
        <main className="main-content">
          {/* Main content goes here */}
          {/* <p>Main Content Area</p> */}
          {/* <MainContent selectedItem={selectedItem} /> */}
          <ClientScreen
            handleMutualFundClick={handleMutualFundClick}
            handleFixedDepositeClick={handleFixedDepositeClick}
            handleTopStokesClick={handleTopStokesClick}
          />
          {/* <LeftSidebar  /> */}
          {/* <TopPerformingFDs /> */}
          {/* <YourComponent /> */}
          {selectedItem === "Mutual Funds" && (
            <div>
              <h2>Top Performing Mutual Funds</h2>
              <div className="table-responsive">
                <table className="table table-striped table-bordered">
                  <thead className="thead-dark">
                    <tr>
                      <th scope="col">Fund Name</th>
                      <th scope="col">Fund Maneger</th>
                      <th scope="col">NAV</th>
                      <th scope="col">Investment Amount</th>
                      <th scope="col">Mutual Fund ID</th>
                    </tr>
                  </thead>
                  <tbody>
                    {mfData.map((item, index) => (
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
            </div>
          )}
          {selectedItem === "Stocks" && (
            <div>
              <h2>Top Performing Stocks</h2>
              <div className="table-responsive">
                <table className="table table-striped table-bordered">
                  <thead className="thead-dark">
                    <tr>
                      <th scope="col">Stoke Id</th>
                      <th scope="col">Stoke Name</th>
                      <th scope="col">Stoke Enchange</th>
                      <th scope="col">Purchase Price</th>
                      <th scope="col">Quantity</th>
                    </tr>
                  </thead>
                  <tbody>
                    {stoeksData.map((item, STOCKID) => (
                      <tr key={STOCKID}>
                        <td>{item.STOCKID}</td>
                        <td>{item.STOCKNAME}</td>
                        <td>{item.STOCKEXCHANGE}</td>
                        <td>{item.PURCHASEPRICE}</td>
                        <td>{item.QUANTITY}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
          {selectedItem === "Fixed Deposits" && (
            <div>
              <h2>Top Performing Fixed Deposits</h2>
              <div className="table-responsive">
                <table className="table table-striped table-bordered">
                  <thead className="thead-dark">
                    <tr>
                      <th scope="col">FD Id</th>
                      <th scope="col">Investment Acc. Id</th>
                      <th scope="col">Principal Amount</th>
                      <th scope="col">Interest Rate</th>
                      <th scope="col">Maturity Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    {fdData.map((item, FIXEDDEPOSITID) => (
                      <tr key={FIXEDDEPOSITID}>
                        <td>{item.FIXEDDEPOSITID}</td>
                        <td>{item.INVESTMENTACCOUNTID}</td>
                        <td>{item.PRINCIPALAMOUNT}</td>
                        <td>{item.INTERESTRATE}</td>
                        <td>{item.MATURITYAMOUNT}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
          {selectedItem === "Register" && !submitted ? (
            <div className="container">
              <form>
                {/* Input fields for user data */}
                <div className="input-group">
                  <label>First Name:</label>
                  <input
                    type="text"
                    name="firstName"
                    className="input-field"
                    onChange={handleInputChange}
                  />
                </div>
                <div className="input-group">
                  <label>Last Name:</label>
                  <input
                    type="text"
                    name="lastName"
                    className="input-field"
                    onChange={handleInputChange}
                  />
                </div>
                <div className="input-group">
                  <label>Username:</label>
                  <input
                    type="text"
                    name="username"
                    className="input-field"
                    onChange={handleInputChange}
                  />
                </div>
                <div className="input-group">
                  <label>Email:</label>
                  <input
                    type="email"
                    name="email"
                    className="input-field"
                    onChange={handleInputChange}
                  />
                </div>
                <div className="input-group">
                  <label>Password:</label>
                  <input
                    type="password"
                    name="password"
                    className="input-field"
                    onChange={handleInputChange}
                  />
                </div>
                {/* Add other input fields for user data */}

                <button
                  type="button"
                  className="submit-button"
                  onClick={handleRegister}
                >
                  Submit
                </button>
              </form>
            </div>
          ) : (
            <div className="welcome-message">
              <p>{successMessage}</p>
            </div>
          )}
        </main>
        <SidebarRight />
      </div>
      <Footer />
    </div>
  );
}

export default App;
