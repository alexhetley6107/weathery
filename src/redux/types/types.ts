export type Weather = {
	name: string;
	timezone: number;
	main: {
		temp: number;
		temp_max: number;
		temp_min: number;
		feels_like: number;
		pressure: number;
	};
	wind: {
		speed: number;
	};
	weather: { id: number; description: string }[];
};

export type Day = {
	day_name: string;
	day_info: string;
	icon_id: number;
	temp_day: string;
	temp_night: string;
	desc: string;
};

export type Response = { status: number; message: string };
