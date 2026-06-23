const myLibrary = [];

function Book(title, author, pages, read, genre) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.genre = genre;
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}



