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
console.log("nazmul")

// 1>=true,0>=false
// "">=false
// "nazmul"= true
let ForBoleanValue = 1
let booleanTransfer = Boolean(ForBoleanValue)
console.log(booleanTransfer)
console.table([booleanTransfer, ValuInNumber, score])


// For string number it will be convert number to string
let SomeNumber = 33
let StringNumber= String(SomeNumber)
console.log(StringNumber)
console.log(typeof StringNumber)

let num1 =200
num1++//200+1=201;
console.log(num1)
++num1//1+201=202;
console.log(num1)