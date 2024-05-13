"use strict"

//DO/WHILE is like the WHILE loop except the condition is checked at the bottom of the loop

//SYNTAX
// do {
//     // code to be executed
//    } while (condition);

//EXAMPLE

let num = 1;
let i = 1;

do {
 num = num * 2;
 console.log(num);
 i++;
} 

while (i < 5)

// OUTPUT
// 2 (i is 1 at the top of the loop / i became 2 at the bottom)
// 4 (i is 2 at the top of the loop / i became 3 at the bottom)
// 8 (i is 3 at the top of the loop / i became 4 at the bottom)
// 16 (i is 4 at the top of the loop / i became 5 at the bottom)