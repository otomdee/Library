const myLibrary = [];
let index = 0;

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.index = 0;
}

function addBookToLibrary(Book) {
    myLibrary.push(Book);
    index++;
    Book.index = index;
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
    const cardReadChange = document.createElement("button");
    const cardRemove = document.createElement("button");

    //populate card//
    cardTitle.innerHTML = `Title: ${book.title}`;
    cardAuthor.innerHTML = `Author: ${book.author}`;
    cardPages.innerHTML = `Pages: ${book.pages}`;
    cardReadChange.innerHTML = "Change Status";
    if (book.read === true) {
        cardRead.innerHTML = "Status: Read";
    }
    else {
        cardRead.innerHTML = "Status: Not read";
    }
    cardRemove.innerHTML = "Remove";

    //add items to card//
    card.append(cardTitle);
    card.append(cardAuthor);
    card.append(cardPages);
    card.append(cardRead);
    card.append(cardReadChange);
    card.append(cardRemove);
    //removeBook button
    cardRemove.classList.add("removeBtn");
    cardRemove.addEventListener("click", () => {
        myLibrary.splice((book.index - 1), 1);
        card.remove();
    })
    //changeReadStatus button
    cardReadChange.classList.add("changeReadBtn");
    cardReadChange.addEventListener("click", () => {
        if (book.read === true) {
            book.read = false;
            cardRead.innerHTML = "Status: Not read";
        }
        else {
            book.read = true;
            cardRead.innerHTML = "Status: Read";
        }
    })

    card.classList.add("bookCard");
    return card;
}

//dummy books//
addBookToLibrary(new Book("Harry Potter", "J. K. Rowling", 500, true));
addBookToLibrary(new Book("blue", "ray", 156, false));

myLibrary.forEach((item) => {
    container.append(addBookToDOM(item));
});

//New Book button//
const newBookButton = document.querySelector("#newBook");
const dialog = document.querySelector("#bookDialog");
newBookButton.addEventListener("click", () => {
    dialog.showModal();
})
//click outside modal to close//
dialog.addEventListener("click", e => {
    const dialogDimensions = dialog.getBoundingClientRect()
    if (
      e.clientX < dialogDimensions.left ||
      e.clientX > dialogDimensions.right ||
      e.clientY < dialogDimensions.top ||
      e.clientY > dialogDimensions.bottom
    ) {
      dialog.close()
    }
  })

//recieve book input from form//
const form = document.querySelector("#bookForm");
form.addEventListener("submit", (event) => {
    event.preventDefault();

    //create book from current form values//
    const title = document.querySelector("#titleInput");
    const author = document.querySelector("#authorInput");
    const pages = document.querySelector("#pagesInput");
    const status = document.querySelector("#statusInput");

    const book = new Book(title.value, author.value, pages.value, status.checked);

    addBookToLibrary(book);
    container.append(addBookToDOM(book));
    form.reset();
    dialog.close();
})