<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::group([
    'prefix' => 'auth',
    'namespace' => 'App\Http\Controllers'], function () {

    Route::post('login', 'Auth\AuthController@login');
    Route::post('register', 'Auth\AuthController@register');
    Route::get('register/activate/{token}', 'Auth\AuthController@registerActivate');

    Route::group(['middleware' => 'auth:api'], function() {
        Route::get('logout', 'Auth\AuthController@logout');
        Route::get('profile', 'Auth\AuthController@profile');
    });
    
});


Route::group([
    'middleware' => 'auth:api',
    'namespace' => 'App\Http\Controllers'], function () {

    Route::resource('product-category','ProductCategoryController');

});