import { Link } from 'react-router-dom';

const Home = () => {
	return (
		<main>
			<h1>The page you are looking for is not available.</h1>
			<hr />
			<p>
				If you typed in the URL yourself, please double-check the spelling.
				<br />
				If you got here from a link within our site, please{' '}
				<Link to="/contact.html">Contact Us</Link>.
			</p>
		</main>
	);
};

export default Home;
