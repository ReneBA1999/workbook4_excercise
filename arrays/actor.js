"use strict"

let academyMembers = [
    {
    memID: 101,
    name: "Bob Brown",
    films: ["Bob I", "Bob II", "Bob III", "Bob IV"]
    },
    {
    memID: 142,
    name: "Sallie Smith",
    films: ["A Good Day", "A Better Day"]
    },
    {
    memID: 187,
    name: "Fred Flanders",
    films: ["Who is Fred?", "Where is Fred?",
    "What is Fred?", "Why Fred?"]
    },
    {
    memID: 203,
    name: "Bobbie Boots",
    films: ["Walking Boots", "Hiking Boots",
    "Cowboy Boots"]
    },
   ];
   // Who is the Academy Member whose ID is 187?
   let memberWithID187 = academyMembers.find(member => member.memID === 187);
console.log("Academy Member with ID 187:", memberWithID187);
   // Who has have been in at least 3 films?
   let membersWith3OrMoreFilms = academyMembers.filter(member => member.films.length >= 3);
console.log("Academy Members with at least 3 films:", membersWith3OrMoreFilms);
   // Who has a name that starts with "Bob"?
   let membersWithNameBob = academyMembers.filter(member => member.name.startsWith("Bob"));
console.log("Academy Members with a name starting with 'Bob':", membersWithNameBob);
   // HARDER: Which Academy Members have been in a film
   // that starts with "A"
   let membersWithFilmStartingWithA = academyMembers.filter(member => {
    return member.films.some(film => film.startsWith("A"));
});
console.log("Academy Members who have been in a film starting with 'A':", membersWithFilmStartingWithA);