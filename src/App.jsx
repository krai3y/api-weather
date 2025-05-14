import { useEffect, useState } from "react";

import "./index.css";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import citiesData from "./data/csvjson.json"; 
import SelectCity from "./components/SelectCity";
import WeatherOfCity from "./components/WeatherOfCity";

function App() {
  const [foundedCities, setFoundedCities] = useState([]);
  const [citySelected, setCitySelected] = useState(false);
  const [weatherData, setWeatherData] = useState(null);
  const [parametres, setParametres] = useState();
  const [filterOfCitiesData, setFilterOfCitiesData] = useState([]);
  const token = 'YOUR_TOKEN';
  const urlWeather = parametres ? `https://api.openweathermap.org/data/2.5/weather?q=${parametres.name}&lat=${parametres.lat}&lon=${parametres.lon}&lang=ru&appid=${token}` : '';
  

  useEffect(() => {

    async function tryFetch() {
      try {
        setWeatherData(null);
        const response = await fetch(urlWeather);
        const data = await response.json();
        setTimeout(() => {
          setWeatherData(data);
        }, 1000);
      } catch (error) {
        console.log(error);
      }
    }
    
    tryFetch();
  }, [urlWeather]);
  

  useEffect(() => {

    let listOfCities = [];

    for (let city = 0; city < citiesData.length; city++) {
      
      listOfCities.push(
        {
          "id": city,
          "name": citiesData[city].city,
          "region": citiesData[city].region_type === "Респ" ? `${citiesData[city].region_type} ${citiesData[city].region}` : `${citiesData[city].region} ${citiesData[city].region_type}`,
          "lat": citiesData[city].geo_lat,
          "lon": citiesData[city].geo_lon,
          "prio": (citiesData[city].population > 1000000 ? 1 : 0)
        }
      )
    }
    
    setFilterOfCitiesData(listOfCities);

  }, []);
  
  function searchHandler(e) {
    let cityToSearch = e.target.value;

    if (cityToSearch.trim().length) {
      cityToSearch = cityToSearch.trim()[0].toUpperCase() + cityToSearch.slice(1, cityToSearch.length + 1).toLowerCase();
    } else {
      cityToSearch = 'а';
    }

    setFoundedCities(
      filterOfCitiesData.filter(data => data.name.indexOf(cityToSearch) === 0).sort(((a, b) => a.prio <= b.prio ? 1 : -1)).filter((data, i) => i < 5)
    );  
  }
  
  return (
    <main class="w-full h-dvh">
      {!citySelected ? (
        <SelectCity
          setCitySelected = {setCitySelected}
          setParametres = {setParametres}
          setFoundedCities = {setFoundedCities}
          searchHandler = {searchHandler}
          foundedCities = {foundedCities}
        />
      ) : (
        !weatherData ? (
          <div>ждем</div>
        ) : (
          <WeatherOfCity
            setParametres = {setParametres}
            setFoundedCities = {setFoundedCities}
            setCitySelected = {setCitySelected}
            weatherData = {weatherData}
          />
        )
      )}
    </main>
  );
}

export default App;
