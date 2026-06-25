# Library
 
A digital bookshelf — built as part of [The Odin Project](https://www.theodinproject.com/) curriculum. Instead of displaying books as plain cards or a table, this project renders each book as a stylized book spine sitting on a wooden shelf, complete with color-coded bindings, page-count-driven height, and a read-status bookmark icon.
 
---
 
## Features
 
- **Dynamic shelf rendering** — books are stored as data first, then rendered to the DOM from that data. Adding, removing, or editing a book re-renders the whole shelf from the current state of the array.
- **Responsive layout** — the number of books per shelf row recalculates on window resize, so the shelf reflows correctly at any screen size.
- **Spine design system** — each book is assigned one of 10 color palettes (body, binding accent, and bookmark color), generated procedurally rather than hand-picked per book.
- **Page-count-driven height** — taller books (more pages) get taller spines, scaled proportionally between the shortest and tallest book currently in the library.
- **Title/author auto-sizing** — font size scales down for longer titles and author names, with truncation (`…`) for anything that still doesn't fit.
- **Two themed dialogs**, styled like an old library checkout card:
  - **Book details** — view a book's info, toggle its read status, or remove it from the library.
  - **Add new book** — a form with live validation (the submit button stays disabled until all required fields are valid).
- **Persistent, stable IDs** — every book gets a `crypto.randomUUID()` on creation, used to reliably match DOM elements back to their data (instead of relying on array position, which breaks when books are removed or reordered).
- **Accessible interaction details** — custom focus outlines matching the site's theme, keyboard-friendly toggle controls, and scroll-position preservation when dialogs close or the shelf re-renders.
## Built With
 
- HTML5 (`<dialog>` element for modals)
- CSS3 (CSS Grid, Flexbox, custom properties, container query units)
- Vanilla JavaScript (no frameworks or libraries)
- [Tabler Icons](https://tabler.io/icons) for the bookmark icon
## Project Structure
 
```
├── index.html
├── css/
│   └── style.css
└── js/
    └── library.js
```
 
## How It Works
 
- `Book` is a constructor that creates a book object with a unique `id`, title, author, page count, read status, genre, and an assigned color palette index.
- `addBookToLibrary()` creates a new `Book` and pushes it into the `myLibrary` array, then triggers a re-render.
- `updateDOM()` clears the shelf container and rebuilds every shelf and book spine from scratch based on the current contents of `myLibrary` — the DOM is always just a reflection of the data, never the source of truth itself.
- Clicking a book spine opens the detail dialog (via event delegation on the shelf container, so newly rendered books are automatically clickable without re-attaching listeners).
- Clicking the dashed "add book" slot at the end of a shelf opens the add-book form dialog.
## What I Learned
 
This project was less about the JavaScript fundamentals (constructors, arrays, DOM manipulation) and more about:
- Separating data from display as genuinely distinct responsibilities
- Debugging real layout issues with CSS Grid (`fr` unit rounding, implicit vs. explicit grid tracks, nested grid height inheritance)
- Working with the `<dialog>` element, including the difference between `.show()` and `.showModal()`
- CSS specificity and inheritance gotchas (browser default styles being silently overridden, focus-ring styling, `border` shorthand syntax)
## Acknowledgments
 
This project follows the **Library** assignment from [The Odin Project](https://www.theodinproject.com/)'s Full Stack JavaScript curriculum.