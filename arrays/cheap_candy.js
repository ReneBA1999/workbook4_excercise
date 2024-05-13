"use strict"

let products = [
    {product: "Gummy Worms", price: 5.79},
    {product: "Plain M&Ms", price: 2.89},
    {product: "Peanut M&Ms", price: 2.89},
    {product: "Swedish Fish", price: 3.79},
    {product: "Gummy Bears", price: 5.79},
    {product: "Skittles", price: 2.89},
    {product: "Reeses Pieces", price: 2.89},
    {product: "Sour Patch", price: 3.79},
    {product: "Hershey", price: 2.89},
    {product: "Starburst", price: 3.79}
   
   ];
   // Which candies costs less than $4.00?
//    let cheapCandy = [];
//    for (let candy of products){
//     if (parseFloat(candy.price) <= 4);{
//         cheapCandy.push(candy.product)
//     }
//    }
//    console.log(`The candies ${cheapCandy} are 4$ or less`)

//    let cheapCandy = [];
// for (let candy of products) {
//     if (parseFloat(candy.price) <= 4) {
//         cheapCandy.push(candy.product);
//     }
// }

// console.log(`The candies ${cheapCandy} are $4 or less`);
//    // Which candies has "M&M" its name?
// console.log(products[1], [2]);

//corrected
// let candiesWithMM = [];

// for (let candy of products) {
//     if (candy.product.includes("M&M")) {
//         candiesWithMM.push(candy.product);
//     }
// }

// console.log(`The candies with "M&M" in their name are: ${candiesWithMM}`);
//    // Do we carry "Swedish Fish"?

   // Function to check if a specific candy is in the products array
function carryProduct(productName) {
    for (let candy of products) {
        if (candy.product === productName) {
            return true; // Found the candy
        }
    }
    return false; // Candy not found
}

// Check if we carry "Swedish Fish"
let carriesSwedishFish = carryProduct("Swedish Fish");
console.log(`Do we carry "Swedish Fish"? ${carriesSwedishFish ? "Yes" : "No"}`);