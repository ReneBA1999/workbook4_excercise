"use strict"

//The FOR LOOP is typically considered a "counting " loop
//It has 3 parts separated by semi colons(;)
//- Code that executes befor the loop begin
//- A condition that must be true for the loop to keep executing
//- code that runs at the bottom of each itteration

//SYTNTAX
// for (part 1; part 2; part 3) {
     // code to be executed
//    }

//EXAMPLE

// let num = 1;
// let i;

// for (i = 0; i < 5; i++) {
//  num = num * 2;
//  console.log(num);
// }

// OUTPUT
// 2 (i is 0 at the top of the loop)
// 4 (i is 1 at the top of the loop)
// 8 (i is 2 at the top of the loop)
// 16 (i is 3 at the top of the loop)
// 32 (i is 4 at the top of the loop)

//In this example we started i at 0 and added 1 to it each time through the loop but that is not a reqiurement


//The loop variable can be scoped to the for by defining it in the 'part 1' portion of the loop
let num = 1;

for (let i = 0; i < 5; i++) {
 num = num * 2;
 console.log(num);
}
// OUTPUT
// 2 (i is 0 at the top of the loop)
// 4 (i is 1 at the top of the loop)
// 8 (i is 2 at the top of the loop)
// 16 (i is 3 at the top of the loop)
// 32 (i is 4 at the top of the loop)