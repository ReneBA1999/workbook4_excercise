"use strict"

//the sort() method sorts an array alphabetically
// -By the default the method sorts the values in ascending order as strings

//EXAMPLE

// let kids = ["Natalie", "Brittany", "Zachary"];
// kids.sort(); // Sorts the array
// let numKids = kids.length;
// for(let i = 0; i < numKids; i++) {
//  console.log(kids[i]);
// }

//THIS DOESNT WORK WELL IF YOUR ARRAY CONTAINS NUMBERS
//EXAMPLE
// let numbers = [3, 27, 400, 1, 111, 5];
// console.log(numbers.sort());
 
// Results: 1, 111, 27, 3, 400, 5

//To sort number arrays you have to provide a helper that assists the sort method

//You can use named function and pass the function  as an argument to the sort method

//EXAMPLE 
//Sorts numbers in an array in ascending order

// function compareAscendingNumber(a, b) {
//     if (a < b) return -1; // right order
//     else if (a == b) return 0; // same values
//     else return 1; // swap, wrong order
//    }
//    let numbers = [3, 27, 400, 1, 111, 5];
//    numbers.sort(compareAscendingNumber);
//    console.log(numbers.sort(compareAscendingNumber));
    
   // Results: 1, 3, 5, 27, 111, 400

   //You can also use anonymous functions and pass the fucntion expression

//    let numbers = [3, 27, 400, 1, 111, 5];
// numbers.sort(function(a, b){
//  if (a < b) return -1;
//  else if (a == b) return 0;
//  else return 1;
// });
// console.log(numbers);
 // Results: [1, 3, 5, 27, 111, 400]

 //If you want descending numeric sort() reverse your logic
 // -swap if a < b

 let numbers = [3, 27, 400, 1, 111, 5];
numbers.sort(function(a, b){
 if (a > b) return -1; // right order
 else if (a == b) return 0;
 else return 1; // swap, wrong order
});
console.log(numbers);

