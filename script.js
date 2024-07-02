const changeBackground = (main) => {
  let imageUrl;

  switch (main.toLowerCase()) {
    case "rain":
      imageUrl = "url('./images/rain.gif')";
      break;
    case "clouds":
      imageUrl = "url('./images/cloud.gif')";
      break;
    case "clear":
      imageUrl = "url('./images/clear.gif')";
      break;
    case "mist":
      imageUrl = "url('./images/mist.gif')";
      break;
    case "drizzle":
      imageUrl = "url('./images/drizzle.gif')";
      break;
      case "haze":
        imageUrl = "url('./images/haze2.gif')";
        break;
    default:
      imageUrl = "url('./images/default.gif')";
  }

  const elements = document.getElementById("bodySection")
  elements.style.backgroundImage = imageUrl;
};


// -----------------------------------------------------------
const mainBackground = (main) => {
  let imageUrl;

  switch (main.toLowerCase()) {
    case "rain":
      imageUrl = "url('./images/rain1.avif')";
      break;
    case "clouds":
      imageUrl = "url('./images/clouds.avif')";
      break;
    case "clear":
      imageUrl = "url('./images/clear.jpg')";
      break;
    case "mist":
      imageUrl = "url('./images/mist2.avif')";
      break;
    case "drizzle":
      imageUrl = "url('./images/drizzle1.jpg')";
      break;
      case "haze":
        imageUrl = "url('./images/hazebg.jpg')";
        break;
    default:
      imageUrl = "url('./images/default.gif')";
  }
  const element = document.getElementById("result")
  element.style.backgroundImage = imageUrl;
};



// -----------------------------------------------------------
const getWeatherIcon = (main) => {
  switch (main.toLowerCase()) {
    case "rain":
      return "fa-solid fa-cloud-showers-heavy rain-icon";
    case "clouds":
      return "fa-solid fa-cloud cloud-icon";
    case "clear":
      return "fa-solid fa-sun clear-icon";
    case "mist":
      return "fa-solid fa-smog mist-icon";
    case "drizzle":
      return "fa-solid fa-cloud-rain drizzle-icon";
    case "snow":
      return "fa-solid fa-snowflake snow-icon";
    default:
      return "fa-solid fa-cloud default-icon";
  }
};

const getHealthTip = (main) => {
  switch (main.toLowerCase()) {
    case "rain":
    case "drizzle":
      return "💡 Health Tip: Don't forget your umbrella! ☔";
    case "clouds":
      return "💡 Health Tip: Keep an eye on the sky, it might rain later!";
    case "clear":
      return "💡 Health Tip: Wear sunscreen to protect your skin! ☀️";
    case "mist":
      return "💡 Health Tip: Drive carefully in the mist!";
    case "snow":
      return "💡 Health Tip: Wear warm clothes and be cautious on slippery roads!";
    default:
      return "💡 Health Tip: Stay prepared for any weather!";
  }
};

