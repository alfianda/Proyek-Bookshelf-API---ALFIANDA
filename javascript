// server.js
const express = require('express');
const bodyParser = require('body-parser');
const database = require('./database');

const app = express();
const port = 3000;

app.use(bodyParser.json());

// Daftar Buku
app.get('/books', (req, res) => {
  const books = database.getAllBooks();
  res.json(books);
});

// Tambah Buku Baru
app.post('/books', (req, res) => {
  const book = req.body;
  const newBook = database.addBook(book);
  res.json(newBook);
});

// Detail Buku
app.get('/books/:id', (req, res) => {
  const id = req.params.id;
  const book = database.getBookById(id);
  res.json(book);
});

// Hapus Buku
app.delete('/books/:id', (req, res) => {
  const id = req.params.id;
  const deletedBook = database.deleteBook(id);
  res.json(deletedBook);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
