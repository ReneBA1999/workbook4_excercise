"use strict"

// Array of movie objects
// const movies = [
//     { title: "The Shawshank Redemption", year: 1994 },
//     { title: "The Godfather", year: 1972 },
//     { title: "The Dark Knight", year: 2008 },
//     { title: "12 Angry Men", year: 1957 },
//     { title: "Schindler's List", year: 1993 },
//     { title: "Pulp Fiction", year: 1994 }
//   ];
  
//   // Set up an index for while loop
//   let index = 0;
  
//   // Use a while loop to process the array

// let amountOfMovies = movies.length;
// console.log(`Movies: ${amountOfMovies}`);
//   while (index < amountOfMovies) {
//     const movie = movies[index];
//     if (movie.year < 2000) { // Check if the movie was released before the year 2000
//       console.log(`${movie.title} was released in ${movie.year}.`);
//     }
//     index++; // Increment index to move to the next movie
//   }

  
//   Create a JavaScript function that uses a while loop to iterate through an array of book objects. 
// Each book object contains the properties title, author, and year. The function should print each book's title and whether it 
// was published in the 21st century.

// Requirements:

// Book Array: Define an array named books containing several objects. Each object should have properties: title, author, and year.
// Function: Write a function named checkPublicationCentury that processes the books array.
// While Loop: Use a while loop to traverse the array.
// If Statement: Inside the loop, use an if statement to check if the book was published in or after the year 2000.
// Print Output: For each book, print a message in the console stating the title of the book followed by 
// "published in the 21st century" or "not published in the 21st century", based on the year.

// Define an array of book objects
const books = [
    { title: "The Hunger Games", author:"Suzzane Collin", year: 2008 },
    { title:"Holes", author:"Louis Sachar", year: 1998 },
    { title:"Harry Potter and the deathly hallows", author:"J.K Rowling", year: 2007}
];

// Function to check publication century of books
function checkPublicationCentury(books) {
    let i = 0;
    while (i < books.length) {
        // Get the current book
        let book = books[i];
        
        // Check if the book was published in the 21st century
        if (book.year >= 2000) {
            console.log(`${book.title} - published in the 21st century`);
        } else {
            console.log(`${book.title} - not published in the 21st century`);
        }
        
        // Move to the next book
        i++;
    }
}
checkPublicationCentury(books);