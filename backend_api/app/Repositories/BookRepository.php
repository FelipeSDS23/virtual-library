<?php

namespace App\Repositories;
use App\Repositories\Interfaces\BookRepositoryInterface;
use App\Models\Book;
use Illuminate\Contracts\Pagination\LengthAwarePaginator;

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
     * Obtém uma lista de livros com filtros opcionais e ordenação.
     *
     * Esta função monta a query para retornar todos os livros,
     * aplica filtros opcionais e ordena o conteúdo antes de executar a consulta no banco de dados.
     *
     * @return LengthAwarePaginator Lista paginada de livros.
     */
    public function getAllBooks(): LengthAwarePaginator
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

    /**
     * Cria um novo registro de livro no banco de dados.
     *
     * @param array $book Dados do livro a ser criado.
     * @return Book Livro recém-criado.
     */
    public function createBook(array $book): Book 
    {
        return Book::create($book);
    }

    /**
     * Recupera o registro de um livro no banco de dados.
     *
     * @param int $id Id do livro a ser recuperado.
     * @return Book|null O livro recuperado do banco de dados ou null se não encontrado.
     */
    public function findBookById(int $id): ?Book 
    {
        return Book::find($id);
    }

    public function updateBook(int $id, array $book): ?Book 
    {
        $bookInstance = Book::find($id);

        if (!$bookInstance) {
            return null;
        }

        $bookInstance->update($book);

        return $bookInstance;
    }

    /**
     * Deleta um registro de um livro no banco de dados.
     *
     * @param int $id Id do livro a ser deletado.
     * @return bool Retorna true se o livro foi deletado, false se não encontrado.
     */
    public function deleteBook(int $id): bool
    {
        $book = Book::find($id);

        if ($book) {
            return (bool) $book->delete();
        }

        return false;
    }
}
