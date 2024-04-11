// Fetches a random image from the Unsplash API and sets it as the background
fetch(
 "https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=;hjksdf;kljsdfgl;kdsjfgljksdfglkjhsdfg"
)
 .then((res) => res.json())
 .then((data) => {
  console.log(data);
  // Checks if the image URL is valid and sets it as the background image
  if (data.urls && data.urls.regular) {
   document.body.style.backgroundImage = `url(${data.urls.regular})`;
   // Displays the author's name
   document.getElementById("author").textContent = `By: ${data.user.name}`;
  } else {
   // Logs an error message if the image URL is not found
   console.error("Image URL not found in API response");
  }
 })
 .catch((error) => {
  // Logs an error if there is an issue fetching or parsing the data
  console.error("Error fetching or parsing data:", error);
 });

// Fetches data about Dogecoin from the CoinGecko API and displays it
fetch("https://api.coingecko.com/api/v3/coins/dogecoin")
 .then((res) => {
  // Checks if the response is successful
  if (!res.ok) {
   throw Error("Something went wrong");
  }
  return res.json();
 })
 .then((data) => {
  // Displays the coin's name and logo
  document.getElementById("crypto-top").innerHTML = `
            <img src=${data.image.small} />
            <span>${data.name}</span>
        `;
  // Displays the current price, 24-hour high, and 24-hour low
  document.getElementById("crypto").innerHTML += `
            <p>🎯: $${data.market_data.current_price.usd}</p>
            <p>👆: $${data.market_data.high_24h.usd}</p>
            <p>👇: $${data.market_data.low_24h.usd}</p>
        `;
 })
 .catch((err) => console.error(err));

// Updates the current time every second
function getCurrentTime() {
 const date = new Date();
 // Displays the current time in short format
 document.getElementById("time").textContent = date.toLocaleTimeString(
  "en-us",
  { timeStyle: "short" }
 );
}

// Calls getCurrentTime immediately and then every second
setInterval(getCurrentTime, 1000);

// Gets the user's current location and fetches weather data from the OpenWeatherMap API
navigator.geolocation.getCurrentPosition((position) => {
 fetch(
  `https://apis.scrimba.com/openweathermap/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=imperial`
 )
  .then((res) => {
   // Checks if the response is successful
   if (!res.ok) {
    throw Error("Weather data not available");
   }
   return res.json();
  })
  .then((data) => {
   // Displays the weather icon, temperature, and city name
   const iconUrl = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
   document.getElementById("weather").innerHTML = `
                <img src=${iconUrl} />
                <p class="weather-temp">${Math.round(data.main.temp)}º</p>
                <p class="weather-city">${data.name}</p>
            `;
  })
  .catch((err) => console.error(err));
});
