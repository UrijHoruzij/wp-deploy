<?php
/*
Plugin Name: Deploy plugin
Description: A deploy plugin to rerun github actions
Author: Urij Horuzij
Version: 0.2.0
*/

add_action('admin_menu', 'plugin_setup_menu');

function plugin_setup_menu()
{
	add_menu_page(
		'Сборка сайта',
		'Сборка сайта',
		'manage_options',
		'wp_deploy_plugin',
		'wp_deploy_page_build',
		'dashicons-admin-site'
	);
	add_submenu_page(
		'wp_deploy_plugin',
		'Сборка сайта',
		'Сборка сайта',
		'manage_options',
		'wp_deploy_plugin',
		'wp_deploy_page_build'
	);
	add_submenu_page(
		'wp_deploy_plugin',
		'Настройка плагина',
		'Настройка плагина',
		'manage_options',
		'wp_deploy_settings',
		'wp_deploy_page_settings'
	);
}

function wp_deploy_page_settings()
{
	?>
        <div class="wrap">
	<h2><?php _e('Страница настроек', 'wp_deploy_plugin'); ?></h2>
	<form method="post" action="options.php">';
                <?php
                settings_fields('deploy_settings');
                do_settings_sections('wp_deploy_settings');
                submit_button();?>
	</form>
</div>;
<?php
}

function wp_deploy_page_build()
{
	?>
        <h2><?php _e('Сборка сайта', 'wp_deploy_plugin'); ?></h2>
        <form method="post">
            <input type="submit" class="button" name="button-prod" value="Собрать"/>
        </form>
<?php
}

add_action('admin_init', 'wp_deploy_register_setting');

function wp_deploy_register_setting()
{
	register_setting('deploy_settings', 'wp_deploy_plugin_event_type', 'sanitize_text_field');
	add_settings_section('setting_event_type', '', '', 'wp_deploy_settings');
	add_settings_field(
		'event_type',
		__('Название события', 'wp_deploy_plugin'),
		'deploy_event_type',
		'wp_deploy_settings',
		'setting_event_type',
		[
			'label_for' => __('Название события', 'wp_deploy_plugin'),
		]
	);

	register_setting('deploy_settings', 'wp_deploy_plugin_name_github_user', 'sanitize_text_field');
	add_settings_section('setting_name_github_user', '', '', 'wp_deploy_settings');
	add_settings_field(
		'setting_name_github_user',
		__('Имя пользователя', 'wp_deploy_plugin'),
		'deploy_name_github_user',
		'wp_deploy_settings',
		'setting_name_github_user',
		[
			'label_for' => __('Имя пользователя', 'wp_deploy_plugin'),
		]
	);

	register_setting('deploy_settings', 'wp_deploy_plugin_name_repos', 'sanitize_text_field');
	add_settings_section('setting_name_repos', '', '', 'wp_deploy_settings');
	add_settings_field(
		'setting_name_repos',
		__('Название репозитория', 'wp_deploy_plugin'),
		'deploy_name_repos',
		'wp_deploy_settings',
		'setting_name_repos',
		[
			'label_for' => __('Название репозитория', 'wp_deploy_plugin'),
		]
	);

	register_setting('deploy_settings', 'wp_deploy_plugin_github_token', 'sanitize_text_field');
	add_settings_section('setting_github_token', '', '', 'wp_deploy_settings');
	add_settings_field(
		'setting_github_token',
		__('Токен', 'wp_deploy_plugin'),
		'deploy_github_token',
		'wp_deploy_settings',
		'setting_github_token',
		[
			'label_for' => __('Токен', 'wp_deploy_plugin'),
		]
	);
}

function deploy_event_type()
{
	$text = get_option('wp_deploy_plugin_event_type');
	printf(
		'<input type="text" id="wp_deploy_plugin_event_type" name="wp_deploy_plugin_event_type" value="%s" />',
		esc_attr($text)
	);
}
function deploy_name_github_user()
{
	$text = get_option('wp_deploy_plugin_name_github_user');
	printf(
		'<input type="text" id="wp_deploy_plugin_name_github_user" name="wp_deploy_plugin_name_github_user" value="%s" />',
		esc_attr($text)
	);
}
function deploy_name_repos()
{
	$text = get_option('wp_deploy_plugin_name_repos');
	printf(
		'<input type="text" id="wp_deploy_plugin_name_repos" name="wp_deploy_plugin_name_repos" value="%s" />',
		esc_attr($text)
	);
}
function deploy_github_token()
{
	$text = get_option('wp_deploy_plugin_github_token');
	printf(
		'<input type="text" id="wp_deploy_plugin_github_token" name="wp_deploy_plugin_github_token" value="%s" />',
		esc_attr($text)
	);
}

if (isset($_POST['button-prod'])) {
	$event_type = get_option('wp_deploy_plugin_event_type');
	$name_github_user = get_option('wp_deploy_plugin_name_github_user');
	$name_repos = get_option('wp_deploy_plugin_name_repos');
	$github_token = get_option('wp_deploy_plugin_github_token');
	$endpoint = 'https://api.github.com/repos/' . $name_github_user . '/' . $name_repos . '/dispatches';
	$body = [
		'event_type' => $event_type,
	];
	$body = wp_json_encode($body);
	$options = [
		'body' => $body,
		'headers' => [
			'Content-Type' => 'application/json',
			'Accept' => 'application/vnd.github.everest-preview+json',
			'Authorization' => 'Bearer ' . $github_token,
		],
		'httpversion' => '1.0',
		'sslverify' => false,
		'data_format' => 'body',
	];
	wp_remote_post($endpoint, $options);
}
