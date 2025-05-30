import { useState } from "react";
import krestik from "../assets/krestik.svg"
import { useDispatch, useSelector } from "react-redux";
import { updateCities } from "../features/cities/citiesSlice";
import { fetchWeatherData } from "../features/weather/weatherSlice";

function InputSelectCity() {
  const [valueInput, setValueInput] = useState('');
  const dispatch = useDispatch();
  const { items } = useSelector(state => state.cities);
  const weather = useSelector(state => state.weather);
   

  return (
    <div className={`flex items-center flex-col justify-center z-5 ${!weather.weatherInfo ? "min-h-screen" : "mb-4"} ${items.length && "absolute w-full"}`}> 
        <div className={`flex items-end border-3 border-violet-500 hover:bg-violet-100 bg-white  ${items.length ? "rounded-t-2xl" : "rounded-2xl"} max-w-xl`}>
          <input
            value={valueInput}
            placeholder="Введите название города"
            type="text"
            onChange={(e) => {dispatch(updateCities(e.target.value)); setValueInput(e.target.value)}}
            class="focus:outline-0 font-bold text-violet-500 text-lg w-200 p-6"  
          />
          {items.length > 0 && (
            <img 
              className="border-l-3 border-violet-500 my-auto me-2 cursor-pointer"
              src={krestik}
              onClick={() => {dispatch(updateCities('')); setValueInput('')}}
            />
          )}
        </div>
        <div className="flex flex-col items-center divide-y-3">
          {items.map(city => {
            return(
              <button
                class={`border-x-3 border-violet-500 hover:bg-violet-100 text-violet-500 font-bold text-lg cursor-pointer bg-white w-xl ${city.name == items[items.length - 1].name && 'border-b-3 rounded-b-2xl'} p-6`}
                key={city.id}
                onClick={() => {
                  dispatch(fetchWeatherData(city.name)); 
                  dispatch(updateCities('')); 
                  setValueInput('');
                }} 
              >
                {city.name} <span>({city.region})</span>
              </button>
            );
          })}
        </div>
    </div>
  )
}

export default InputSelectCity