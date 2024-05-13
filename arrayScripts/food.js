"use strict"

let lunch = [
    {item: "steak fajitas", price: 9.99},
    {item: "chips and guacamole", price: 5.25},
    {item: "sweet tea", price: 2.79}
]

// Initialize constants for tax rate and tip rate
const taxRate = 0.08; // 8%
const tipRate = 0.18; // 18%
// Initialize variables to hold the subtotal, tax, tip, and total due
let subtotal = 0;
let tax = 0;
let tip = 0;
let totalDue = 0;
// Loop through the lunch array to calculate subtotal
for (let i = 0; i < lunch.length; i++) {
    subtotal += lunch[i].price;
}
// Calculate tax
tax = subtotal * taxRate;
// Calculate tip
tip = subtotal * tipRate;
// Calculate total due
totalDue = subtotal + tax + tip;
// Output results
console.log(`Subtotal: $${subtotal.toFixed(2)}`);
console.log(`Tax (8%): $${tax.toFixed(2)}`);
console.log(`Tip (18%): $${tip.toFixed(2)}`);
console.log(`Total Due: $${totalDue.toFixed(2)}`);