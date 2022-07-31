import { useEffect } from 'react';

import s from './Home.module.scss';
import { useCustomSelector } from '../../hooks/store';
import Days from './Days/Days';
import ThisDay from './ThisDay/ThisDay';
import ThisDayInfo from './ThisDayInfo/ThisDayInfo';
import Loader from '../Popup/Loader';
import Error from '../Popup/Error';

interface Props {}

const Home = (props: Props) => {
	const { weather, isLoading, isError } = useCustomSelector(
		(state) => state.currentWeatherSliceReducer,
	);

	return (
		<div className={s.home}>
			<div className={s.wrapper}>
				<ThisDay weather={weather} />
				<ThisDayInfo weather={weather} />
			</div>
			<Days />
			{isLoading && <Loader />}
			{isError && <Error />}
		</div>
	);
};

export default Home;
