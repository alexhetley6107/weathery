import React from 'react';
import { IndicatorSVGSelector } from '../../../../assets/icons/indicators/IndicatorSVGSelector';

import { Item } from './ThisDayInfo';
import s from './ThisDayInfo.module.scss';

interface Props {
	item: Item;
}

const ThisDayItem = ({ item }: Props) => {
	const { icon_id, name, value } = item;
	return (
		<div className={s.item}>
			<div className={s.indicator}>
				<IndicatorSVGSelector id={icon_id} />
			</div>
			<div className={s.name}>{name}</div>
			<div className={s.value}>{value}</div>
		</div>
	);
};

export default ThisDayItem;
