const getLocalTime = (timeZone: number) => {
	const current = new Date();
	const utc = new Date(
		current.getUTCFullYear(),
		current.getUTCMonth(),
		current.getUTCDate(),
		current.getUTCHours(),
		current.getUTCMinutes(),
		current.getUTCSeconds(),
	);
	const local = (utc.getTime() / 1000 + timeZone) * 1000;
	return new Date(local);
};

export default getLocalTime;
