"use strict"

let books = [
    {
        title: 'The Thief Lord',
        pages: 345,
        author: 'Cornelia Funke',
        genre: ['Fantasy', 'Adventure'],
        isbn: '978-0545227704',
        price: 14.99
    },
    {
        title: 'The Go-Giver',
        pages: 123,
        author: 'Bob Burg',
        genre: ['self help','psychology'],  // No genre provided; initialize with empty array
        isbn: '' ,   // No ISBN provided; initialize with an empty string
        price: 15.99
    },
    {
        title: 'Atomic Habits',
        pages: 320,
        author: "James Clear",
        genre: ["Self Help", "Personal Development"],
        price: 13.99
    }
    
];
// console.log("The title of the first book is " + books[0].title);
// console.log("The author of the third book is " + books[2].author);
// console.log(books[1].genre[1]);
// //Temperal literal string `
// console.log(`Genre of the second book: ${books[1].title} is ${books[1].genre[1]}`);

console.log(`The title of the second book is  ${books[1].title}. The price is ${books[1].price}`);
console.log(`The title of the first two books are ${books[0].title} and ${books[1].title}. The price is ${books[0].price} for ${books[0].title} and
${books[1].price} for ${books[1].title}`);