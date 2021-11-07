
if (!localStorage.getItem('myLibrary')) {
    myLibrary = []
} else {
    myLibrary = JSON.parse(localStorage.getItem("myLibrary")|| "[]")
}


function Book(title, author, pages, read = "false") {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
};

function saveToStorage() {
    localStorage.setItem('myLibrary', JSON.stringify(myLibrary))
}




function addBookToLibrary(book) {

    myLibrary.push(book);
};


function createCard(book, i) {
    let cardsContainer = document.querySelector('#cards-container')
    let card = document.createElement("div")
    card.setAttribute('data-id', i)
    let container = document.createElement('div')
    let titleInfo = document.createElement('h4')
    let authorInfo = document.createElement('p')
    let pagesInfo = document.createElement('p')
    let readStatus = document.createElement('button')
    let deleteBtn = document.createElement('button')
    addClasses(card, container, titleInfo, authorInfo,
        pagesInfo, readStatus, deleteBtn)
    addInfo(titleInfo, authorInfo, pagesInfo, readStatus, book, deleteBtn) 
    card = constructCard(cardsContainer, card, container, titleInfo, authorInfo,
        pagesInfo, readStatus, deleteBtn)
    
    cardsContainer.appendChild(card)
    
}

function addInfo(titleInfo, authorInfo, pagesInfo, readStatus, book,
    deleteBtn) {
    titleInfo.textContent = book.title;
    authorInfo.textContent = book.author;
    pagesInfo.textContent = `Pages: ${book.pages}`;;
    deleteBtn.textContent = "Delete"
    if (book.read == true) {
        readStatus.textContent = 'Done it!'
        readStatus.classList.add('read')
    } else {
        readStatus.textContent = 'Not read yet!'
        readStatus.classList.add('notread')
    }
    
}

function addClasses(card, container, titleInfo, authorInfo, pagesInfo,
    readStatus, deleteBtn) {
    card.classList.add("card");
    container.classList.add("container");
    titleInfo.classList.add('title')
    authorInfo.classList.add('author')
    pagesInfo.classList.add('pages')
    readStatus.classList.add('readStatusBtn')
    deleteBtn.classList.add('delete');
    
}

function constructCard(cardsContainer, card, container, titleInfo, authorInfo,
    pagesInfo, readStatus, deleteBtn) {
        container.appendChild(titleInfo)
        container.appendChild(authorInfo)
        container.appendChild(pagesInfo)
        container.appendChild(readStatus)
        container.appendChild(deleteBtn)
        card.appendChild(container)
        return card   
    }

function openForm() {
    popupForm.style.display = "block"
}

function closeForm() {
    popupForm.style.display = "none"
}

function handleForm(event) {
    event.preventDefault();
    book = new Book(BookTitle.value, authorName.value, 
        pagesNo.value, readStatus.checked)
    console.log(book)
    addBookToLibrary(book)
    createCard(book, myLibrary.length + 1)
    saveToStorage()
    const deleteBtns = document.querySelectorAll('.delete')
    deleteBtns.forEach(deleteBtn => deleteBtn.addEventListener('click', deleteCard))
    readStatusBtns.forEach(readButtons => readButtons.addEventListener('click', changeReadStatus))
    closeForm();
}

function deleteCard() {
    id = this.parentElement.parentElement.dataset.id
    myLibrary.splice(id, 1)
    this.parentElement.parentElement.remove()
    saveToStorage()
    
}

function  changeReadStatus() {
    if (this.classList.contains('read') == true) {
        this.textContent = "Not read yet!"
        this.classList.remove('read')
        this.classList.add('notread')
    } else {
        this.textContent = "Done it!"
        this.classList.remove('notread')
        this.classList.add('read')
    }
}

for (i =0 ; i < myLibrary.length; i++) {
    cards = createCard(myLibrary[i], i)
}

const addBook = document.querySelector('#add-book')
const closeFormBtn = document.querySelector('.btn.cancel')
const popupForm = document.querySelector('#form')
const submitForm = document.querySelector('.btn.submit')
const BookTitle = document.querySelector('#book-title')
const authorName = document.querySelector("#author-name")
const pagesNo= document.querySelector('#pages-no')
const readStatus = document.querySelector('#read-status')
const deleteBtns = document.querySelectorAll('.delete')
const readStatusBtns = document.querySelectorAll('.readStatusBtn')

readStatusBtns.forEach(readButtons => readButtons.addEventListener('click', changeReadStatus))

deleteBtns.forEach(deleteBtn => 
    deleteBtn.addEventListener('click', deleteCard))

addBook.addEventListener('click', openForm)
closeFormBtn.addEventListener('click', closeForm)
submitForm.addEventListener('click', handleForm) 