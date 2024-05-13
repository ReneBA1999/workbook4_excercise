"use strict"

// The exercise involves simulating a countdown to a launch event. You'll write a program that counts down from 10 to 1, and at each number,
// it should print a message. When the countdown reaches 1, it should print a special message indicating the launch.

// Exercise Instructions:

// Initialize a variable countdown with the value 10.
// Use a while loop to control the countdown.
// Inside the loop, print the message "Countdown: X", replacing X with the current countdown number.
// Decrement the countdown variable by 1 each time through the loop.
// When the countdown reaches 1, print "Countdown: 1. Ready for launch!".
// Ensure the loop stops after printing the launch message.

// let countdown = 10;
// while (countdown  > 1) { // 
//   console.log(`Countdown: ${countdown}`);
//   countdown --; 
 
  
//   if(countdown == 1) {
//   }
// }
// console.log(`Countdown: 1 . Ready for launch!`);

//DO WHILE Here is a do-while example:

let counter = 10;

do {
  console.log(`Countdown: ${counter}`);
  counter--; // decrement the counter by 1
} while (counter > 0);

console.log("Countdown: 0. Ready for launch");



