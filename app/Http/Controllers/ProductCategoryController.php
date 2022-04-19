<?php

namespace App\Http\Controllers;

use App\Models\ProductCategory;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ProductCategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $product_category = ProductCategory::all();
        return response()->json([
            'status' => 'success',
            'product_category' => $product_category
        ], 200); 
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $product_category =  new ProductCategory();
        $product_category->name_kh = $request->name_kh;
        $product_category->name_en = $request->name_en;
        $product_category->desc_kh = $request->desc_kh;
        $product_category->desc_en = $request->desc_en;
        $product_category->status = $request->status;
        $product_category->created_by = Auth::user()->id;

        if(!$product_category->save())
        {
            return response()->json([
                'status' => 'fail',
                'msg' => 'Please your data again!'
            ], 200);
        }

        return response()->json([
            'status' => 'success',
            'product_category' => $product_category
        ], 200); 
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\ProductCategory  $productCategory
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $product_category = ProductCategory::find($id);
        return response()->json([
            'status' => 'success',
            'product_category' => $product_category
        ], 200); 
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\ProductCategory  $productCategory
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $product_category = ProductCategory::find($id);
        return response()->json([
            'status' => 'success',
            'product_category' => $product_category
        ], 200); 
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\ProductCategory  $productCategory
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, ProductCategory $productCategory)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\ProductCategory  $productCategory
     * @return \Illuminate\Http\Response
     */
    public function destroy(ProductCategory $productCategory)
    {
        //
    }
}
