"use strict"

let car = {
    make: "Toyota",
    model: "Camry",
    year: 2022,
    color: "Silver",
    mileage: 15000,
    isAutomatic: true,
    checkMileage: function() {
        return this.mileage < 10000 ? "Low mileage" : "High mileage";
    },
    showDetails: function() {
        return `The model of the car is ${this.model} the year is ${this.year}. The color is ${this.color}`;
    },
    honk: function() {
        return "Honk! Honk!";
    }
};

function displayCarInformation() {
    let carDetails = document.getElementById("carDetails");
    carDetails.innerHTML = car.showDetails();
}

function displayCarHonk() {
    let carHonk = document.getElementById("carHonk");
    carHonk.innerHTML = car.honk();
}

// Accessing object properties
console.log("Car Make:", car.make);
console.log("Model:", car.model);
console.log("Color:", car.color);

// Calling object methods
console.log(car.checkMileage());
console.log(car.honk());