"use strict"
 
    // Declare an array of exam scores
let myScores = [92, 98, 84, 76, 89, 99, 100];

// Function to calculate the average score
function getAverage(scores) {
    let sum = 0;
    // Loop through the array and calculate the sum of all scores
    for (let i = 0; i < scores.length; i++) {
        sum += scores[i];
    }
    // Calculate the average by dividing the sum by the length of the array
    let average = sum / scores.length.toFixed(2);
    return average;
}

// Call the getAverage() function and pass it the myScores array
let myAverage = getAverage(myScores);

// Display the average score
console.log(`My average score is: ${myAverage}`);

let yourScores = [82, 98, 94, 88, 92, 100, 100]; 

function getAverage(scores) {
    let sum = 0;
    for (let i = 0; i <scores.length; i++) {
        sum += scores[i];
    }
    let average = sum / scores.length;
    return average.toFixed(2);
}
let yourAverage = getAverage(yourScores);

console.log(`My average score is: ${yourAverage}`);