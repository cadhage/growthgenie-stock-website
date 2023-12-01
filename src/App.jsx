// App.js
import { useState } from "react";
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
      .get("http://localhost:8081/api/data/get/customer/details/5")
      .then((response) => {
        setHistoricalReturnsData(response.data);
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
          {selectedItem === "High-Net-Worth Investors" && (
            <div>
              <h2>High-Net-Worth Investor Information</h2>
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
              <h2>High-Net-Worth Investor Information</h2>
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
              <h2>High-Net-Worth Investor Information</h2>
              <div className="table-responsive">
                <table className="investor-table table table-striped table-bordered">
                  <thead className="thead-dark">
                    <tr>
                      <th scope="col">Customer ID</th>
                      <th scope="col">First Name</th>
                      <th scope="col">Last Name</th>
                      <th scope="col">TaxLiability</th>
                    </tr>
                  </thead>
                  <tbody>
                    {taxAssessmentData.map((investor, index) => (
                      <tr key={index}>
                        <td>{investor.CustomerID}</td>
                        <td>{investor.FirstName}</td>
                        <td>{investor.LastName}</td>
                        <td>{investor.TaxLiability}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
          {selectedItem === "" && (
            <div>
              <h2>Company Information</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed
                nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis
                ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta.
                Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent
                taciti sociosqu ad litora torquent per conubia nostra, per
                inceptos himenaeos. Curabitur sodales ligula in libero. Sed
                dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh.
                Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed
                convallis tristique sem. Proin ut ligula vel nunc egestas
                porttitor. Morbi lectus risus, iaculis vel, suscipit quis,
                luctus non, massa. Fusce ac turpis quis ligula lacinia aliquet.
                Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed,
                euismod in, nibh. Quisque volutpat condimentum velit. Class
                aptent taciti sociosqu ad litora torquent per conubia nostra,
                per inceptos himenaeos. Nam nec ante. Sed lacinia, urna non
                tincidunt mattis, tortor neque adipiscing diam, a cursus ipsum
                ante quis turpis. Nulla facilisi. Ut fringilla. Suspendisse
                potenti. Nunc feugiat mi a tellus consequat imperdiet.
                Vestibulum sapien. Proin quam. Etiam ultrices. Suspendisse in
                justo eu magna luctus suscipit. Sed lectus. Integer euismod
                lacus luctus magna. Quisque cursus, metus vitae pharetra auctor,
                sem massa mattis sem, at interdum magna augue eget diam.
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                posuere cubilia Curae; Morbi lacinia molestie dui. Praesent
                blandit dolor. Sed non quam. In vel mi sit amet augue congue
                elementum. Morbi in ipsum sit amet pede facilisis laoreet. Donec
                lacus nunc, viverra nec, blandit vel, egestas et, augue.
                Vestibulum tincidunt malesuada tellus. Ut ultrices ultrices
                enim. Curabitur sit amet mauris. Morbi in dui quis est pulvinar
                ullamcorper. Nulla facilisi. Integer lacinia sollicitudin massa.
                Cras metus. Sed aliquet risus a tortor. Integer id quam. Morbi
                mi. Quisque nisl felis, venenatis tristique, dignissim in,
                ultrices sit amet, augue. Proin sodales libero eget ante. Nulla
                quam. Aenean laoreet. Vestibulum nisi lectus, commodo ac,
                facilisis ac, ultricies eu, pede. Ut orci risus, accumsan
                porttitor, cursus quis, aliquet eget, justo. Sed pretium blandit
                orci. Ut eu diam at pede suscipit sodales. Aenean lectus elit,
                fermentum non, convallis id, sagittis at, neque. Nullam mauris
                orci, aliquet et, iaculis et, viverra vitae, ligula. Nulla ut
                felis in purus aliquam imperdiet.
              </p>
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
