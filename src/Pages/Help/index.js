import { Button } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import packageJson from '../../../package.json';
import Card from '../../Card';

const PageHelp = () => {
	return (
		<Card title={__('Помощь', packageJson.name)} icon="info">
			<p className="card-description">
				{__(
					`Остались вопросы? Пожалуйста, ознакомьтесь с нашей полной документацией для получения подробной
					информации о том, как использовать плагин. Мы ответим на ваши вопросы.`,
					packageJson.name,
				)}
			</p>
			<div>
				<Button href="https://github.com/UrijHoruzij/wp-deploy" variant="primary">
					{__(`Перейти к документации`, packageJson.name)}
				</Button>
			</div>
		</Card>
	);
};
export default PageHelp;
