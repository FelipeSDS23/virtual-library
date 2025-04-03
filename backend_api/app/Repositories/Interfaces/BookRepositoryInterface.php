<?php

namespace App\Repositories\Interfaces;

interface BookRepositoryInterface
{
    public function getAllBooks();
    public function createBook(array $book);
    public function findBookById(int $id);
    public function updateBook(int $id, array $book);
    public function deleteBook(int $id);
}
