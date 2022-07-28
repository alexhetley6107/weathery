import axios, { AxiosResponse } from 'axios';
import api from '../axios';
import { Weather } from '../store/types/types';

export class WeatherService {
	static getCurrentWeather(city: string): Promise<AxiosResponse<Weather>> {
		return axios.get<Weather>(
			`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=4a66c47802d1e08dc3675d787e1affe9`,
		);
		// return axios.get<Weather>(`/weather?q=${city}`);
	}
}
