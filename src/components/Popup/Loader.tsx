import s from './Popup.module.scss';
import { Bars } from 'react-loader-spinner';

function Loader() {
	return (
		<div className={s.blur}>
			<Bars color='#00BFFF' height={150} width={150} />
		</div>
	);
}

export default Loader;
