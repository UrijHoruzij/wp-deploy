<?php
/*
Plugin Name: Deploy plugin
Description: A deploy plugin to rerun github actions
Author: Urij Horuzij
Author URI: https://github.com/UrijHoruzij
Version: 1.0.0
Text Domain: wp-deploy
*/

class WP_deploy
{
	public function __construct()
	{
		add_action('admin_menu', [$this, 'add_menu_plugin']);
		add_action('admin_init', [$this, 'wp_deploy_register_setting']);
		add_action('rest_api_init', [$this, 'wp_deploy_rest']);
	}
	public static function uninit()
	{
		remove_action('admin_init', [$this, 'wp_deploy_register_setting']);
		remove_action('admin_menu', [$this, 'add_menu_plugin']);
		remove_action('rest_api_init', [$this, 'wp_deploy_rest']);
		unregister_setting('deploy_settings', 'wp_deploy_plugin_event');
		unregister_setting('deploy_settings', 'wp_deploy_plugin_user');
		unregister_setting('deploy_settings', 'wp_deploy_plugin_repos');
		unregister_setting('deploy_settings', 'wp_deploy_plugin_token');
		delete_option('wp_deploy_plugin_event');
		delete_option('wp_deploy_plugin_user');
		delete_option('wp_deploy_plugin_repos');
		delete_option('wp_deploy_plugin_token');
	}
	public function add_menu_plugin()
	{
		$page = add_menu_page(
			'Сборка сайта',
			'Сборка сайта',
			'manage_options',
			'wp_deploy_plugin',
			[$this, 'wp_deploy_settings_page'],
			'dashicons-admin-site'
		);
		add_action('load-' . $page, [$this, 'wp_deploy_admin_scripts']);
	}

	public function wp_deploy_admin_scripts()
	{
		$plugin_data = get_plugin_data(__FILE__);
		$plugin_version = $plugin_data['Version'];
		wp_enqueue_style(
			'plugin-wp-deploy-admin-frontend',
			plugin_dir_url(__FILE__) . 'src/style.css',
			['wp-components'],
			$plugin_version
		);
		wp_enqueue_script(
			'plugin-wp-deploy-admin-frontend',
			plugin_dir_url(__FILE__) . 'build/index.js',
			['wp-element', 'wp-components', 'wp-api-fetch'],
			$plugin_version,
			true
		);
	}
	public function wp_deploy_settings_page()
	{
		?>
        <div id="wp-deploy-app"></div>
    <?php
	}

	public function wp_deploy_rest()
	{
		register_rest_route('wp/v2', 'wp-deploy/get-settings', [
			'methods' => 'GET',
			'callback' => [$this, 'get_settings'],
		]);
		register_rest_route('wp/v2', 'wp-deploy/set-settings', [
			'methods' => 'POST',
			'callback' => [$this, 'set_settings'],
		]);
		register_rest_route('wp/v2', 'wp-deploy/build', [
			'methods' => 'POST',
			'callback' => [$this, 'build'],
		]);
	}

	public function wp_deploy_register_setting()
	{
		register_setting('deploy_settings', 'wp_deploy_plugin_event', 'sanitize_text_field');
		register_setting('deploy_settings', 'wp_deploy_plugin_user', 'sanitize_text_field');
		register_setting('deploy_settings', 'wp_deploy_plugin_repos', 'sanitize_text_field');
		register_setting('deploy_settings', 'wp_deploy_plugin_token', 'sanitize_text_field');
	}
	public function get_settings()
	{
		$event_type = get_option('wp_deploy_plugin_event');
		$name_github_user = get_option('wp_deploy_plugin_user');
		$name_repos = get_option('wp_deploy_plugin_repos');
		$github_token = get_option('wp_deploy_plugin_token');
		return [
			'event' => $event_type ? $event_type : '',
			'user' => $name_github_user ? $name_github_user : '',
			'repos' => $name_repos ? $name_repos : '',
			'token' => $github_token ? $github_token : '',
		];
	}
	public function set_settings($req)
	{
		update_option('wp_deploy_plugin_event', $req['event']);
		update_option('wp_deploy_plugin_user', $req['user']);
		update_option('wp_deploy_plugin_repos', $req['repos']);
		update_option('wp_deploy_plugin_token', $req['token']);
		return ['status' => 'success'];
	}
	public function build()
	{
		$event_type = get_option('wp_deploy_plugin_event');
		$name_github_user = get_option('wp_deploy_plugin_user');
		$name_repos = get_option('wp_deploy_plugin_repos');
		$github_token = get_option('wp_deploy_plugin_token');
		if ($event_type && $name_github_user && $name_repos && $github_token) {
			$endpoint = `https://api.github.com/repos/{$name_github_user}/{$name_repos}/dispatches`;
			$body = [
				'event_type' => $event_type,
			];
			$body = wp_json_encode($body);
			$options = [
				'body' => $body,
				'headers' => [
					'Content-Type' => 'application/json',
					'Accept' => 'application/vnd.github.everest-preview+json',
					'Authorization' => `Bearer {$github_token}`,
				],
				'httpversion' => '1.0',
				'sslverify' => false,
				'data_format' => 'body',
			];
			wp_remote_post($endpoint, $options);
			return ['status' => 'success'];
		}
		return ['status' => 'error'];
	}
}

$deploy = new WP_deploy();
register_uninstall_hook(__FILE__, ['WP_deploy', 'uninit']);
