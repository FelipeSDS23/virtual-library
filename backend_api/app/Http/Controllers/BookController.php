<?php

namespace App\Http\Controllers;

use App\Models\Book;
use App\Http\Controllers\Controller;
use App\Http\Requests\StoreBookRequest;
use App\Http\Requests\UpdateBookRequest;
use Illuminate\Http\JsonResponse;
use App\Repositories\BookRepository;

class BookController extends Controller
{
    protected $bookRepository;

    public function __construct(BookRepository $bookRepository)
    {
        $this->bookRepository = $bookRepository;
    }

    /**
     * Display a listing of all books.
     *
     * @return JsonResponse
     */
    public function index(): JsonResponse
    {
        $books = $this->bookRepository->getAllBooks();

        //Verifica se há registros no banco
        if($books->isEmpty()) {
            return response()->json([
                'message' => 'No books found.',
                'books' => []
            ], 404);
        }

        //Retorna todos os livros
        return response()->json([
            'message' => 'Books successfully retrieved.',
            'books' => $books
        ], 200);
    }

    /**
     * Store a newly created book in the database.
     *
     * @param StoreBookRequest $request
     * @return JsonResponse
     */
    public function store(StoreBookRequest $request): JsonResponse
    {
        $book = $this->bookRepository->createBook($request->only([
            'title', 
            'author', 
            'category', 
            'year'
        ]));

        return response()->json([
            'message' => 'Book created successfully.',
            'book' => $book
        ], 201);
    }

    /**
     * Display the specified book.
     *
     * @param int $id
     * @return JsonResponse
     */
    public function show(int $id): JsonResponse
    {
        $book = $this->bookRepository->findBookById($id);

        //Verifica se há registro no banco
        if(!$book) {
            return response()->json([
                'message' => 'Book not found.',
                'book' => null
            ], 404);
        }

        //Retorna o livro
        return response()->json([
            'message' => 'Book successfully retrieved.',
            'book' => $book
        ], 200);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateBookRequest $request, int $id): JsonResponse
    {
        $book = $this->bookRepository->updateBook($id, $request->only([
            'title', 
            'author', 
            'category', 
            'year'
        ]));

        //Verifica se há registro no banco
        if(!$book) {
            return response()->json([
                'message' => 'Book not found.',
                'book' => null
            ], 404);
        }

        //Retorna o livro
        return response()->json([
            'message' => 'Book successfully updated.',
            'book' => $book
        ], 200);
    }

    /**
     * Remove the specified book from the database.
     *
     * @param int $id
     * @return JsonResponse
     */
    public function destroy(int $id): JsonResponse
    {
        $deleted = $this->bookRepository->deleteBook($id);

        //Verifica se há registro no banco
        if(!$deleted) {
            return response()->json([
                'message' => 'Book not found.',
            ], 404);
        }

        //Retorna o livro
        return response()->json([
            'message' => 'Book successfully deleted.',
        ], 200);
    }
}
