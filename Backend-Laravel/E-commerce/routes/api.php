<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\ItemController;



Route::controller(AuthController::class)->group(function () {
    Route::post('login', 'login');
    Route::post('register', 'register');
    Route::post('logout', 'logout');
    Route::post('refresh', 'refresh');

});

Route::post('/addItem',[UserController::class,'addItem'])->name("addItem");
Route::post('/addCategory',[UserController::class,'addCategory'])->name("addCategory");
Route::get('/getAllItems',[ItemController::class,'getAllItems'])->name("getAllItems");
Route::post('/addLike',[ItemController::class,'addLike'])->name("addLike");
Route::post('/updateLike',[ItemController::class,'updateLike'])->name("updateLike");
Route::post('/checkLiked',[ItemController::class,'checkLiked'])->name("checkLiked");
Route::get('/getCategories',[UserController::class,'getAllCategories'])->name("allcategories"); 