const search = async () => {
  const place = document.getElementById('place').value;
  console.log(place);

  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=02f159f56e01ddaee4eb637903ee4690`);
    const data = await response.json();

    console.log(data);

    const temp = data.main.temp;
    const temp1 = Math.floor(temp - 273);
    console.log(temp1);

    const minTemp = data.main.temp_min;
    const Mintemp = Math.floor(minTemp - 273);
    console.log(Mintemp);

    const maxTemp = data.main.temp_max;
    const Maxtemp = Math.floor(maxTemp - 273);
    console.log(Maxtemp);

    const placeName = data.name;
    console.log(placeName);

    const desc = data.weather[0].description
    console.log(desc);

    const feels = data.main.feels_like;
    const feelsLike = Math.floor(feels - 273);
    console.log(feelsLike);

    const humid = data.main.humidity;
    console.log(humid);

    const wSpeed = data.wind.speed;
    console.log(wSpeed);

    const press = data.main.pressure;
    console.log(press);

    const country = data.sys.country;
    console.log(country);

    const main = data.weather[0].main;
    console.log("mmnjnjj", main);

    const iconClass = getWeatherIcon(main);

    const healthTip = getHealthTip(main);



    document.getElementById('result').innerHTML = `
            <div class="row">
          <div class="col-md-1"></div>
          <div class="col-md-5 mt-5 mb-3 text-light fw-1"><b>weather.com</b></div>
          <div class="col-md-5">
            <div class="input-container mt-4 d-flex">
              <i
                class="fa-solid fa-location-dot location-icon "
                style="color: #ffffff"
              ></i>
              <input
                id="place"
                type="text"
                placeholder="Enter location"
                class="shadow text-light mt-4"
              />
              <button
                type="button"
                id="get-weather"
                class="btn ms-2 mt-4 shadow"
                onclick="search()"
              >
                Check
              </button>
            </div>
          </div>
          <div class="col-md-1"></div>
        </div>
        <div class="row mt-3">
          <div class="col-md-1"></div>
          <div class="col-md-5">
            <div class="weather">
              <div class="d-flex">
                <h1 class="text-light temp mt-3">${temp1}°</h1>
                <i
                  class="${iconClass} mt-5 rain-icon"
                  style="color: #ffffff"
                ></i>
              </div>
              <h3 class="text-light place">${place}, ${country}</h3>
              <h6 class="climate text-light mt-3">${desc}</h6>
              <h6 class="text-light humid mt-4" >H: ${Maxtemp}°  L: ${Mintemp}°   <span id="ans" class="ms-3 text-light"></span></h6>
              
            </div>
          </div>
          <div class="col-md-5">
            <div class="thunder d-flex">
              <div class="press mt-3 ps-3 me-5">
                <div class="temp d-flex">
                  <i
                    class="fa-solid fa-temperature-three-quarters temperature"
                  ></i>
                  <h6 class="pt-2 feelsLike">FEELS LIKE</h6>
                </div>
                <h3 class="text-light">${feelsLike}°</h3>
                <p class="text-light pb-2">
                  Humidity is making <br />
                  it feel warmer
                </p>
              </div>
              <div class="humidity mt-3 ps-3">
                <div class="temp d-flex">
                  <i class="fa-solid fa-droplet humiCon"></i>
                  <h6 class="pt-2 feelsLike">HUMIDITY</h6>
                </div>
                <h3 class="text-light">${humid}%</h3>
                <p class="text-light pb-2">
                  The dew point is ${feelsLike}° <br />
                  right now
                </p>
              </div>
            </div>

            <div class="thunder d-flex">
              <div class="press mt-3 ps-3 me-5">
                <div class="temp d-flex">
                  <i class="fa-solid fa-wind temperature"></i>
                  <h6 class="pt-2 feelsLike">WIND</h6>
                </div>
                <h6 class="text-light"><span class="fs-3">${wSpeed}</span> KPH</h6>
              </div>
              <div class="humidity mt-3 ps-3">
                <div class="temp d-flex">
                  <i class="fa-brands fa-wpressr temperature"></i>
                  <h6 class="pt-2 feelsLike"><b>PRESSURE</b></h6>
                </div>
                <h6 class="text-light  mb-3">
                  <span class="fs-3">${press}</span> hPa
                </h6>
              </div>
            </div>
          </div>
          <div class="col-md-1"></div>
        </div>

        <div class="row mt-2">
          <div class="col-md-1"></div>
          <div class="col-md-5">
            <div
              class="description mt-3"
              style="box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.1)"
            >
              <div class="desc">
                <p class="text-light ms-4 pt-2">
                  <b>Description: ${desc}</b>
                </p>
                <p class="text-light pb-4 tips ps-3 pe-3">
                <b>${healthTip}</b>
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-5">
            <div
              class="reportIssue mt-3"
              style="box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.1)"
            >
              <div class="desc">
                <div class="text-light ms-3 pt-3 d-flex">
                  <i class="fa-solid fa-message mt-1"></i>
                  <h5 class="ms-2 issue">Report an Issue</h5>
                </div>
                <p class="text-light pb-4 reportPara ps-3 pe-3">
                  <b>You can describe the current conditions at your location to
                  help improve forcasts.</b>
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-1"></div>
        </div>

        `;

    // Call function to change background image
    changeBackground(main);

    mainBackground(main)

    function getTime() {
      const Time = new Date();
      const hour = Time.getHours();
      const min = Time.getMinutes();
      const sec = Time.getSeconds();
      setTimeout(getTime, 1000);

      document.getElementById('ans').innerHTML = ` ${hour} : ${min} : ${sec} ${hour >= 12 ? "PM" : "AM"}`;
    }
    getTime();
  } catch (error) {
    console.error("Error fetching weather data: ", error);
  }
};

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('get-weather').addEventListener('click', search);
});
