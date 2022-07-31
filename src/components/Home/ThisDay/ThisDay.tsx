import s from './ThisDay.module.scss';
import { GlobalSVGSelector } from '../../../assets/icons/global/GlobalSVGSelector';
import { Weather } from '../../../redux/types/types';
import getLocalTime from '../../../redux/utils/getLocalTime';

interface Props {
	weather: Weather;
}

const ThisDay = ({ weather }: Props) => {
	const { temp } = weather.main;
	const { name, timezone } = weather;
	const id = weather.weather[0].id;

	const localDate = getLocalTime(timezone);
	const localTime = `${(localDate.getHours() < 10 ? '0' : '') + localDate.getHours()}:${
		(localDate.getMinutes() < 10 ? '0' : '') + localDate.getMinutes()
	}`;

	return (
		<div className={s.this_day}>
			<div className={s.top_block}>
				<div className={s.top_wrap}>
					<div className={s.this_temp}>{temp.toFixed()}°</div>
					<div className={s.this_day_name}>Сегодня</div>
				</div>
				<GlobalSVGSelector id={id} />
			</div>
			<div className={s.bottom_block}>
				<div className={s.this_city}>
					Город: <span>{name}</span>
				</div>
				<div className={s.this_time}>
					Местное время: <span>{localTime}</span>
				</div>
			</div>
		</div>
	);
};

export default ThisDay;
