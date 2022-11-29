const { useState, useEffect } = wp.element;
import apiFetch from '@wordpress/api-fetch';
import packageJson from '../../../package.json';
import { __ } from '@wordpress/i18n';
import { Button, Spinner, TextControl } from '@wordpress/components';

const PageSettings = (props) => {
	const { noticeShow } = props;
	const [loading, setLoading] = useState(true);
	const [settings, setSettings] = useState({});
	const [save, setSave] = useState(false);

	const updateSettings = async () => {
		if (!save) {
			setSave(true);
			let res = await apiFetch({
				path: '/wp/v2/wp-deploy/set-settings',
				method: 'POST',
				data: {
					event: settings.event,
					user: settings.user,
					repos: settings.repos,
					token: settings.token,
				},
			});
			noticeShow(res.status, __('Настройки сохранены', packageJson.name));
			setSave(false);
		}
	};
	const changeSettings = (updatedValue) => {
		setSettings({ ...settings, ...updatedValue });
	};
	const getSettings = async () => {
		let res = await apiFetch({
			path: '/wp/v2/wp-deploy/get-settings',
		});
		setSettings(res);
	};
	useEffect(async () => {
		await getSettings();
		setLoading(false);
	}, []);
	return (
		<div className="card settings">
			{!loading ? (
				<>
					<h3 className="heading">{__('Название события', packageJson.name)}</h3>
					<TextControl value={settings.event} onChange={(value) => changeSettings({ event: value })} />
					<h3 className="heading">{__('Имя пользователя', packageJson.name)}</h3>
					<TextControl value={settings.user} onChange={(value) => changeSettings({ user: value })} />
					<h3 className="heading">{__('Название репозитория', packageJson.name)}</h3>
					<TextControl value={settings.repos} onChange={(value) => changeSettings({ repos: value })} />
					<h3 className="heading">{__('Токен', packageJson.name)}</h3>
					<TextControl value={settings.token} onChange={(value) => changeSettings({ token: value })} />
					<div>
						<Button isBusy={save} onClick={updateSettings} variant="primary">
							{__('Сохранить', packageJson.name)}
						</Button>
					</div>
				</>
			) : (
				<Spinner />
			)}
		</div>
	);
};
export default PageSettings;
