import  formatCitiesData  from "../../data/format/formatCities";
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: [],
};

const citiesSlice = createSlice({
  name: 'cities',
  initialState,
  reducers: {
    updateCities(state, action) {
      let filterCities = action.payload;

      if (filterCities.trim().length) {
        filterCities = filterCities.trim()[0].toUpperCase() + filterCities.slice(1).toLowerCase();
      } else {
        filterCities = "а";
      }


    state.items = formatCitiesData()
      .filter(data => data.name.indexOf(filterCities) === 0)
      .sort((a, b) => b.prio - a.prio)
      .slice(0, 5);
    },
  },
});

export const { updateCities } = citiesSlice.actions;
export default citiesSlice.reducer;
