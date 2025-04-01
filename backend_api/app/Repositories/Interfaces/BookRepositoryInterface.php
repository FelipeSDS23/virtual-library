<?php

namespace App\Repositories\Interfaces;

interface BookRepositoryInterface
{
    public function getAllBooks();
    public function createBook(array $book);
    // public function findBookById($id);
    // public function updateBook($id, array $data);
    // public function deleteBook($id);
}
