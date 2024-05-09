// "use strict"

// function parsePartCode(product){

// let product ={
//     supplierCode: "someValue",
//     productNumber: "someValue",
//     size: "someValue"
// };
//  return product;
// }

// let exampleString = "XYZ:1234-L";
// let parts = exampleString.split(":");
// let partCode1 = parts[0];
// let partCode2 = parts[1].split("-")[0];
// let partCode3 = parts[1].split("-")[1];

// const product = {
//     supplierCode: partCode1, // Extracted "XYZ"
//     productNumber: partCode2, // Extracted "1234"
//     size: partCode3 // Extracted "L"
// };

// console.log(product);


"use strict"

//creating function with parameters that accept supplier Code, product number and size
function parsePartcode(code)
{  //variable parts is equal to the code parameter which is then split into 2 parts using the colon(":")
    let parts = code.split(":");
    //we then create three variables that are equal to the parts variable
    //partsCode1 is equal to the first index[0] of the parts variable, that was previously split in 2 via the code.split(":") property.
    let partCode1 = parts[0];
    //partsCode2 is equal to the second index[1] of the parts variable, which was previously split in 2 via the code.split(":") property.
    // the contents of the second index[1] is split in 2 via the split("-") property. and partsCode2 is givien the value of the first index[0]
    let partCode2 = parts[1].split("-")[0];
     //partsCode3 is equal to the second index[1] of the parts variable, which was previously split in 2 via the code.split(":") property.
    // the contents of the second index[1] is split in 2 via the split("-") property. and partsCode3 is given the value of the second index[1]
    let partCode3 = parts[1].split("-")[1];
    
    //the object const product has 3 properties supplierCode, productNumber, size.
    const product = {
        supplierCode: partCode1, // Extracted "XYZ"
        productNumber: partCode2, // Extracted "1234"
        size: partCode3 // Extracted "L"
    };
    
//returns the object so that were able to use the properties of the object outside of the function
    return product
};

//create variable with parsePartcode(code) compatible inputs
let shoes = "xpaees:77777777777-xxxl";

// Create variable displayProduct thats equal to the parsePartcode() function to input the shoes variable as a parmeter 
let displayProduct = parsePartcode(shoes);

//use a console.log to display the  displayProduct variable with different properties in the output
console.log(`Supplier Code: ${displayProduct.supplierCode } \nproductNumber:${displayProduct.productNumber} \nsize:${displayProduct.size}`)