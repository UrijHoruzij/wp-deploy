import packageJson from '../../package.json';
import { __ } from '@wordpress/i18n';
import { Dashicon } from '@wordpress/components';

const Header = (props) => {
	const { page, pages, setPage } = props;
	return (
		<header>
			<div className="container">
				<div className="top">
					<h1 className="heading">{__('Deploy github', packageJson.name)}</h1>
					<span className="version">v{packageJson.version}</span>
					<Dashicon className="icon" icon="admin-tools" />
				</div>
				<nav className="navigation">
					{pages.map((item, index) => (
						<li className={`${page === index ? 'activ' : ''}`} key={index} onClick={() => setPage(index)}>
							{item.name}
						</li>
					))}
				</nav>
			</div>
		</header>
	);
};
export default Header;
