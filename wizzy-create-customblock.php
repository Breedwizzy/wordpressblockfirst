<?php
/**
 * Plugin Name: Wizzy Custom Block
 * Description: Custom Block Test
 */

function wizzycreate_custom_block_script_register()
{
    // Enqueue the JavaScript file for your custom block
    wp_enqueue_script('wizzy-custom-block', plugin_dir_url(__FILE__) . 'wizzycreat-custom-block.js', array('wp-blocks', 'wp-i18n', 'wp-editor'), true, false);
}
add_action('enqueue_block_editor_assets', 'wizzycreate_custom_block_script_register');




?>