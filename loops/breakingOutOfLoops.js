"use strict"

//BREAKING OUT OF A LOOP
//In any of the loops weve learned so far , You can use a break statement to exit the loop

//EXAMPLE

let num = 1;
let i = 1;

while (i < 100) {
 num = num * 2;
 if (num >= 100) break;
 i++;
 console.log(num);
}

//IT can be useful when you are searching a list for something and find it!
