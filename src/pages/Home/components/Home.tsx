import axios from 'axios';
import { useEffect } from 'react';
import { useCustomDispatch, useCustomSelector } from '../../../hooks/store';
import { fetchCurrentWeather } from '../../../store/thunks/fetchCurrentWeather';
import Days from './Days/Days';
import s from './Home.module.scss';
import ThisDay from './ThisDay/ThisDay';
import ThisDayInfo from './ThisDayInfo/ThisDayInfo';

interface Props {}

const Home = (props: Props) => {
	const dispatch = useCustomDispatch();

	const { weather } = useCustomSelector((state) => state.currentWeatherSliceReducer);

	useEffect(() => {
		dispatch(fetchCurrentWeather('london'));
	}, []);

	return (
		<div className={s.home}>
			<div className={s.wrapper}>
				<ThisDay weather={weather} />
				<ThisDayInfo />
			</div>
			<Days />
		</div>
	);
};

export default Home;
