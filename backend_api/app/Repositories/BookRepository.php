<?php

namespace App\Repositories;
use App\Repositories\Interfaces\BookRepositoryInterface;
use App\Models\Book;

class BookRepository implements BookRepositoryInterface
{
    /**
     * Create a new class instance.
     */
    public function __construct()
    {
        //
    }

    /**
     * Function: getAll()
     * Description: Esta função monta a query para retornar todos os livros,
     * aplica filtros e também ordena o conteúdo
     */
    public function getAllBooks()
    {
        $booksQuery = Book::query(); // Inicia a query base

        //Controle de ordenação do título | Padrão: ascendente (A-Z)
        $orderDirection = request('title_order_direction', 'asc'); 
        $booksQuery->orderBy('title', $orderDirection);
        
        //Filtro por autor
        if (request()->has('author')) {
            $booksQuery->where('author', request('author'));
        }
        //Filtro por categoria
        if (request()->has('category')) {
            $booksQuery->where('category', request('category'));
        }
        //Filtro por ano
        if (request()->has('year')) {
            $booksQuery->where('year', request('year'));
        }

        return $booksQuery->paginate(15);
    }
}
