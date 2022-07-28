import React from 'react';

import s from './Days.module.scss';
import Card from './Card';
import Tabs from './Tabs';

type Props = {};

export interface Day {
	day_name: string;
	day_info: string;
	icon_id: string;
	temp_day: string;
	temp_night: string;
	info: string;
}

function Days({}: Props) {
	const days: Day[] = [
		{
			day_name: 'Сегодня',
			day_info: '28 авг',
			icon_id: 'sun',
			temp_day: '+18',
			temp_night: '+15',
			info: 'Облачно',
		},
		{
			day_name: 'Завтра',
			day_info: '29 авг',
			icon_id: 'small_rain_sun',
			temp_day: '+18',
			temp_night: '+15',
			info: 'небольшой дождь и солнце',
		},
		{
			day_name: 'Ср',
			day_info: '30 авг',
			icon_id: 'small_rain',
			temp_day: '+18',
			temp_night: '+15',
			info: 'небольшой дождь',
		},
		{
			day_name: 'Чт',
			day_info: '28 авг',
			icon_id: 'mainly_cloudy',
			temp_day: '+18',
			temp_night: '+15',
			info: 'Облачно',
		},
		{
			day_name: 'Пт',
			day_info: '28 авг',
			icon_id: 'rain',
			temp_day: '+18',
			temp_night: '+15',
			info: 'Облачно',
		},
		{
			day_name: 'Сб',
			day_info: '28 авг',
			icon_id: 'sun',
			temp_day: '+18',
			temp_night: '+15',
			info: 'Облачно',
		},
		{
			day_name: 'Вс',
			day_info: '28 авг',
			icon_id: 'sun',
			temp_day: '+18',
			temp_night: '+15',
			info: 'Облачно',
		},
	];
	return (
		<>
			{/* <Tabs /> */}
			<div className={s.days}>
				{days.map((day: Day) => (
					<Card day={day} key={day.day_name} />
				))}
			</div>
		</>
	);
}

export default Days;
