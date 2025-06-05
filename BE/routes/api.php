<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\DB;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/getlistFasility', function (Request $request) {
    $facilities = DB::table('facility')->get();
    return response()->json($facilities);
});

Route::get('/getlistFasility/{id}', function (Request $request, $id) {
    $facilities = DB::table('listfasilitas')->where('idfacility', $id)->get();
    return response()->json($facilities);
});

Route::get('/getlistFasility/{id}/{sid}', function (Request $request, $id, $sid) {
    if (!is_numeric($id) || !is_numeric($sid)) {
        return response()->json(['error' => 'Invalid parameter'], 400);
    }

    $facility = DB::table('listfasilitas')
        ->where(['idfacility' => $id, 'id' => $sid])
        ->first();

    if (!$facility) {
        return response()->json(['error' => 'Facility not found'], 404);
    }

    // Ambil semua waktu yang sudah digunakan (flatten & format sekalian)
    $usedTimes = DB::table('transaction')
        ->where(['idsubfacility'=> $sid])
        ->pluck('time_start')
        ->flatMap(function ($json) {
            $arr = json_decode($json, true);
            if (!is_array($arr)) return [];
            return collect($arr)->map(function ($t) {
                return date('H:i', strtotime($t));
            });
        })
        ->unique()
        ->values();

    // Buat jam aktif (06:00 - 22:00)
    $activeTimes = collect(range(1, 24))
        ->map(fn($h) => str_pad($h, 2, '0', STR_PAD_LEFT) . ':00');

    // Filter waktu yang masih tersedia
    $availableTimes = $activeTimes->diff($usedTimes)->values();

    $response = [
        'facility' => $facility,
        'available_times' => $availableTimes
    ];

    return response()->json($response);
});

