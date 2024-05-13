"use strict"

let cars = [
    {type:"mustang", speeds: [90, 95, 98]},
    {type:"Nova", speeds: [99, 100, 110]},
    {type:"Chevelle", speeds: [100, 105, 104]},
    {type: "camaro", speeds: [101, 104,109]}
]

function  CalculateAverageSpeed(speedArray) {
for (let i = 0; i , speedArray.length; i++) {
 let totalSpeed = 0;
let car = speedArray[i];
for (let s = 0; s < car.speeds.length; s++){
    totalSpeed += car.speeds[s];
}
let averageSpeed = totalSpeed / car.speeds.length;
console.log(`${car.type}'s average speed is : ${averageSpeed.toFixed(2)}`)
}
}
CalculateAverageSpeed(cars);

let 