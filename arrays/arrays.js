"use strict"

//A javascript array is used to store mulitple values in a single variable

// EXAMPLE
let kids = ["Natalie", "Brittany", "Zachary"];

//To access an element in an array, you use a subscript representing representing the items position in an array
// - subscripts in javascript are 0 based


//EXample
let oldest = kids[0];
let middle = kids[1];
let youngest = kids[2];

//You can also use a variable as a subscript
// -This is where loops get interesting


// each time thru the loop kids[i] references a different
// element in the array
for(let i = 0; i < 3; i++) {
 console.log(kids[i]);
}

//You can use the length property to get the number of elements in an array
// -this keeps you from hard coding the size of an array and then getting in a jam because it changes for some reason

//EXAMPLE

for(let i = 0; i < kids.length; i++) {
 console.log(kids[i]); 
}

//BEST PRACTICE: Store the length of an array in a variable if you use it in a loop
// -this keeps the javascript engine from having to recalculate the length each time through an array

//EXAMPLE

let numKids = kids.length;
for(let i = 0; i < numKids; i++) {
 console.log(kids[i]);
}

//JAVASCRPT arrays can store any type of data
//EXAMPLE

// an array that stores all numbers
let mileAgeLog = [313, 328, 349, 287, 301];
// an array that stores all dates
let importantDates = [
 new Date(1958, 8, 5),
 new Date(1976, 4, 30),
 new Date(2009, 9, 10)
 ];
// an array that stores objects
let menu = [ 
 {item: "Hamburger", price: 6.95},
 {item: "Cheeseburger", price: 7.95},
 {item: "Hot dog", price: 4.95}
 ];
console.log(menu);

//ARRAYS can even store a collection of different data types
//EXAMPLE

let lunch = ["Steak fajitas", 9.95, "Sweet Tea", 2.79];
console.log(lunch);

//IN Javascript you can pass an array to a function
// -You can also return an array from a funnction

// returns an array of names
function getKids() {
    let kids = ["Natalie", "Brittany", "Zachary"];
    return kids;
   }
   // displays data in an array of names
   function displayKids(kids) {
    let numKids = kids.length;
    for(let i = 0; i < numKids; i++) {
    console.log(kids[i]);
    }
   }
   let ourKids = getKids(); // returns an array
   displayKids(ourKids); // pass an array

   //LOOPING THROUGH AN ARRAY OF OBJECTS
   // -When you loop through an array of objects , 
   //you must use the subscript after the array name and then the property name after after the subscript

   function getMealCost(orders) {
    let sum = 0;
    let numOrders = orders.length;
    for(let i = 0; i < numOrders; i++) {
    sum += orders[i].price;
    }
    return sum;
   }
   let myOrder = [ 
    {item: "Chicken Tacos", price: 8.95},
    {item: "Guacamole", price: 2.85},
    {item: "Sweet Tea", price: 2.75}
   ];
   let yourOrder = [ 
    {item: "Hamburger", price: 6.95},
    {item: "Fries", price: 2.25},
    {item: "Sweet Tea", price: 2.75},
    {item: "Fried Apple Pie", price: 4.95}
   ];
   let mealCost = getMealCost(myOrder);
   let totalWithTip = mealCost * 1.2;
   console.log("My meal costs " + totalWithTip.toFixed(2)); 
   mealCost = getMealCost(yourOrder);
   totalWithTip = mealCost * 1.2;
   console.log("Your meal costs " + totalWithTip.toFixed(2));

