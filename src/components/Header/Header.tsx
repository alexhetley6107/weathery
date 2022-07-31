import React, { KeyboardEvent, useEffect, useState } from 'react';

import { IndicatorSVGSelector } from '../../assets/icons/indicators/IndicatorSVGSelector';
import { Theme } from '../../context/ThemeContext';
import { useCustomDispatch } from '../../hooks/store';
import { useTheme } from '../../hooks/useTheme';
import { fetchCurrentWeather } from '../../redux/thunks/fetchCurrentWeather';
import s from './Header.module.scss';

interface Props {}

const Header = (props: Props) => {
	const { theme, changeTheme } = useTheme();
	const [city, setCity] = useState('');
	const dispatch = useCustomDispatch();

	const getCityWeather = () => {
		dispatch(fetchCurrentWeather(city));
		setCity('');
	};

	const onPressEnter = (e: KeyboardEvent) => {
		if (e.key === 'Enter') {
			getCityWeather();
		}
	};

	const toggleTheme = () => {
		changeTheme(theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT);
	};

	useEffect(() => {
		const savedCity = localStorage.getItem('lastCity');
		if (savedCity) {
			dispatch(fetchCurrentWeather(savedCity));
		} else {
			dispatch(fetchCurrentWeather('odessa'));
		}
	}, []);

	return (
		<header className={s.header}>
			<div className={s.wrapper}>
				<div className={s.logo}>
					<IndicatorSVGSelector id='header_logo' />
				</div>
				<div className={s.title}>Weathery</div>
			</div>
			<div className={s.wrapper}>
				<div className={s.change_theme} onClick={toggleTheme}>
					<IndicatorSVGSelector id='change_theme' />
				</div>
				<div className={s.input_block}>
					<input
						value={city}
						onChange={(e) => setCity(e.target.value)}
						onKeyPress={onPressEnter}
						type='text'
						placeholder='Введите город...'
					/>
					<span onClick={getCityWeather}>
						<IndicatorSVGSelector id='search' />
					</span>
				</div>
			</div>
		</header>
	);
};

export default Header;
