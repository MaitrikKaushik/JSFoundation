let balance = 120
let anotherBalance = new Number(120)

console.log(typeof balance);
console.log(typeof anotherBalance);

console.log(balance);
console.log(anotherBalance);

console.log(anotherBalance.valueOf());

let firstName  = null;
console.log(firstName);

let myString = "hello"
let myString2 = 'hello' 
let concat = myString + " " + "Maitrik"
console.log(concat);
let concat2 = `Hello ${myString}` //string interpolation

let value = `The value is ${2 * 2}`
console.log(value);

let sm1 = Symbol();
let sm2 = Symbol();

console.log(sm1 == sm2);


