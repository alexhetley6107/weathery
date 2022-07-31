import React from 'react';

import s from './Days.module.scss';

type Props = {};

type Tab = {
	value: string;
};

const Tabs = (props: Props) => {
	const tabs = [{ value: 'На неделю' }, { value: 'На 10 дней' }, { value: 'На месяц' }];
	return (
		<div className={s.tabs}>
			<div className={s.tabs_wrap}>
				{tabs.map((tab: Tab) => (
					<div className={s.tab} key={tab.value}>
						{tab.value}
					</div>
				))}
			</div>
			<div className={s.cancel}>Отменить</div>
		</div>
	);
};

export default Tabs;
