import s from './ThisDayInfo.module.scss';
import cloud from './../../../assets/images/cloud.png';
import ThisDayItem from './ThisDayItem';
import { Weather } from '../../../redux/types/types';

interface Props {
	weather: Weather;
}

export interface Item {
	icon_id: string;
	name: string;
	value: string;
}

const ThisDayInfo = ({ weather }: Props) => {
	const { temp, feels_like, pressure } = weather.main;
	const { wind } = weather;
	const desc = weather.weather[0].description;
	const items = [
		{
			icon_id: 'temp',
			name: 'Температура',
			value: `${temp.toFixed()}° - ощущается как ${feels_like.toFixed()}°`,
		},
		{
			icon_id: 'pressure',
			name: 'Давление',
			value: `${pressure} мм ртутного столба` /* - нормальное  */,
		},
		{ icon_id: 'precipitation', name: 'Осадки', value: `${desc}` },
		{
			icon_id: 'wind',
			name: 'Ветер',
			value: `${wind.speed.toFixed(1)} м/с` /* юго-запад - легкий ветер */,
		},
	];
	return (
		<div className={s.this_day_info}>
			<div className={s.info_items}>
				{items.map((item: Item) => (
					<ThisDayItem key={item.icon_id} item={item} />
				))}
			</div>
			<img className={s.cloud_img} src={cloud} alt='Облако' />
		</div>
	);
};

export default ThisDayInfo;
