"use strict"

//collating sequence of letters is such that.
'A' < 'Z' < 'a' < 'z'

//If you want to sort these names so they will come out in a case insensitive way , your should convert the text to the same case and then do the comparison

//EXAMPLE
let names = ["zeph", "anderson", "Zachary", "Adam"];
names.sort(function (a,b) {
 let aUpper = a.toUpperCase();
 let bUpper = b.toUpperCase();
 if (aUpper < bUpper) return -1;
 else if (aUpper == bUpper) return 0;
 else return 1;
}); // Sorts the array in a case-insensitive way
let numNames = names.length;
for(let i = 0; i < numNames; i++) {
 console.log(names[i]);
}
// OUTPUT
// Adam
// anderson
// Zachary
// zeph