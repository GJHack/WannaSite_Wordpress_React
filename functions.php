<?php

//Загружаем сегенеренный Реактом js & css
function wannaSiteLoad() {
  wp_enqueue_script('ourmainjs', get_theme_file_uri('/build/index.js'), array('wp-element'), '1.0', true);
  wp_enqueue_style('ourmaincss', get_theme_file_uri('/build/index.css'));
}
add_action('wp_enqueue_scripts', 'wannaSiteLoad');

//Добавляем тайтлы и миниатюры
function wannaSiteAddSupport() {
  add_theme_support('title-tag');
  add_theme_support('post-thumbnails');
}

add_action('after_setup_theme', 'wannaSiteAddSupport');

//Добавляем для темы поддержку меню
function theme_support_setup(){
    register_nav_menus(array(
      'head_menu' => 'Меню в шапке',
      'left_menu' => 'Меню слева',
      ));
}
add_action('after_setup_theme','theme_support_setup');

// Cоздаем кастомную функцию для получения меню навигации
function custom_wp_menu() {
    // Заменить на наше название меню, ссылку или ID
    return wp_get_nav_menu_items('Меню слева');
}

// Создаем новый эндпоинт для роутера рест
add_action( 'rest_api_init', function () {
    register_rest_route( 'wp/v2', 'menu', array(
        'methods' => 'GET',
        'callback' => 'custom_wp_menu',
    ) );
} );
