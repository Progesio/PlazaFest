<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\DB;
use function GuzzleHttp\json_encode;
use App\Http\Controllers\FasilitasController;
use App\Http\Controllers\TransaksiController;

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/getlistFasility', [FasilitasController::class, 'getListFasility']);
Route::get('/getlistFasility/{id}', [FasilitasController::class, 'getListFasilityById']);
Route::get('/getlistFasility/{id}/{sid}', [FasilitasController::class, 'getListFasilityByIdSid']);
Route::get('/getArtikelList', [FasilitasController::class, 'getArtikelList']);

Route::post('/makeTransaction', [TransaksiController::class, 'makeTransaction']);
Route::get('/getTransaction', [TransaksiController::class, 'getTransaction']);



