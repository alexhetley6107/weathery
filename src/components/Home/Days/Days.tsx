import React from 'react';

import s from './Days.module.scss';
import Card from './Card';
import Tabs from './Tabs';
import { useCustomSelector } from '../../../hooks/store';
import { Day } from '../../../redux/types/types';

type Props = {};

function Days({}: Props) {
	const days: Day[] = [
		{
			day_name: 'Сегодня',
			day_info: '28 авг',
			icon_id: 800,
			temp_day: '+18',
			temp_night: '+15',
			desc: 'Облачно',
		},
		{
			day_name: 'Завтра',
			day_info: '29 авг',
			icon_id: 200,
			temp_day: '+18',
			temp_night: '+15',
			desc: 'небольшой дождь и солнце',
		},
		{
			day_name: 'Ср',
			day_info: '30 авг',
			icon_id: 300,
			temp_day: '+18',
			temp_night: '+15',
			desc: 'небольшой дождь',
		},
		{
			day_name: 'Чт',
			day_info: '28 авг',
			icon_id: 500,
			temp_day: '+18',
			temp_night: '+15',
			desc: 'Облачно',
		},
		{
			day_name: 'Пт',
			day_info: '28 авг',
			icon_id: 600,
			temp_day: '+18',
			temp_night: '+15',
			desc: 'Облачно',
		},
		{
			day_name: 'Сб',
			day_info: '28 авг',
			icon_id: 700,
			temp_day: '+18',
			temp_night: '+15',
			desc: 'Облачно',
		},
		{
			day_name: 'Вс',
			day_info: '28 авг',
			icon_id: 803,
			temp_day: '+18',
			temp_night: '+15',
			desc: 'Облачно',
		},
	];

	const { forecast } = useCustomSelector((state) => state.currentWeatherSliceReducer);

	return (
		<>
			<div className={s.days}>
				{forecast.map((day: Day, index: number) => (
					<Card day={day} key={index} />
				))}
			</div>
		</>
	);
}

export default Days;
