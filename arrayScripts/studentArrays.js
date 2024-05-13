"use strict"


// Array of student objects
let students = [
    {name: "Zephaniah", scores: [100, 96, 99, 92]},
    {name: "Pursalane", scores: [92, 89, 96, 100, 94]},
    {name: "Siddalee", scores: [86, 72, 92]},
    {name: "Ian", scores: [98, 84, 89, 100, 100, 76]},
    {name: "Elisha", scores: [89, 100]},
    {name: "Ezra", scores: [100, 99, 100, 87]}
];

// Function to calculate the average score for each student
function calculateStudentAverages(studentsArray) {
    // Iterate over each student in the array
    for (let i = 0; i < studentsArray.length; i++) {
        let totalScore = 0; // Initialize the total score for the current student
        let student = studentsArray[i]; // Get the current student object
        // Iterate over each score of the current student
        for (let j = 0; j < student.scores.length; j++) {
            totalScore += student.scores[j]; // Add each score to the total score
        }
        let averageScore = totalScore / student.scores.length; // Calculate the average score
        // Print the student's name and average score
        console.log(`${student.name}'s average score is: ${averageScore.toFixed(2)}`);
    }
}

// Call the function with the students array
calculateStudentAverages(students);


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
   displayKids(ourKids); 

   function getKids() {
    let kids = ["Rene", "Leo", "Eddie"];
    return kids;
   }

   function displayNames(kids){
   let kidsNum = kids.length;
   for (i = 0; i < kidsNum; i++){
    console.log (kids[i]);
   }
   }
   let theeKids =  getKids();
   displayNames(theeKids);