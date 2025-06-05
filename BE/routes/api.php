<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\DB;
use function GuzzleHttp\json_encode;

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
    $prelix=[
        'idsubfacility'=> $sid,
        'date_start' =>date('Y-m-d')
    ];
    if(!empty($request->sethel)){
        $prelix['sethel'] = $request->sethel;
    }
    $usedTimes = DB::table('transaction')
        ->where($prelix)
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

Route::post('/makeTransaction', function (Request $request) {
    $data = $request->json()->all();

    // Validasi data minimal
    $validated = validator($data, [
        'idsubfacility' => 'required|integer',
        'time_start' => 'required|array|min:1',
        'price' => 'required|numeric',
        'transactionpoin' => 'required',
        'date_start' => 'required|date',
    ])->validate();

    // Siapkan data untuk insert
    $now = now();
    $insertData = [
        'idsubfacility'    => $validated['idsubfacility'],
        'time_start'       => json_encode($validated['time_start']),
        'status'           => 'pending',
        'timesuccess'      => null,
        'timeexpaired'     => null, // Bisa diisi sesuai kebutuhan
        'price'            => $validated['price'],
        'transactionpoin'  => $validated['transactionpoin'],
        'date_start'       => $validated['date_start'],
        'created_at'       => $now,
        'updated_at'       => $now,
        'deleted_at'       => null,
    ];

    $transactionId = DB::table('transaction')->insertGetId($insertData);

    return response()->json([
        'success' => true,
        'transaction_id' => $transactionId
    ]);
});

Route::get('/getTransaction', function (Request $request) {
    $id = $request->id;
    $transactions = DB::table('listsuccesstransction')
        ->where('t_id',$id)
        ->first();

    if($transactions->barcode == null){
        $convert=json_encode($transactions);
        $convert=Hash::make($convert);
        $transactions->barcode =  "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data='".$convert."'";
    }

    return response()->json($transactions);
});



