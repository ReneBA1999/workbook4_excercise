"use strict"

//There are to functions that make searching an array easy

//indexOf() searches the array for an element and returns its position
//Example
//This code searches the array from the beginning

let teams = ["Red Sox", "Rangers", "Blue Jays",
 "Astros", "White Sox", "Rangers"];
let index = teams.indexOf("Rangers"); // returns 1
if (index == -1)
 console.log("Item not found");
else
 console.log("Item at position: " + index);
// If you pass a strat position, indexOf() searches from that position rather than the start of the array

//Example
//This code searches the list from position 3

// let teams = ["Red Sox", "Rangers", "Blue Jays",
//  "Astros", "White Sox", "Rangers"];
// let index = teams.indexOf("Rangers", 3);
// if (index == -1)
//  console.log("Item not found");
// else
//  console.log("Item at position: " + index)

// lastIndexOf() It searches the array for an element starting at the end and returns its position

let teams1 = ["Red Sox", "Rangers", "Blue Jays",
 "Astros", "White Sox", "Rangers"];
let firstIndex = teams1.indexOf("Rangers"); // returns 1
let lastIndex = teams1.lastIndexOf("Rangers"); // returns 5

console.log(`Item at ${firstIndex} `);
console.log(`Item at ${lastIndex} `);

