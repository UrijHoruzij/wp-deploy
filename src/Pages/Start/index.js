const { useState } = wp.element;
import packageJson from '../../../package.json';
import { __ } from '@wordpress/i18n';
import { Button } from '@wordpress/components';
import apiFetch from '@wordpress/api-fetch';
import Card from '../../Card';

const PageStart = (props) => {
	const { noticeShow } = props;
	const [deploy, setDeploy] = useState(false);

	const fetchDeploy = async () => {
		if (!deploy) {
			setDeploy(true);
			let res = await apiFetch({
				path: '/wp/v2/wp-deploy/build',
				method: 'POST',
			});
			if (res.status == 'success') {
				noticeShow(res.status, __('Сборка запущена', packageJson.name));
			} else {
				noticeShow(res.status, __('Ошибка сборки', packageJson.name));
			}
			setDeploy(false);
		}
	};
	return (
		<>
			<Card title={__('Готовы начать? Проверьте настройки', packageJson.name)} icon="info">
				<p className="card-description">
					{__(
						`Нужны еще подробности? Пожалуйста, ознакомьтесь с нашей полной документацией для получения подробной
					информации о том, как использовать плагин.`,
						packageJson.name,
					)}
				</p>
				<div>
					<Button href="https://github.com/UrijHoruzij/wp-deploy" variant="primary">
						{__('Перейти к документации', packageJson.name)}
					</Button>
				</div>
			</Card>
			<Card title={__('Собрать сайт', packageJson.name)} icon="hammer">
				<p className="card-description">
					{__('Пожалуйста, введите в настройках необходимые данные для запуска сборки сайта.', packageJson.name)}
				</p>
				<div>
					<Button isBusy={deploy} onClick={fetchDeploy} variant="primary">
						{__('Собрать сайт', packageJson.name)}
					</Button>
				</div>
			</Card>
		</>
	);
};
export default PageStart;
