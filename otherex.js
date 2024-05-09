"use strict"

function printEmployeeAndPay(emp) {
    console.log("Name: " + emp.name);
    console.log("Pay: " + emp.payRate);
   }
   let emp1 = {
    employeeId: "1", 
    name: "Ezra", 
    jobTitle: "Theater Teacher", 
    payRate: 38.46
    };
   let emp2 = {
    employeeId: "2", 
    name: "Elisha", 
    jobTitle: "Game Programmer", 
    payRate: 43.27
    };
   printEmployeeAndPay(emp1);
   printEmployeeAndPay(emp2);


   let printCarFacts =[
   { ype: "fast",
    name: "corvette",
    type: ["sport", "luxury"],
    cost: 330000
   },
   {ype: "fast",
    name: "viper",
    type: "sport",
    cost: 330000,
   },
   ]
   console.log(` The cars name is ${printCarFacts[0].name} and the type is ${printCarFacts[0].type[1]} the cost is ${printCarFacts[0].cost}`);
 