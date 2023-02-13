import React, { useEffect, useState } from "react";
const api = {
  key: "481b9d500bd0d08cd0c1d434e762f112",
  base: "https://api.openweathermap.org/data/2.5/",
};

function App() {
  const [query, setQuery] = useState(" ");
  const [weather, setWeather] = useState("{}");

  const search = (evt) => {
    if (evt.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then((res) => res.json())
        .then((result) => {
          setWeather(result);
          setQuery("");
          console.log(result);
        });
    }
  };

  const dateBuilder = (d) => {
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`;
  };

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
      <main className="">
        <div className="container">
          <div className="search-box">
            <div class="input-group mb-3">
              <input
                type="text"
                class="form-control"
                placeholder="Please search your location ..."
                aria-label="Recipient's username"
                aria-describedby="button-addon2"
                onChange={(e) => setQuery(e.target.value)}
                value={query}
                onKeyPress={search}
              />
            </div>
          </div>
          {typeof weather.main != "undefined" ? (
            <div>
              <div class="card card-weather">
                <div class="card-body">
                  <div class="weather-date-location">
                    <h3>{dateBuilder(new Date())}</h3>
                    <p class="text-gray">
                      <h3 class="weather-location">
                        {weather.name}, {weather.sys.country}
                      </h3>
                    </p>
                  </div>
                  <div class="weather-data d-flex">
                    <div class="mr-auto">
                      <h4 class="display-3">
                        <div className="temp">
                          {Math.round(weather.main.temp)}
                          <span class="symbol">&deg;</span>C
                        </div>
                      </h4>
                      <p>{weather.weather[0].main}</p>
                    </div>
                  </div>
                </div>
                <div class="card-body p-0">
                  <div class="d-flex weakly-weather">
                    <div class="weakly-weather-item">
                      <p class="mb-0">Sun</p>
                      <i class="mdi mdi-weather-cloudy"></i>
                      <p class="mb-0">30&deg;</p>
                    </div>
                    <div class="weakly-weather-item">
                      <p class="mb-1">Mon</p>
                      <i class="mdi mdi-weather-hail"></i>
                      <p class="mb-0">31&deg;</p>
                    </div>
                    <div class="weakly-weather-item">
                      <p class="mb-1">Tue</p>
                      <i class="mdi mdi-weather-partlycloudy"></i>
                      <p class="mb-0">28&deg;</p>
                    </div>
                    <div class="weakly-weather-item">
                      <p class="mb-1">Wed</p>
                      <i class="mdi mdi-weather-pouring"></i>
                      <p class="mb-0">30&deg;</p>
                    </div>
                    <div class="weakly-weather-item">
                      <p class="mb-1">Thu</p>
                      <i class="mdi mdi-weather-pouring"></i>
                      <p class="mb-0">29&deg;</p>
                    </div>
                    <div class="weakly-weather-item">
                      <p class="mb-1">Fri</p>
                      <i class="mdi mdi-weather-snowy-rainy"></i>
                      <p class="mb-0">31&deg;</p>
                    </div>
                    <div class="weakly-weather-item">
                      <p class="mb-1">Sat</p>
                      <i class="mdi mdi-weather-snowy"></i>
                      <p class="mb-0">32&deg;</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </main>
    </div>
  );
}

export default App;
