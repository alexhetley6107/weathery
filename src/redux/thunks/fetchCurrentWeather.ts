import { currentWeatherSlice } from './../slices/currentWeatherSlice';
import { WeatherService } from '../../services/WeatherService';
import { AppDispatch } from '../store';

export const fetchCurrentWeather = (payload: string) => async (dispatch: AppDispatch) => {
	try {
		dispatch(currentWeatherSlice.actions.fetchCurrentWeather());
		const res = await WeatherService.getCurrentWeather(payload);
		if (res.status === 200) {
			dispatch(currentWeatherSlice.actions.fetchCurrentWeatherSuccess(res));
			localStorage.setItem('lastCity', payload);
		} else {
			dispatch(currentWeatherSlice.actions.fetchCurrentWeatherError());
			localStorage.setItem('lastCity', '');
		}
	} catch (err) {
		console.log(err);
		dispatch(currentWeatherSlice.actions.fetchCurrentWeatherError());
		localStorage.setItem('lastCity', '');
	}
};

export const closeError = () => (dispatch: AppDispatch) => {
	dispatch(currentWeatherSlice.actions.closeError());
};
