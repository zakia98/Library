let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read
};

theHobbit = new Book("The Hobbit", "JRR Tolkien", 295, false)
theColorOfMagic = new Book("The Color of Magic", "Terry Pratchett", 300, true)
guardsGuards = new Book("Guards! Guards!", "Terry Pratchett", 267, true)



function addBookToLibrary(book) {
    myLibrary.push(book);
};


function createCard(book) {
    let cardsContainer = document.querySelector('#cards-container')
    let card = document.createElement("div")
    let container = document.createElement('div')
    let titleInfo = document.createElement('h4')
    let authorInfo = document.createElement('p')
    let pagesInfo = document.createElement('p')
    let readStatus = document.createElement('button')
    addClasses(card, container, titleInfo, authorInfo,
        pagesInfo, readStatus)
    addInfo(titleInfo, authorInfo, pagesInfo, readStatus, book) 
    card = constructCard(cardsContainer, card, container, titleInfo, authorInfo,
        pagesInfo, readStatus)
    
    cardsContainer.appendChild(card)
    
}

function addInfo(titleInfo, authorInfo, pagesInfo, readStatus, book) {
    titleInfo.textContent = book.title;
    authorInfo.textContent = book.author;
    pagesInfo.textContent = `Pages: ${book.pages}`;
    if (book.read == true) {
        readStatus.textContent = 'Done it!'
    } else {
        readStatus.textContent = 'Not read yet!'
    }
    
}

function addClasses(card, container, titleInfo, authorInfo, pagesInfo,
    readStatus) {
    card.classList.add("card");
    container.classList.add("container");
    titleInfo.classList.add('title')
    authorInfo.classList.add('author')
    pagesInfo.classList.add('pages')
    readStatus.classList.add('read')
}

function constructCard(cardsContainer, card, container, titleInfo, authorInfo,
    pagesInfo, readStatus) {
        container.appendChild(titleInfo)
        container.appendChild(authorInfo)
        container.appendChild(pagesInfo)
        container.appendChild(readStatus)
        card.appendChild(container)
        return card   
    }



addBookToLibrary(guardsGuards)
addBookToLibrary(theHobbit)
addBookToLibrary(theColorOfMagic)
console.log(myLibrary)

for (i =0 ; i < myLibrary.length; i++) {
    createCard(myLibrary[i])
}

