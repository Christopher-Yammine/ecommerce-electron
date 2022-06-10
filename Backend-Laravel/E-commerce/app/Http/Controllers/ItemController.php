<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Item;

class ItemController extends Controller
{
    public function getAllItems(){
        $items=Item::join('categories as c','c.id','=','items.id')
        ->get(['items.*','c.name as catName']);
        return response()->json([
            "response"=>"success",
            "items"=>$items
        ]);
        
    }
}
