import React from 'react';
import Select from 'react-select';

import { GlobalSVGSelector } from '../../assets/icons/global/GlobalSVGSelector';
import s from './Header.module.scss';

interface Props {}

const Header = (props: Props) => {
	const options = [
		{ value: 'city-1', label: 'Харьков' },
		{ value: 'city-2', label: 'Донецк' },
		{ value: 'city-3', label: 'Одесса' },
	];

	const colorStyles = {
		control: (styles: any) => ({
			...styles,
			backgroundColor: ' rgba(71, 147, 255, 0.2)',
			width: '144px',
			height: '37px',
			border: 'none',
			borderRadius: '10px',
			zIndex: 100,
		}),
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
				<div className={s.change_theme}>
					<GlobalSVGSelector id='change_theme' />
				</div>
				<Select styles={colorStyles} options={options} defaultValue={options[0]} />
			</div>
		</header>
	);
};

export default Header;
