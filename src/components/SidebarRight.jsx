// SidebarRight.js
import React, { useEffect, useState } from "react";
import axios from "axios";

const SidebarRight = () => {
  // const [news, setNews] = useState([]);

  // useEffect(() => {
  //   // Fetch news from a news API
  //   // For example using Axios:
  //   axios
  //     .get(
  //       "https://api.worldnewsapi.com/geo-coordinates?location=London%2C%20UK"
  //     )
  //     .then((response) => {
  //       // Set the news data to state
  //       setNews(response.data);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching news:", error);
  //     });
  // }, []);

  // return (
  //   <aside className="sidebar-right">
  //     {/* Stock news flowing from top to bottom */}
  //     <h2>Stock News</h2>
  //     <div className="news-container">
  //       {news.map((item, index) => (
  //         <div key={index} className="news-item">
  //           <p>{item.title}</p>
  //           {/* Display other news details */}
  //         </div>
  //       ))}
  //     </div>
  //   </aside>
  // );
  return (
    <aside className="sidebar-right">
      {/* Contact and About */}
      <div className="news-container">
        <h2>Contact Us</h2>
        <p>Phone: 123-456-7890</p>
        <p>Email: info@investment.com</p>
      </div>
      <div className="about">
        <h2>About</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </aside>
  );
};

export default SidebarRight;
