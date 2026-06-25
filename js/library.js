const spineColors = [
  {
    name: "brickRed",
    bodyDark: "#4a1f17", bodyMedium: "#7a3327", bodyLight: "#a8593f",
    bindingDark: "#8a611c", bindingMedium: "#c08a2e", bindingLight: "#dba84f",
    text: "#f3e6d8",
    bookmark: "#3b4f8a",
  },
  {
    name: "forestGreen",
    bodyDark: "#1c3f37", bodyMedium: "#2f6b5e", bodyLight: "#4f9482",
    bindingDark: "#5e2640", bindingMedium: "#9c3f5e", bindingLight: "#c46787",
    text: "#f3e6d8",
    bookmark: "#dba84f", 
  },
  {
    name: "navyBlue",
    bodyDark: "#23315a", bodyMedium: "#3b4f8a", bodyLight: "#5f78b8",
    bindingDark: "#7a3618", bindingMedium: "#b5552c", bindingLight: "#d68257",
    text: "#f3e6d8",
    bookmark: "#f3e6d8",
  },
  {
    name: "plum",
    bodyDark: "#5e2640", bodyMedium: "#9c3f5e", bodyLight: "#c46787",
    bindingDark: "#163838", bindingMedium: "#2a6b6b", bindingLight: "#4f9999",
    text: "#f3e6d8",
    bookmark: "#dba84f", 
  },
  {
    name: "mustard",
    bodyDark: "#8a611c", bodyMedium: "#c08a2e", bodyLight: "#dba84f",
    bindingDark: "#23315a", bindingMedium: "#3b4f8a", bindingLight: "#5f78b8",
    text: "#3a2a0c",
    bookmark: "#9c3f5e",
  },
  {
    name: "olive",
    bodyDark: "#2c4022", bodyMedium: "#4a6b3a", bodyLight: "#6f9457",
    bindingDark: "#3f141e", bindingMedium: "#6b2333", bindingLight: "#9c4a5c",
    text: "#f3e6d8",
    bookmark: "#dba84f", 
  },
  {
    name: "teal",
    bodyDark: "#163838", bodyMedium: "#2a6b6b", bodyLight: "#4f9999",
    bindingDark: "#4a1f17", bindingMedium: "#7a3327", bindingLight: "#a8593f",
    text: "#f3e6d8",
    bookmark: "#dba84f", 
  },
  {
    name: "burgundy",
    bodyDark: "#3f141e", bodyMedium: "#6b2333", bodyLight: "#9c4a5c",
    bindingDark: "#2c4022", bindingMedium: "#4a6b3a", bindingLight: "#6f9457",
    text: "#f3e6d8",
    bookmark: "#dba84f", 
  },
  {
    name: "slateBlueGray",
    bodyDark: "#2e3645", bodyMedium: "#4f5b73", bodyLight: "#7c879e",
    bindingDark: "#8a611c", bindingMedium: "#c08a2e", bindingLight: "#dba84f",
    text: "#f3e6d8",
    bookmark: "#9c3f5e",
  },
  {
    name: "terracotta",
    bodyDark: "#7a3618", bodyMedium: "#b5552c", bodyLight: "#d68257",
    bindingDark: "#2e3645", bindingMedium: "#4f5b73", bindingLight: "#7c879e",
    text: "#f3e6d8",
    bookmark: "#f3e6d8",
  },
];

const myLibrary = [];

const shelvesContainer = document.querySelector(".shelves-container");

function Book(title, author, pages, read, genre) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.genre = genre;
    this.colorIndex = Math.floor(Math.random() * spineColors.length);
}

function addBookToLibrary(title, author, pages, read, genre) {
    let book = new Book(title, author, pages, read, genre);
    myLibrary.push(book);
    updateDOM();
}

