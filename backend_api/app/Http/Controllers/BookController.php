<?php

namespace App\Http\Controllers;

use App\Models\Book;
use App\Http\Controllers\Controller;
use App\Http\Requests\StoreBookRequest;
use App\Http\Requests\UpdateBookRequest;

class BookController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $books = Book::paginate(15);

        if($books->isEmpty()) {
            return response()->json([
                'message' => 'Resources not found',
                'books' => []
            ], 404);
        }

        return response()->json([
            'message' => 'Books successfully recovered!',
            'books' => $books
        ], 200);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreBookRequest $request)
    {
        $book = Book::create($request->only([
            'title', 
            'author', 
            'category', 
            'year'
        ]));

        return response()->json([
            'message' => 'Book created successfully!',
            'book' => $book
        ], 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(Book $book)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateBookRequest $request, Book $book)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Book $book)
    {
        //
    }
}
