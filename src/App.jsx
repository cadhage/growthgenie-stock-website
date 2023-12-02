// App.js
import { useState, useEffect } from "react";
import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import "./App.css";
import axios from "axios";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SidebarLeft from "./components/SidebarLeft";
import SidebarRight from "./components/SidebarRight";
import "./assets/styles.css";
import MainContent from "./components/MainContent";
import Register from "./components/Register";
import ClientScreen from "./components/ClientScreen";
import LogoImage from "./assets/clair-logo-white.svg";

function App() {
  const [selectedItem, setSelectedItem] = useState("");
  const [fdData, setFdData] = useState([]);
  const [tableData, setTableData] = useState([]);
  const [mfData, setMfData] = useState([]);
  const [stoeksData, setStokesData] = useState([]);
  const [highNetWorthInvestorData, setHighNetWorthInvestorsData] = useState([]);
  const [historicalReturnsData, setHistoricalReturnsData] = useState([]);
  const [taxAssessmentData, setTaxAssessmentData] = useState([]);
  const [password, setPassword] = useState("");
  // useEffect(() => {
  //   handleTaxAssessmentClick();
  // }, []); // Trigger API call on initial render
  // const [taxAssessmentData, setTaxAssessmentData] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get(
  //         "http://localhost:8080/api/topwealthiestcustomers"
  //       );

  //       setTaxAssessmentData(response.data);
  //     } catch (error) {
  //       console.error("Error fetching Tax Assessment data:", error);
  //     }
  //   };

  //   fetchData();
  // }, []);
  console.log(taxAssessmentData);
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    // Add other fields as needed
  });
  setHighNetWorthInvestorsData;
  const [successMessage, setSuccessMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const handleItemClick = (itemName) => {
    setSelectedItem(itemName);
  };
  const [userType, setUserType] = useState(""); // Assuming userType is set accordingly

  // Functions for handling login actions
  const handleClientLogin = () => {
    // Logic for client login
    setUserType("client");
  };

  const handleAdminLogin = () => {
    // Logic for admin login
    setUserType("admin");
  };
  const handleMutualFundClick = () => {
    setSelectedItem("Mutual Funds");
    axios
      .get("http://localhost:8080/api/topmutualfunds")
      .then((response) => {
        setMfData(response.data);
        console.log(response.data); // Process the fetched data
      })
      .catch((error) => {
        console.error("Error fetching Mutual Funds data:", error);
      });
  };
  const handleFixedDepositeClick = () => {
    setSelectedItem("Fixed Deposits");
    axios
      .get("http://localhost:8080/api/topfixeddeposits")
      .then((response) => {
        setFdData(response.data);
        console.log(response.data); // Process the fetched data
      })
      .catch((error) => {
        console.error("Error fetching Fixed Deposits data:", error);
      });
  };
  const handleTopStokesClick = () => {
    setSelectedItem("Stocks");
    axios
      .get("http://localhost:8080/api/topstocks")
      .then((response) => {
        setStokesData(response.data);
        console.log(response.data); // Process the fetched data
      })
      .catch((error) => {
        console.error("Error fetching Stocks data:", error);
      });
  };
  const handleHighNetWorthInvestorsClick = () => {
    setSelectedItem("High-Net-Worth Investors");
    // .get("http://localhost:8081/api/data/get/customer/details/one")
    console.log("handleHighNetWorthInvestorsClick");
    axios
      .get("http://localhost:8080/api/topwealthiestcustomers")
      .then((response) => {
        setHighNetWorthInvestorsData(response.data);
        console.log(response.data); // Process the fetched data
      })
      .catch((error) => {
        console.error("Error fetching High-Net-Worth Investors data:", error);
      });
  };

  const handleHistoricalReturnsClick = () => {
    setSelectedItem("Historical Returns");
    axios
      .get("http://localhost:8081/api/data/get/customer/details/1")
      .then((response) => {
        setHistoricalReturnsData(response.data);
        setTaxAssessmentData(response.data);
        console.log(response.data); // Process the fetched data
      })
      .catch((error) => {
        console.error("Error fetching Historical Returns data:", error);
      });
  };

  const handleTaxAssessmentClick = () => {
    setSelectedItem("Tax Assessment");
    axios
      .get("http://localhost:8080/api/topwealthiestcustomers")
      .then((response) => {
        setTaxAssessmentData(response.data);
        console.log(response.data); // Process the fetched data
      })
      .catch((error) => {
        console.error("Error fetching Tax Assessment data:", error);
      });
  };

  return (
    <div className="app">
      <Header
        handleClientLogin={handleClientLogin}
        handleAdminLogin={handleAdminLogin}
        userType={userType}
      />
      <div className="content">
        <SidebarLeft
          handleMutualFundClick={handleMutualFundClick}
          handleFixedDepositeClick={handleFixedDepositeClick}
          handleTopStokesClick={handleTopStokesClick}
          userType={userType}
          handleHighNetWorthInvestorsClick={handleHighNetWorthInvestorsClick}
          handleHistoricalReturnsClick={handleHistoricalReturnsClick}
          handleTaxAssessmentClick={handleTaxAssessmentClick}
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
              <h3>
                <b>Top Performing Mutual Funds</b>
              </h3>
              <br />
              <div className="table-responsive">
                <table className="investor-table table table-striped table-bordered">
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
              <h3>
                <b>Top Performing Stocks</b>
              </h3>
              <br />
              <div className="table-responsive">
                <table className="investor-table table table-striped table-bordered">
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
              <h3>
                <b>Top Performing Fixed Deposits</b>
              </h3>
              <br />
              <div className="table-responsive">
                <table className="investor-table table table-striped table-bordered">
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
          {selectedItem === "High-Net-Worth Investors" && (
            <div>
              <h3>
                <b>High-Net-Worth Investor Information</b>
              </h3>
              <br />
              <div className="table-responsive">
                <table className="investor-table table table-striped table-bordered">
                  <thead className="thead-dark">
                    <tr>
                      <th scope="col">Customer ID</th>
                      <th scope="col">First Name</th>
                      <th scope="col">Last Name</th>
                      <th scope="col">Total Account Balance</th>
                      <th scope="col">Total Stock Value</th>
                      <th scope="col">Total Mutual Fund Value</th>
                      <th scope="col">Total Fixed Deposit Value</th>
                      <th scope="col">Total Assets</th>
                    </tr>
                  </thead>
                  <tbody>
                    {highNetWorthInvestorData.map((investor, index) => (
                      <tr key={index}>
                        <td>{investor.CustomerID}</td>
                        <td>{investor.FirstName}</td>
                        <td>{investor.LastName}</td>
                        <td>{investor.TotalAccountBalance}</td>
                        <td>{investor.TotalStockValue}</td>
                        <td>{investor.TotalMutualFundValue}</td>
                        <td>{investor.TotalFixedDepositValue}</td>
                        <td>{investor.TotalAssets}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
          {selectedItem === "Historical Returns" && (
            <div>
              <h3>
                <b>Historical returns high-net-worth investors</b>
              </h3>
              <br />
              <div className="table-responsive">
                <table className="investor-table table table-striped table-bordered">
                  <thead className="thead-dark">
                    <tr>
                      <th scope="col">Customer ID</th>
                      <th scope="col">First Name</th>
                      <th scope="col">Last Name</th>
                      <th scope="col">Amount</th>
                      <th scope="col">Transaction Date</th>
                      <th scope="col">Transaction Type</th>
                    </tr>
                  </thead>
                  <tbody>
                    {historicalReturnsData.map((investor, index) => (
                      <tr key={index}>
                        <td>{investor.CustomerID}</td>
                        <td>{investor.FirstName}</td>
                        <td>{investor.LastName}</td>
                        <td>{investor.Amount}</td>
                        <td>{investor.TransactionDate}</td>
                        <td>{investor.TransactionType}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
          {selectedItem === "Tax Assessment" && (
            <div>
              <h3>
                <b>Tax Assessment high-net-worth investors</b>
              </h3>
              <br />
              <div className="App">
                <BarChart
                  width={500}
                  height={300}
                  data={taxAssessmentData}
                  margin={{
                    top: 50,
                    right: 0,
                    left: 70,
                    bottom: 0,
                  }}
                  barSize={20}
                >
                  <XAxis
                    dataKey="FirstName"
                    scale="point"
                    padding={{ left: 10, right: 10 }}
                  />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <CartesianGrid strokeDasharray="3 3" />
                  <Bar
                    dataKey="TaxLiability"
                    fill="#8884d8"
                    background={{ fill: "#eee" }}
                  />
                </BarChart>
              </div>
            </div>
          )}
          {selectedItem === "" && (
            <div className="container">
              <h2>
                <b>About Company</b>
              </h2>
              <br />
              <h3>
                <i>
                  Intelligence is Accelerating <br />
                  Human Transformation
                </i>
              </h3>
              <br />
              <div>
                <p>
                  <i>
                    Through the sands of time, humans have always looked for
                    newer ways of advancing their quality of life. Right through
                    the evolution of agriculture through the industrial and
                    internet revolution, we have always changed the center of
                    gravity, steadily and rapidly, to advance humanity. We are
                    living in times of constant change, and looking at a future
                    where the power of technology is harnessed by human
                    innovation. Following the Great Reset of 2020, the center of
                    gravity for data is rapidly shifting from on-prem to the
                    cloud. As enterprises make this shift, we at Clairvoyant
                    look at continually unlocking the power of data and
                    analytics, and deriving deeper insights to advance humanity.
                  </i>
                </p>
              </div>
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
