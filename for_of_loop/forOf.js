"use strict"

//ES6 released the for..of statement, and its specifaally designed to loop through arrays

//SYNTAX

//During each iteration of the loop , someVariable references the next element in someArray
for(someVariable of someArray) {
    // use someVariable
   }

//    EXAMPLE
let kids = ["Natalie", "Brittany", "Zachary"];
for (let value of kids) {
 console.log(value);
}
// OUTPUT
// Natalie
// Brittany
// Zachary