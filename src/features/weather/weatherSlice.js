import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
const token = "YOUR TOKEN"

export const fetchWeatherData = createAsyncThunk(
  'weather/fetchWeatherData',
  async (city, { rejectWithValue }) => {
    try {
      await delay(1000);
      
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=ru&appid=${token}`);

      if (!response.ok) {
        return rejectWithValue('Ошибка при получении данных о городе');
      }

      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue('Сетевая ошибка: ' + error.message);
    }
  }
);

const weatherSlice = createSlice({
  name: 'weather',
  initialState: {
    weatherInfo: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchWeatherData.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchWeatherData.fulfilled, (state, action) => {
        state.loading = false;
        state.weatherInfo = action.payload;
      })
      .addCase(fetchWeatherData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});


export default weatherSlice.reducer;