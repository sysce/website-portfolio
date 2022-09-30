import './styles/root.scss';
import './styles/theme.scss';
import './styles/fonts/SegoeUI.scss';
import MainLayout from './MainLayout';
import { lazy } from 'react';
import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

const Home = lazy(() => import('./pages/index'));
const Proxy = lazy(() => import('./pages/proxy'));
const Contact = lazy(() => import('./pages/contact'));
const NotFound = lazy(() => import('./pages/404'));

const App = () => {
	return (
		<MainLayout>
			<Routes>
				<Route
					element={
						<Suspense>
							<Home />
						</Suspense>
					}
					index
				/>
				<Route
					element={
						<Suspense>
							<Proxy />
						</Suspense>
					}
					path="/proxy.html"
				/>
				<Route
					element={
						<Suspense>
							<Contact />
						</Suspense>
					}
					path="/contact.html"
				/>
				<Route
					element={
						<Suspense>
							<NotFound />
						</Suspense>
					}
					path="*"
				/>
			</Routes>
		</MainLayout>
	);
};

export default App;
