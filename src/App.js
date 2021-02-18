import React from "react";

const api = {
  key: "c07363721c7bd818ad23afe9f628432d",
  base: "https://api.openweathermap.org/data/2.5",
};

function App() {
  return (
    <div className="app warm">
      <main>
        <div className="search-box">
          <input
            type="text"
            className="search-bar"
            placeholder="Search..."
          ></input>
        </div>
      </main>
    </div>
  );
}

export default App;
