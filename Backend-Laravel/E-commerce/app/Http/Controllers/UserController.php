<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Item;
use App\Models\Category;

class UserController extends Controller
{
   public function addItem(Request $request){
    $item=new Item();
    $item->name=$request->name;
    $item->description=$request->description;
    $item->category_id=$request->category_id;
    $item->admin_id=$request->admin_id;
    $item->picture=$request->picture;
    $item->save();
    return response()->json([
        "status"=>"success"
    ],200);
   }

   public function addCategory(Request $request){
    $item=new Item();
    $item->name=$request->name;
    $item->description=$request->description;
    $item->category_id=$request->category_id;
    $item->admin_id=$request->admin_id;
    $item->picture=$request->picture;
    $item->save();
    return response()->json([
        "status"=>"success"
    ],200);


   }
}
