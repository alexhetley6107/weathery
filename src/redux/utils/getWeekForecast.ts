// get current weather is free func at the openweatherapi , but forecast is paid func
// Consequently it is immitation of forecast
import { Weather, Day } from '../types/types';
import getLocalTime from './getLocalTime';

const getWeekForecast = (weather: Weather) => {
	const { id, description } = weather.weather[0];
	const { temp_max, temp_min } = weather.main;
	const { timezone } = weather;

	const forecast: Day[] = [];

	const today = getLocalTime(timezone);

	for (let i = 0; i < 7; i++) {
		const date = new Date(today.getFullYear(), today.getMonth(), today.getDate() + i);

		const day_name = i === 0 ? 'Сегодня' : getWeekDay(date.getDay());
		const day_info = `${date.getDate()} ${getMonthName(date.getMonth())}`;
		const icon_id = i === 0 ? id : getRandomID(id);
		const temp_day = getRandomTemp(icon_id, temp_max);
		const temp_night = getRandomTemp(icon_id, temp_min);
		const desc = getRandomDesc(icon_id);

		const day = {
			day_name,
			day_info,
			icon_id,
			temp_day,
			temp_night,
			desc,
		};
		forecast.push(day);
	}
	return forecast;
};

const getMonthName = (num: number) => {
	switch (num) {
		case 0:
			return 'янв';
		case 1:
			return 'фев';
		case 2:
			return 'мар';
		case 3:
			return 'апр';
		case 4:
			return 'май';
		case 5:
			return 'июн';
		case 6:
			return 'июл';
		case 7:
			return 'авг';
		case 8:
			return 'сен';
		case 9:
			return 'окт';
		case 10:
			return 'ноя';
		case 11:
			return 'дек';

		default:
			return;
	}
};
const getWeekDay = (num: number) => {
	switch (num) {
		case 1:
			return 'Пн';
		case 2:
			return 'Вт';
		case 3:
			return 'Ср';
		case 4:
			return 'Чт';
		case 5:
			return 'Пт';
		case 6:
			return 'Сб';
		case 0:
			return 'Вс';

		default:
			return 'Сегодня';
	}
};
const getRandomID = (num: number) => {
	const array = [801, 802, 803];

	if (!array.includes(num)) {
		array.push(num);
	}
	const newNum = array[Math.floor(Math.random() * array.length)];

	return newNum;
};
const getRandomDesc = (num: number) => {
	switch (num) {
		case 200:
			return 'Гроза';
		case 300:
			return 'моросящий дождь';
		case 500:
			return 'Дождь';
		case 600:
			return 'Снег';
		case 700:
			return 'Туман';
		case 800:
			return 'Ясно';
		case 801:
			return 'Облачно с прояснениями';
		case 802:
			return 'Небольшая облачность';
		case 803:
		case 804:
			return 'Пасмурно';

		default:
			return 'По-разному';
	}
};
const getRandomTemp = (iconID: number, temp: number) => {
	if (iconID === 800) {
		temp += 2;
	} else if (iconID === 801) {
		temp += 1;
	} else if (iconID < 800) {
		temp -= 1;
	} else {
		temp = temp;
	}

	const sign = temp > 0 ? '+' : '';

	let tempi = sign + temp.toFixed();

	return tempi;
};

export default getWeekForecast;
