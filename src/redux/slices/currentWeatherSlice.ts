import { AxiosResponse } from 'axios';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Weather, Day, Response } from '../types/types';
import getWeekForecast from '../utils/getWeekForecast';

type currentWeather = {
	weather: Weather;
	forecast: Day[];
	isLoading: boolean;
	isError: boolean;
	// response: Response;
};

const initialState: currentWeather = {
	weather: {
		name: '',
		timezone: 0,
		main: {
			temp: 0,
			temp_max: 0,
			temp_min: 0,
			feels_like: 0,
			pressure: 0,
		},
		wind: {
			speed: 0,
		},
		weather: [{ id: 0, description: '' }],
	},
	forecast: [],
	isLoading: false,
	isError: false,
};

export const currentWeatherSlice = createSlice({
	name: 'current_weather',
	initialState,
	reducers: {
		fetchCurrentWeather(state) {
			state.isLoading = true;
		},
		fetchCurrentWeatherSuccess(state, action: PayloadAction<AxiosResponse<Weather>>) {
			state.isLoading = false;
			state.weather = action.payload.data;
			state.forecast = getWeekForecast(state.weather);
		},
		fetchCurrentWeatherError(state) {
			state.isLoading = false;
			state.isError = true;
		},
		closeError(state) {
			state.isError = false;
		},
	},
});

export default currentWeatherSlice.reducer;
