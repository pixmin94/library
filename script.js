var myLibrary = [
    {title: 'Hello', author: 'World', pages: 100, completed: false},
    {title: 'Cookbook', author: 'Chako', pages: 30, completed: false}
];

function Book(title, author, pages, completed) {
  this.title = title
  this.author = author
  this.pages = pages
  this.completed = false
}

function addBookToLibrary() {
    //query container that will be displaying the cards
    const bookList = document.querySelector('#books-grid');

    //loop through library array and create each card
    for (var i = 0; i < myLibrary.length; i++) {
        const bookCard = document.createElement('div');
        bookCard.classList.add('card');
        bookList.appendChild(bookCard);
        
        // title
        const bookTitle = document.createElement('h4');
        bookTitle.innerHTML = '<b>' + myLibrary[i].title + '</b>';
        bookCard.appendChild(bookTitle);

        // author
        const bookAuthor = document.createElement('p');
        bookAuthor.textContent = myLibrary[i].author;
        bookCard.appendChild(bookAuthor);

        // pages
        const bookPages = document.createElement('p');
        bookPages.textContent = myLibrary[i].pages;
        bookCard.appendChild(bookPages);
    }
}

addBookToLibrary();
