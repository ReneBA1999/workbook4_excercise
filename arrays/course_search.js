"use strict"

let courses = [
    {
    CourseId: "PROG100",
    Title: "Introduction to HTML/CSS/Git",
    Location: "Classroom 7",
    StartDate: "09/08/22",
    Fee: "100.00",
    },
    {
    CourseId: "PROG200",
    Title: "Introduction to JavaScript",
    Location: "Classroom 9",
    StartDate: "11/22/22",
    Fee: "350.00",
    },
    {
    CourseId: "PROG300",
    Title: "Introduction to Java",
    Location: "Classroom 1",
    StartDate: "01/09/23",
    Fee: "50.00",
    },
    {
    CourseId: "PROG400",
    Title: "Introduction to SQL and Databases",
    Location: "Classroom 7",
    StartDate: "03/16/23",
    Fee: "50.00",
    },
    {
    CourseId: "PROJ500",
    Title: "Introduction to Angular",
    Location: "Classroom 1",
    StartDate: "04/25/23",
    Fee: "50.00",
    }
   ];
  
   // When does the PROG200 course start
   console.log(courses[0].StartDate);
//    // What is the title of the PROJ500 course?
   console.log(courses[4].Title);
// What are the titles of the courses that cost $50 or less?
let cheapCourses = [];
for (let course of courses) {
    if (parseFloat(course.Fee) <= 50) {
        cheapCourses.push(course.Title);
    }
}
console.log("Titles of courses that cost $50 or less:", cheapCourses);
// What classes meet in "Classroom 1"?
//My code
// let location1 = courses.Location
// if (location1 == "classroom1");
// console.log(location1);
//Corected code
// What classes meet in "Classroom 1"?
let classesInClassroom1 = [];

for (let course of courses) {
    if (course.Location === "Classroom 1") {
        classesInClassroom1.push(course.Title);
    }
}

console.log("Classes that meet in Classroom 1:", classesInClassroom1);