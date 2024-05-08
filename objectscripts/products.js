"use strict"

const shoes = [
    {
productName: "Concords",
price: 210,
color: "black/white"
},
{
 productName: "British Khaki 6's",
  price: 310,
  color: "brown/white trim"
},
{
productName: "What the 4's",
price: 310,
color: "white/black/blue/red"
}
];
// console.log(`The third pairs shoe name is ${shoes[2].productName}. The shoe price is $${shoes[2].price}. And color consists of ${shoes[2].color}`);

function DisplayProduct(_shoeSelection) {
    console.log(`The product ${_shoeSelection.productName} shoe price is $${_shoeSelection.price} and the colorway consits of ${_shoeSelection.color}.`)
};

DisplayProduct(shoes[2]);
//This looks at the object that were referencing to
let shoeSelector = {
    productName: "What the 4's",
    price: 19.95,
    displayInformation: function() {
        return `This product ${this.productName} has a price of $${this.price}`
    }
}

console.log(shoeSelector.displayInformation());