function updateDOM() {
    shelvesContainer.innerHTML = "";

    const pageCounts = myLibrary.map((book) => book.pages);
    const minPages = Math.min(...pageCounts);
    const maxPages = Math.max(...pageCounts);


    let bookRow;
    let index = 0;

    addShelf();

    function addShelf() {
        let shelf = document.createElement("div");
        shelf.classList.add("shelf");
        shelvesContainer.append(shelf);

        bookRow = document.createElement("div");
        bookRow.classList.add("book-row");
        shelf.append(bookRow);

        let ledge = document.createElement("div");
        ledge.classList.add("ledge");
        shelf.append(ledge);
    }
    
    let booksPerRow = Math.floor( (bookRow.clientWidth + 3)  / (100 + 3) );
    let shelvesNeeded = Math.ceil( (myLibrary.length + 1) / booksPerRow );

    addBooksInShelf();

    function addBooksInShelf() {
        for (let i = 1; i <= booksPerRow; i++) {
            if (index >= myLibrary.length) break;
            let colorIndex = myLibrary[index].colorIndex;

            let book = document.createElement("div");
            book.style.backgroundColor = spineColors[colorIndex].bodyMedium;
            book.classList.add("book");
            book.dataset.id = myLibrary[index].id;
            let bookHeight = mapPagesToHeight(myLibrary[index].pages, 200, 320, minPages, maxPages);
            book.style.height = `${bookHeight}px`;
            bookRow.append(book);

            let bodyDark1 = document.createElement("div");
            bodyDark1.style.backgroundColor = spineColors[colorIndex].bodyDark;
            book.append(bodyDark1);

            let bodyMedium1 = document.createElement("div");
            bodyMedium1.style.backgroundColor = spineColors[colorIndex].bodyMedium;
            book.append(bodyMedium1);

            let bodyLight1 = document.createElement("div");
            bodyLight1.style.backgroundColor = spineColors[colorIndex].bodyLight;
            if (myLibrary[index].read === true) {
                bodyLight1.classList.add("bookmark");
                bodyLight1.style.color = spineColors[colorIndex].bookmark;
                let icon = document.createElement("i");
                icon.classList.add("ti", "ti-bookmark-filled");
                bodyLight1.append(icon);
            }
            book.append(bodyLight1);

            let bindingDark1 = document.createElement("div");
            bindingDark1.style.backgroundColor = spineColors[colorIndex].bindingDark;
            book.append(bindingDark1);

            let bindingMedium1 = document.createElement("div");
            bindingMedium1.style.backgroundColor = spineColors[colorIndex].bindingMedium;
            book.append(bindingMedium1);

            let bindingLight1 = document.createElement("div");
            bindingLight1.style.backgroundColor = spineColors[colorIndex].bindingLight;
            book.append(bindingLight1);

            let bodyDark2 = document.createElement("div");
            bodyDark2.style.backgroundColor = spineColors[colorIndex].bodyDark;
            book.append(bodyDark2);

            let bodyMedium2 = document.createElement("div");
            bodyMedium2.classList.add("info")
            let title = document.createElement("h1");
            let titleFontSize = mapLengthToFontSize(myLibrary[index].title, 12, 28, 5, 30);
            title.style.fontSize = `${titleFontSize}px`;
            title.textContent = myLibrary[index].title;
            bodyMedium2.append(title);
            let author = document.createElement("h2");
            let authorFontSize = mapLengthToFontSize(myLibrary[index].author, 11, 20, 5, 25);
            author.style.fontSize = `${authorFontSize}px`;
            author.textContent = myLibrary[index].author;
            bodyMedium2.append(author);
            bodyMedium2.style.color = spineColors[colorIndex].text;
            bodyMedium2.style.backgroundColor = spineColors[colorIndex].bodyMedium;
            book.append(bodyMedium2);

            let bodyLight2 = document.createElement("div");
            bodyLight2.style.backgroundColor = spineColors[colorIndex].bodyLight;
            book.append(bodyLight2);

            let bindingDark2 = document.createElement("div");
            bindingDark2.style.backgroundColor = spineColors[colorIndex].bindingDark;
            book.append(bindingDark2);

            let bindingMedium2 = document.createElement("div");
            bindingMedium2.style.backgroundColor = spineColors[colorIndex].bindingMedium;
            book.append(bindingMedium2);

            let bindingLight2 = document.createElement("div");
            bindingLight2.style.backgroundColor = spineColors[colorIndex].bindingLight;
            book.append(bindingLight2);

            let bodyDark3 = document.createElement("div");
            bodyDark3.style.backgroundColor = spineColors[colorIndex].bodyDark;
            book.append(bodyDark3);

            let bodyMedium3 = document.createElement("div");
            bodyMedium3.style.backgroundColor = spineColors[colorIndex].bodyMedium;
            book.append(bodyMedium3);

            let bodyLight3 = document.createElement("div");
            bodyLight3.style.backgroundColor = spineColors[colorIndex].bodyLight;
            book.append(bodyLight3);

            index++;
        }
    }

    for (let i = 1; i <= (shelvesNeeded - 1); i++) {
        addShelf();
        addBooksInShelf();
    }

    let bookEnd = document.createElement("div");
    bookEnd.classList.add("book-end");
    let button = document.createElement("button");
    button.textContent = "+";
    bookEnd.append(button);
    bookRow.append(bookEnd);
}

function mapLengthToFontSize(text, minFontSize, maxFontSize, minLength, maxLength) {
  let length = text.length;

  if (length < minLength) length = minLength;
  if (length > maxLength) length = maxLength;

  let ratio = (maxLength - length) / (maxLength - minLength);

  return minFontSize + ratio * (maxFontSize - minFontSize);
}

function mapPagesToHeight(pages, minHeight, maxHeight, minPages, maxPages) {
  if (minPages === maxPages) {
    return (minHeight + maxHeight) / 2; // no range to scale across, just pick the middle
  }

  let ratio = (pages - minPages) / (maxPages - minPages);
  return minHeight + ratio * (maxHeight - minHeight);
}

window.addEventListener("resize", updateDOM);

addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 310, true, "Fantasy");
addBookToLibrary("1984", "George Orwell", 328, true, "Dystopian");
addBookToLibrary("Atomic Habits", "James Clear", 320, false, "Self-help");
addBookToLibrary("The Pragmatic Programmer", "David Thomas", 352, false, "Programming");
addBookToLibrary("Dune", "Frank Herbert", 688, true, "Sci-Fi");
addBookToLibrary("Sapiens", "Yuval Noah Harari", 443, false, "Non-fiction");
addBookToLibrary("The Little Prince", "Antoine de Saint-Exupéry", 96, true, "Fiction");
addBookToLibrary("Clean Code", "Robert C. Martin", 464, false, "Programming");
addBookToLibrary("Brave New World", "Aldous Huxley", 311, true, "Dystopian");
addBookToLibrary("The Catcher in the Rye", "J.D. Salinger", 277, false, "Fiction");
addBookToLibrary("Educated", "Tara Westover", 334, true, "Memoir");
addBookToLibrary("The Lean Startup", "Eric Ries", 336, false, "Business");
addBookToLibrary("Norwegian Wood", "Haruki Murakami", 296, true, "Fiction");
addBookToLibrary("The Design of Everyday Things", "Don Norman", 368, false, "Design");
addBookToLibrary("Crime and Punishment", "Fyodor Dostoevsky", 671, false, "Classic");
addBookToLibrary("Thinking, Fast and Slow", "Daniel Kahneman", 499, true, "Psychology");
addBookToLibrary("The Alchemist", "Paulo Coelho", 208, true, "Fiction");
addBookToLibrary("Deep Work", "Cal Newport", 296, false, "Self-help");
addBookToLibrary("Frankenstein", "Mary Shelley", 280, true, "Horror");
addBookToLibrary("You Don't Know JS", "Kyle Simpson", 278, false, "Programming");

const bookDetailDialog = document.querySelector("#book-detail-dialog");
let currentBookId = null;

shelvesContainer.addEventListener("click", (event) => {
  const book = event.target.closest(".book");
  if (!book) return;

  currentBookId = book.dataset.id;
  const matchingBook = myLibrary.find((b) => b.id === currentBookId);

  document.querySelector("#detail-title").textContent = matchingBook.title;
  document.querySelector("#detail-author").textContent = matchingBook.author;
  document.querySelector("#detail-pages").textContent = matchingBook.pages;
  document.querySelector("#detail-genre").textContent = matchingBook.genre;

  const togglePill = document.querySelector(".toggle-pill-detail");

  if (matchingBook.read) {
    togglePill.classList.add("is-read");
  } else {
    togglePill.classList.remove("is-read");
  }

  bookDetailDialog.showModal();
});

document.querySelector("#close-detail-btn").addEventListener("click", () => {
  bookDetailDialog.close();
});

document.querySelector("#remove-book-btn").addEventListener("click", () => {
  const indexToRemove = myLibrary.findIndex((book) => book.id === currentBookId);

  if (indexToRemove !== -1) {
    myLibrary.splice(indexToRemove, 1);
  }

  const scrollPosition = window.scrollY;
  updateDOM();
  window.scrollTo({ top: scrollPosition });
  bookDetailDialog.close();
});

document.querySelector(".toggle-pill-detail").addEventListener("click", () => {
  const matchingBook = myLibrary.find((b) => b.id === currentBookId);
  const togglePill = document.querySelector(".toggle-pill-detail");

  if (matchingBook.read) {
    togglePill.classList.remove("is-read");
    matchingBook.read = false;
  } else {
    togglePill.classList.add("is-read");
    matchingBook.read = true;
  }

  const scrollPosition = window.scrollY;
  updateDOM();
  window.scrollTo({ top: scrollPosition });
});



const addBookDialog = document.querySelector("#add-book-dialog");
const addBookForm = document.querySelector("#add-book-form");
const addBookSubmitBtn = addBookForm.querySelector('button[type="submit"]');

const titleInput = document.querySelector('input[name="title"]');
const authorInput = document.querySelector('input[name="author"]');
const pagesInput = document.querySelector('input[name="pages"]');
const genreInput = document.querySelector('input[name="genre"]');

shelvesContainer.addEventListener("click", (event) => {
  const lastBook = event.target.closest(".book-end");
  if (!lastBook) return;

  addBookDialog.showModal();
});

document.querySelector("#cancel-add-btn").addEventListener("click", () => {
  addBookDialog.close();
  addBookForm.reset();
});

document.querySelector(".toggle-pill-new").addEventListener("click", () => {
  const togglePill = document.querySelector(".toggle-pill-new");
  togglePill.classList.toggle("is-read");
});

addBookForm.addEventListener("input", () => {
  addBookSubmitBtn.disabled = !addBookForm.checkValidity();
});

addBookForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const title = titleInput.value;
  const author = authorInput.value;
  const pages = Number(pagesInput.value);
  const genre = genreInput.value;
  const read = document.querySelector(".toggle-pill-new").classList.contains("is-read");

  const scrollPosition = window.scrollY;
  addBookToLibrary(title, author, pages, read, genre);
  window.scrollTo({ top: scrollPosition });

  addBookDialog.close();
  addBookForm.reset();
});

function preventScrollJump() {
  window.scrollTo({ top: window.scrollY });
}

bookDetailDialog.addEventListener("close", preventScrollJump);
addBookDialog.addEventListener("close", preventScrollJump);