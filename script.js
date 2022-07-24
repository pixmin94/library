var myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
}



function addBookToLibrary() {
    var title = document.getElementById("title").value;
    var author = document.getElementById("author").value;
    var pages = document.getElementById("pages").value;
    var read = document.getElementById("read").value;
    
    newBook = new Book(title, author, pages, read); 
    myLibrary.push(newBook);
    console.log(myLibrary);
    displayBooks();
}

// get books from local storage
if (localStorage.getItem('books') === null) {
    myLibrary = [];
  } else {
    const booksFromStorage = JSON.parse(localStorage.getItem('books'));
    myLibrary = booksFromStorage;
  }

function displayBooks() {
    localStorage.setItem('books', JSON.stringify(myLibrary));
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

        // read
        const bookRead = document.createElement('p');
        if (myLibrary[i].read == "on") {
            bookRead.textContent = 'Read!';
        } else {
            bookRead.textContent = 'Unfinished';
        }
        bookCard.appendChild(bookRead);
    }
}

displayBooks();
