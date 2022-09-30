import { useSettings } from './Settings';
import { ReactComponent as NavSVG } from './assets/nav.svg';
import layoutStyle from './styles/MainLayout.module.scss';
import Brightness4 from '@mui/icons-material/Brightness4';
import Brightness7 from '@mui/icons-material/Brightness7';
import clsx from 'clsx';
import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';

export const useMainSettings = () =>
	useSettings<{
		theme: 'light' | 'dark';
	}>('main settings', () => ({
		theme:
			typeof matchMedia === 'function' &&
			matchMedia('(prefers-color-scheme: light)').matches
				? 'light'
				: 'dark',
	}));

const MainLayout = ({ children }: { children: ReactNode }) => {
	const [mainSettings, setMainSettings] = useMainSettings();

	document.documentElement.className = `theme-${mainSettings.theme}`;

	return (
		<>
			<nav className={layoutStyle.nav}>
				<Link to="/" className={clsx(layoutStyle.entry, layoutStyle.logo)}>
					<NavSVG />
				</Link>
				<div className={layoutStyle.separator}></div>
				<div className={layoutStyle.collapsable}>
					<Link
						to="/proxy.html"
						className={clsx(layoutStyle.entry, layoutStyle.text)}
					>
						<span>Proxy</span>
					</Link>
				</div>
				<div className={layoutStyle.shiftRight}></div>
				<button
					className={layoutStyle.lightswitch}
					onClick={() =>
						setMainSettings({
							...mainSettings,
							theme: mainSettings.theme === 'dark' ? 'light' : 'dark',
						})
					}
					suppressHydrationWarning
				>
					{mainSettings.theme === 'dark' ? <Brightness4 /> : <Brightness7 />}
				</button>
			</nav>
			{children}
			<footer className={layoutStyle.footer}>
				<Link to="/contact.html">Contact</Link>
				<span>SystemYA {new Date().getUTCFullYear()}</span>
			</footer>
		</>
	);
};

export default MainLayout;
