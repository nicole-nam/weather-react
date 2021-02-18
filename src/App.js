import React, { useState } from "react";

const api = {
  key: "c07363721c7bd818ad23afe9f628432d",
  base: "https://api.openweathermap.org/data/2.5",
};

function App() {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});

  const search = function (e) {
    if (e.key === "Enter") {
      fetch(`${api.base}/weather?q=${query}&units=metric&&APPID=${api.key}`)
        .then((res) => res.json())
        .then((result) => {
          setWeather(result);
          setQuery("");
          console.log(result);
        });
    }
  };

  const year = new Date().getFullYear();
  const month = new Date().getMonth() + 1;
  const day = new Date().getDate();

  return (
    <div
      className={
        typeof weather.main != "undefined"
          ? weather.main.temp > 16
            ? "app warm"
            : "app"
          : "app"
      }
    >
      <main>
        <div className="search-box">
          <h1>city weather app</h1>
          <input
            type="text"
            className="search-bar"
            placeholder="Search..."
            onChange={(e) => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
          ></input>
        </div>
        {typeof weather.main != "undefined" ? (
          <div>
            <div className="location-box">
              <div className="date">
                {month}.{day}. {year}
              </div>
              <div className="location">
                {weather.name},{weather.sys.country}
              </div>
            </div>

            <div className="weather-box">
              <div className="temp">{Math.round(weather.main.temp)}°C</div>
              <div className="weather">{weather.weather[0].description}</div>
              <img
                className="icon"
                src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
              ></img>
            </div>
          </div>
        ) : (
          ""
        )}
      </main>
    </div>
  );
}

export default App;
