// node 01_basics/03.js
let score = "33ads"
//finding the type of value
console.log(typeof score)
console.log(typeof (score));

//convert string to number .
let ValuInNumber = Number(score)
console.log(typeof ValuInNumber);
// NaN= Not a Number(because of "33adc" is not a pure number. but converting 
// the string into a number it's convert the string to 
// a number but cant compleatly change it it's an inbuilt error)
console.log(ValuInNumber)