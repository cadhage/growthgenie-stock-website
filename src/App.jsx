// App.js
import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SidebarLeft from "./components/SidebarLeft";
import SidebarRight from "./components/SidebarRight";
import "./assets/styles.css";
import MainContent from "./components/MainContent";

function App() {
  const [selectedItem, setSelectedItem] = useState("");

  const handleItemClick = (itemName) => {
    setSelectedItem(itemName);
  };
  return (
    <div className="app">
      <Header />
      <div className="content">
        <SidebarLeft handleItemClick={handleItemClick} />
        <main className="main-content">
          {/* Main content goes here */}
          {/* <p>Main Content Area</p> */}
          <MainContent selectedItem={selectedItem} />
        </main>
        <SidebarRight />
      </div>
      <Footer />
    </div>
  );
}

export default App;
