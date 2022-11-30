import { Dashicon } from '@wordpress/components';

const Card = (props) => {
	const { children, title, icon, fullWidth } = props;
	return (
		<div className={`card ${fullWidth ? 'fullWidth' : ''}`}>
			<div className="card-header">
				<Dashicon className="icon" icon={icon} />
				<h3 className="title">{title}</h3>
			</div>
			<div className="card-content">{children}</div>
		</div>
	);
};
export default Card;
