import React, { useEffect, useState } from "react";
import krestik from "../assets/krestik.svg"

function SelectCity({ setCitySelected, setParametres, setFoundedCities, foundedCities, searchHandler }) {
  const [valueInput, setValueInput] = useState('');

  useEffect(() => {
    searchHandler(valueInput)
  }, [valueInput])

  return (
    <div class="flex items-center flex-col justify-center min-h-screen">
        <div class={`relative flex items-end border-3 border-violet-500 hover:bg-violet-100 ${foundedCities.length ? "rounded-t-[25px]" : "rounded-[25px]"} w-200`}>
          <input 
            type="text"
            value={valueInput}
            onChange={(e) => setValueInput(e.target.value)}
            class="focus:outline-0 font-bold text-violet-500 text-lg w-200 p-6"  
          />
          <img 
            className="my-auto me-2 cursor-pointer"
            src={krestik}
            onClick={() => {setFoundedCities([]); setValueInput('')}}
          />
        </div>
        <div class="flex flex-col items-center divide-y-3">
          {foundedCities.map(city => {
            return(
              <button
                class={`border-x-3 border-violet-500 hover:bg-violet-100 text-violet-500 font-bold text-lg cursor-pointer w-200 ${city.name == foundedCities[foundedCities.length - 1].name ? 'border-b-3 rounded-b-[25px]' : ''} p-6`}
                key={city.id}
                onClick={() => {
                  setParametres({
                    "name": city.name,
                    "lat": city.lat,
                    "lon": city.lon,
                  }); 
                  setFoundedCities([]);
                  setCitySelected(true);
                }}>
                {city.name} <span>({city.region})</span>
              </button>
            );
          })}
        </div>
    </div>
  )
}

export default SelectCity