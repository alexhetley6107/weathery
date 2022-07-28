import { Theme } from '../context/ThemeContext';

export function changeCssRootVars(theme: Theme) {
	const root = document.querySelector(':root') as HTMLElement;

	const components = ['body-back', 'components-back', 'card-back', 'card-shadow', 'text-color'];

	components.forEach((comp) => {
		root.style.setProperty(`--${comp}-default`, `var(--${comp}-${theme})`);
	});
}
