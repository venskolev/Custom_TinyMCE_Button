<?php
/**
 * Plugin Name: Custom TinyMCE Button
 * Plugin URI: https://alfatrex.com
 * Description: Adds a custom button to the TinyMCE editor.
 * Version: 1.0.1
 * Author: Vens Kolev
 * Author URI: https://alfatrex.com
 * License: GPL2
 */
function custom_classic_editor_button() {
    if ( ! current_user_can( 'edit_posts' ) && ! current_user_can( 'edit_pages' ) ) {
        return;
    }

    if ( get_user_option( 'rich_editing' ) !== 'true' ) {
        return;
    }

    add_filter( 'mce_external_plugins', 'custom_classic_editor_button_add_plugin' );
    add_filter( 'mce_buttons', 'custom_classic_editor_button_register' );
}

function custom_classic_editor_button_register( $buttons ) {
    array_push( $buttons, 'custom_button' );
    return $buttons;
}

function custom_classic_editor_button_add_plugin( $plugins ) {
    $plugins['custom_button'] = plugin_dir_url( __FILE__ ) . 'custom-class-edite-button.js';
    return $plugins;
}

add_action( 'admin_init', 'custom_classic_editor_button' );




