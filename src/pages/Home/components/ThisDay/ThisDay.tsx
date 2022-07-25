import React from 'react';
import { GlobalSVGSelector } from '../../../../assets/icons/global/GlobalSVGSelector';
import s from './ThisDay.module.scss';

type Props = {};

const ThisDay = (props: Props) => {
	return (
		<div className={s.this_day}>
			<div className={s.top_block}>
				<div className={s.top_wrap}>
					<div className={s.this_temp}>20°</div>
					<div className={s.this_day_name}>Сегодня</div>
				</div>
				<GlobalSVGSelector id='sun' />
			</div>
			<div className={s.bottom_block}>
				<div className={s.this_time}>
					Время: <span>21:54</span>
				</div>
				<div className={s.this_city}>
					Город: <span>Харьков</span>
				</div>
			</div>
		</div>
	);
};

export default ThisDay;
