const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(Book) {
    myLibrary.push(Book);
}

// Get container selector//
const container = document.querySelector("#container");

//function to create book card in DOM
function addBookToDOM(book) {
    //create card element and sub elements;
    const card = document.createElement("div");
    const cardTitle = document.createElement("span");
    const cardAuthor = document.createElement("span");
    const cardPages = document.createElement("span");
    const cardRead = document.createElement("span");

    //populate card//
    cardTitle.innerHTML = `Title: ${book.title}`;
    cardAuthor.innerHTML = `Author: ${book.author}`;
    cardPages.innerHTML = `Pages: ${book.pages}`;
    if (book.read === false) {
        cardRead.innerHTML = "Current Status: Read";
    }
    else {
        cardRead.innerHTML = "Current Status: Not read";
    }

    //add items to card//
    card.append(cardTitle);
    card.append(cardAuthor);
    card.append(cardPages);
    card.append(cardRead);

    card.classList.add("bookCard");
    return card;
}

//dummy books//
addBookToLibrary(new Book("green", "mayd", 13, true));
addBookToLibrary(new Book("blue", "ray", 156, false));
addBookToLibrary(new Book("wert", "steve", 78, false));
addBookToLibrary(new Book("blue", "ray", 156, false));

//Loop through mylibrary and add each book to DOM//
myLibrary.forEach((item) => {
    container.append(addBookToDOM(item));
});

//New Book button//

const newButton = document.querySelector("#newBook");