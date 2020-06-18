<?php
if (PHP_SAPI == 'cli-server') {
    $url  = parse_url($_SERVER['REQUEST_URI']);
    $file = __DIR__ . $url['path'];
    if (is_file($file)) return false;
}

$projects = [
    [
        'name'=>'Weather App',
        'url'=>'https://clinnygee.github.io/weather-api-app-BOM/',
        'github'=>'https://github.com/clinnygee/weather-api-app-BOM',
        'image'=>'https://res.cloudinary.com/clinnygee/image/upload/v1581292830/WeatherApi_z7vbi9.png'
    ],
    [
        'name'=>'Instagram Clone',
        'url'=>'http://3.24.180.28',
        'github'=>'https://github.com/clinnygee/instant-messenger',
        'image'=>'https://res.cloudinary.com/clinnygee/image/upload/v1592182294/103949435_910650822734973_9044607956827929333_n_wanlac.jpg'
    ],
    [
        'name'=>'Weight Manager',
        'url'=>'http://3.25.111.216',
        'github'=>'https://github.com/clinnygee/weight-manager',
        'image'=>'https://res.cloudinary.com/clinnygee/image/upload/v1592182281/103986881_585404782388164_7223331908744595873_n_jexwqj.jpg'
    ],
];


require 'index.view.php';