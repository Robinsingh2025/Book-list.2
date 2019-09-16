/* eslint-disable max-classes-per-file */
// Book Class: Represents a Book
class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

class UI {
  static addBookTOList(book) {
    const list = document.querySelector('#book-list');
    //TODO Create The New element and populate it with object literal
  }
}

document.querySelector('#book-form').addEventListener('click', e => {
  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;
  const isbn = document.querySelector('#isbn').value;

  const book = new Book(title, author, isbn);

  UI.addBookTOList(book);
});
