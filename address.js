"use strict"

const myInfo = {
 name: "Rene Banuelos",
address: "1272 E elm St",
city: "Pheonix",
state: "Arizona",
zip: 85006
};

function printContact(myInfo) {
    console.log(`Name: ${myInfo.name}, Address: ${myInfo.address}, City: ${myInfo.city}, State: ${myInfo.state}, zip: ${myInfo.zip}`);
}
printContact(myInfo)