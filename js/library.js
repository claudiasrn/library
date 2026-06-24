const spineColors = [
  {
    name: "brickRed",
    bodyDark: "#4a1f17",
    bodyMedium: "#7a3327",
    bodyLight: "#a8593f",
    bindingDark: "#8a611c",
    bindingMedium: "#c08a2e",
    bindingLight: "#dba84f",
    text: "#f3e6d8",
  },
  {
    name: "forestGreen",
    bodyDark: "#1c3f37",
    bodyMedium: "#2f6b5e",
    bodyLight: "#4f9482",
    bindingDark: "#5e2640",
    bindingMedium: "#9c3f5e",
    bindingLight: "#c46787",
    text: "#f3e6d8",
  },
  {
    name: "navyBlue",
    bodyDark: "#23315a",
    bodyMedium: "#3b4f8a",
    bodyLight: "#5f78b8",
    bindingDark: "#7a3618",
    bindingMedium: "#b5552c",
    bindingLight: "#d68257",
    text: "#f3e6d8",
  },
  {
    name: "plum",
    bodyDark: "#5e2640",
    bodyMedium: "#9c3f5e",
    bodyLight: "#c46787",
    bindingDark: "#163838",
    bindingMedium: "#2a6b6b",
    bindingLight: "#4f9999",
    text: "#f3e6d8",
  },
  {
    name: "mustard",
    bodyDark: "#8a611c",
    bodyMedium: "#c08a2e",
    bodyLight: "#dba84f",
    bindingDark: "#23315a",
    bindingMedium: "#3b4f8a",
    bindingLight: "#5f78b8",
    text: "#3a2a0c",
  },
  {
    name: "olive",
    bodyDark: "#2c4022",
    bodyMedium: "#4a6b3a",
    bodyLight: "#6f9457",
    bindingDark: "#3f141e",
    bindingMedium: "#6b2333",
    bindingLight: "#9c4a5c",
    text: "#f3e6d8",
  },
  {
    name: "teal",
    bodyDark: "#163838",
    bodyMedium: "#2a6b6b",
    bodyLight: "#4f9999",
    bindingDark: "#4a1f17",
    bindingMedium: "#7a3327",
    bindingLight: "#a8593f",
    text: "#f3e6d8",
  },
  {
    name: "burgundy",
    bodyDark: "#3f141e",
    bodyMedium: "#6b2333",
    bodyLight: "#9c4a5c",
    bindingDark: "#2c4022",
    bindingMedium: "#4a6b3a",
    bindingLight: "#6f9457",
    text: "#f3e6d8",
  },
  {
    name: "slateBlueGray",
    bodyDark: "#2e3645",
    bodyMedium: "#4f5b73",
    bodyLight: "#7c879e",
    bindingDark: "#8a611c",
    bindingMedium: "#c08a2e",
    bindingLight: "#dba84f",
    text: "#f3e6d8",
  },
  {
    name: "terracotta",
    bodyDark: "#7a3618",
    bodyMedium: "#b5552c",
    bodyLight: "#d68257",
    bindingDark: "#2e3645",
    bindingMedium: "#4f5b73",
    bindingLight: "#7c879e",
    text: "#f3e6d8",
  },
];

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



