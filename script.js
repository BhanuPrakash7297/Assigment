const books = [
    {
        cover: "images/image1.jpg",
        author: "The Sadhguru",
        genre: "Non Fiction",
        pages: 150
    },
    {
        cover: "images/book2.jpg",
        author: "Robin Sharma",
        genre: "Non-fiction",
        pages: 170
    },
    {
        cover: "images/book3.jpg",
        author: "Robin Sharma",
        genre: "Non Fiction",
        pages: 180
    },
    {
        cover: "images/book4.jpg",
        author: "Josheph Nguyen",
        genre: "Non Fiction",
        pages: 150
    },
    {
        cover: "images/book5.jpg",
        author: "George Andrew",
        genre: "Non Fiction",
        pages: 280
    },
    {
        cover: "images/book6.jpg",
        author: "Darious Farox",
        genre: "Non Fiction",
        pages: 260
    },
    {
        cover: "images/image7.jpg",
        author: "Robin Sharma",
        genre: "Non Fiction",
        pages: 220
    },
    {
        cover: "images/image8.jpg",
        author: "Robin Sharma",
        genre: "Fiction",
        pages: 275
    },
    {
        cover: "images/image9.jpg",
        author: "Robin Sharma",
        genre: "Non Fiction",
        pages: 325
    },
    {
        cover: "images/image10.jpg",
        author: "Nick Trenton",
        genre: "Fiction",
        pages: 385
    },
    {
        cover: "images/image11.jpg",
        author: "NickTrenton",
        genre: "Non Fiction",
        pages: 398
    },
    {
        cover: "images/image12.jpg",
        author: "NickTrenton",
        genre: "Fiction",
        pages: 400
    },
    {
        cover: "images/image13.jpg",
        author: "Sibeal Pounder",
        genre: "Mystery",
        pages: 230
    },
    {
        cover: "images/image14.jpg",
        author: "J Sai Deepak",
        genre: "Non Fiction",
        pages: 500
    },
    {
        cover: "images/image15.jpg",
        author: "J Sai Deepak",
        genre: "Non Fiction",
        pages: 290
    },
    {
        cover: "images/image16.jpg",
        author: "Rajarshi Ranajan",
        genre: "Mystery",
        pages: 120
    },
    {
        cover: "images/image17.jpg",
        author: "Om Swami",
        genre: "Mystery",
        pages: 230
    },
    {
        cover: "images/image18.jpg",
        author: "Om Swami",
        genre: "Mystery",
        pages: 245
    },
    {
        cover: "images/image19.jpg",
        author: "Om Swami",
        genre: "Mystery",
        pages: 345
    },
    {
        cover: "images/image20.jpg",
        author: "Om Swami",
        genre: "Mystery",
        pages: 290
    },

];

let currentIndex = 0;

const bookCover = document.querySelector('.book-cover');
const authorElement = document.querySelector('.author');
const genreElement = document.querySelector('.genre');
const pagesElement = document.querySelector('.pages');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

function displayBook(index) {
    const book = books[index];
    bookCover.src = book.cover;
    authorElement.textContent = "Author: " + book.author;
    genreElement.textContent = "Genre: " + book.genre;
    pagesElement.textContent = "Pages: " + book.pages;
}

displayBook(currentIndex);

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + books.length) % books.length;
    displayBook(currentIndex);
});

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % books.length;
    displayBook(currentIndex);
});
