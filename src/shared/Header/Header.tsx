import React from 'react';
import Select, { components } from 'react-select';

import { GlobalSVGSelector } from '../../assets/icons/global/GlobalSVGSelector';
import { Theme } from '../../context/ThemeContext';
import { useTheme } from '../../hooks/useTheme';
import s from './Header.module.scss';

interface Props {}

const Header = (props: Props) => {
	const { theme, changeTheme } = useTheme();

	const options = [
		{ value: 'city-1', label: 'Харьков' },
		{ value: 'city-2', label: 'Донецк' },
		{ value: 'city-3', label: 'Одесса' },
	];

	const colorStyles = {
		control: (styles: any) => ({
			...styles,
			backgroundColor: theme === Theme.DARK ? '#4f4f4f' : 'rgba(71, 147, 255, 0.2)',
			width: '144px',
			height: '37px',
			border: 'none',
			borderRadius: '10px',
			zIndex: 100,
		}),
		singleValue: (styles: any) => ({
			...styles,
			color: theme === Theme.DARK ? '#fff' : '#000',
		}),
	};

	const toggleTheme = () => {
		changeTheme(theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT);
	};

	return (
		<header className={s.header}>
			<div className={s.wrapper}>
				<div className={s.logo}>
					<GlobalSVGSelector id='header_logo' />
				</div>
				<div className={s.title}>Weathery</div>
			</div>
			<div className={s.wrapper}>
				<div className={s.change_theme} onClick={toggleTheme}>
					<GlobalSVGSelector id='change_theme' />
				</div>
				<Select styles={colorStyles} options={options} defaultValue={options[0]} />
			</div>
		</header>
	);
};

export default Header;
