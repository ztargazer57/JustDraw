<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('home');
});

Route::view('/post','post');
Route::view('/challenge','challenge');
Route::view('/gallery','gallery');
Route::view('/settings','settings');