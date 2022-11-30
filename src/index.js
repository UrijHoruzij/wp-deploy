const { render, useState } = wp.element;
import { Notice, ExternalLink } from '@wordpress/components';
import packageJson from '../package.json';
import { __ } from '@wordpress/i18n';
import Navigation from './Navigation';
import Sidebar from './Sidebar';
import Header from './Header';
import PageStart from './Pages/Start';
import PageHelp from './Pages/Help';
import PageSettings from './Pages/Settings';

const Main = () => {
	const [notice, setNotice] = useState(null);
	const [noticeMessage, setNoticeMessage] = useState('');
	const [page, setPage] = useState(0);
	const [pages, setPages] = useState([
		{
			name: __('Добро пожаловать', packageJson.name),
		},
		{
			name: __('Настройки', packageJson.name),
		},
		{
			name: __('Помощь', packageJson.name),
		},
	]);
	const noticeShow = (status, message) => {
		setNotice(status);
		setNoticeMessage(message);
		setTimeout(() => setNotice(false), 5000);
	};

	return (
		<div id="wp-deploy-dashboard">
			<Header pages={pages} page={page} setPage={setPage} />
			<div className="content-wrap">
				<div className="container content">
					<div className="main">
						{notice && (
							<Notice className="custom-notice" status={notice} isDismissible={false}>
								{noticeMessage}
							</Notice>
						)}
						<div className="tab-content columns start">
							<Navigation page={page}>
								<PageStart noticeShow={noticeShow}></PageStart>
								<PageSettings noticeShow={noticeShow} />
								<PageHelp />
							</Navigation>
						</div>
					</div>
					<Sidebar>
						<Sidebar.Section title={__('Сообщество', packageJson.name)}>
							{__(
								`Делитесь своими мыслями, задавайте вопросы и помогайте друг другу в нашем сообществе! Будьте в курсе
							того, над чем мы работаем.`,
								packageJson.name,
							)}
							<br />
							<ExternalLink href="https://github.com/UrijHoruzij/wp-deploy">Github</ExternalLink>
						</Sidebar.Section>
					</Sidebar>
				</div>
			</div>
		</div>
	);
};
render(<Main />, document.getElementById('wp-deploy-app'));
