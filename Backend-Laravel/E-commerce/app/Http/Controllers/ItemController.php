<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Item;
use App\Models\Like;

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

    public function addLike(Request $request){
        $like= new Like();
        $like->id_user=$request->id_user;
        $like->id_item=$request->id_item;
        $like->liked=$request->liked;
        $like->save();
        return response()->json([
            "status"=>"success"
        ],200);
    }

    public function updateLike(Request $request){
        $like=Like::where('id_user',$request->id_user)
        ->where('id_item',$request->id_item)
        ->update(['liked'=>$request->liked]);

        return response()->json([
            "status"=>"success",
        
        ],200);
    }

    public function checkLiked(Request $request){
        $like=Like::where('id_user',$request->id_user)
        ->where('id_item',$request->id_item)
        ->get('likes.liked')->first();

        return response()->json([
            "status"=>"success",
            "liked"=>$like["liked"]
        
        ],200);
    } 
    
}
