"use strict"

//You can shorten the comparison function for a numeric sort by taking advantage of the math

function compareAscendingNumber(a, b) {
    // if a is smaller, a-b is negative so don't swap!
    return b - a;
   }
   let numbers = [3, 27, 400, 1, 111, 5];
   numbers.sort(compareAscendingNumber);
    console.log(numbers.sort(compareAscendingNumber));
   // Results: 1, 3, 5, 27, 111, 400

   //If your want a descending number sort() reverse logic
   
   //SORTING AN ARRAY OF OBJECTS

   //This same technique can be applied to an array of objects
   // - However you must compare a property or properties of objects

   //EXAMPLE

   let products = [
    {prodId: 2, item: "Notepads (12 pk)", price: 12.29},
    {prodId: 12, item: "Black Pens (12 pk)", price: 5.70},
    {prodId: 22, item: "Stapler", price: 12.79}
   ];
   products.sort(function(a, b){
    if (a.item < b.item) return -1;
    else if (a.item == b.item) return 0;
    else return 1;
   });
   let numProducts = products.length;
   for(let i = 0; i < numProducts; i++) {
    console.log(products[i].item + 
    " $" + products[i].price.toFixed(2));
   }
//    OUTPUT
//    Black Pens (12 pk) $5.70}
//    Notepads (12 pk) $12.29
//    Stapler $12.79