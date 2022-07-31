import { IndicatorSVGSelector } from '../../assets/icons/indicators/IndicatorSVGSelector';
import { useCustomDispatch } from '../../hooks/store';
import currentWeatherSlice from '../../redux/slices/currentWeatherSlice';
import { closeError } from '../../redux/thunks/fetchCurrentWeather';
import s from './Popup.module.scss';

function Error() {
	const dispatch = useCustomDispatch();

	const handleClose = () => {
		dispatch(closeError());
	};

	return (
		<div className={s.blur} onClick={handleClose}>
			<div className={s.popup}>
				<div className={s.error}>Ошибка</div>
				<div className={s.text}>
					Проверьте ваше интернет-соединение или <br />
					правильность написания города
				</div>
				<div className={s.close}>
					<IndicatorSVGSelector id='close' />
				</div>
			</div>
		</div>
	);
}

export default Error;
