// MainContent.js
import React from "react";

const MainContent = ({ selectedItem }) => {
  return (
    <main className="main-content">
      {/* Display the selected item from SidebarLeft */}
      <div className="selected-item">
        <p>Selected Item: {selectedItem}</p>
      </div>
      {/* Other main content goes here */}
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Porttitor leo a diam
        sollicitudin. Sed turpis tincidunt id aliquet risus feugiat in ante.
        Tristique senectus et netus et. Sollicitudin nibh sit amet commodo nulla
        facilisi nullam vehicula. Nisl purus in mollis nunc sed id semper.
        Convallis tellus id interdum velit laoreet id donec ultrices. Sit amet
        risus nullam eget felis eget nunc lobortis mattis. Sollicitudin nibh sit
        amet commodo nulla facilisi nullam. Odio euismod lacinia at quis. Urna
        duis convallis convallis tellus id interdum. Adipiscing commodo elit at
        imperdiet dui accumsan sit. Non arcu risus quis varius quam quisque id
        diam vel. Faucibus scelerisque eleifend donec pretium vulputate sapien
        nec sagittis. Sed sed risus pretium quam vulputate dignissim suspendisse
        in est.
      </p>
      {/* ... */}
    </main>
  );
};

export default MainContent;
