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
    $item->admin_id=$request->user_id;
    $item->picture=$request->picture;
    $item->save();
    return response()->json([
        "status"=>"success"
    ],200);
   }

   public function addCategory(Request $request){
    $item=new Category();
    $item->name=$request->name; 
    $item->id_admin=$request->user_id;
    $item->save();
    return response()->json([
        "status"=>"success"
    ],200);

  
    

   }
   public function getAllCategories (){
        $category=Category::all();
        return response()->json([
            "categories"=>$category,
            "status"=>"success"
        ],200);
    }

   
}
