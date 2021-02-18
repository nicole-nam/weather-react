import React from "react";

const api = {
  key: "c07363721c7bd818ad23afe9f628432d",
  base: "https://api.openweathermap.org/data/2.5",
};

function App() {
  const year = new Date().getFullYear();
  const month = new Date().getMonth() + 1;
  const day = new Date().getDate();
  console.log(month, day, year);

  return (
    <div className="app">
      <main>
        <div className="search-box">
          <input
            type="text"
            className="search-bar"
            placeholder="Search..."
          ></input>
        </div>

        <div className="location-box">
          <div className="location">Toronto, Canada</div>
          <div className="date">
            {month}/{day}' {year}
          </div>
        </div>

        <div className="weather-box">
          <div className="temp">-15°C</div>
          <div className="weather">Snowing</div>
        </div>
      </main>
    </div>
  );
}

export default App;
