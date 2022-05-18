// function sum(num1, num2) {
//   return num1 + num2;
// }
sum = (num1, num2) => {
  return num1 + num2;
};
sum = (num1, num2) => num1 + num2;
// function multiply(num1, num2) {
//   return num1 * num2;
// }
multiply = (num1, num2) => {
  return num1 * num2;
};
// function isPositive(num) {
//     return num>=0
// }
isPositive = (num) => {
  return num >= 0;
};
// function generateRandomNumber() {
//     return Math.random;
// }
generateRandomNumber = () => {
  return Math.random;
};
var a = 10;
var b = 20;
var result = sum(a, b);
var multiplicationResult = multiply(a, b);
console.log(result, multiplicationResult);
this.name = "hello";
class Person {
  constructor(name) {
    this.name = name;
  }
  printNameFunction() {
    setTimeout(function () {
      console.log("Function ...... " + this.name);
    }, 2000);
  }
  printNameArrow() {
    setTimeout(() => {
      console.log("arrow...... " + this.name);
    }, 2000);
  }
}
var person = new Person("Monika");
console.log("print name as", this.name);
// person.printNameFunction();
// person.printNameArrow();

product = (num1 = 1, num2 = 1) => {
  return num1 * num2;
};

let prodResult = product(10, 20);
console.log("the result is ${prodResult}");
console.log(`The result is ${prodResult}`);
console.log('Hi My \n name is \n "Monika"');
console.log(`Hi My
 name is 
 "Monika"`);

//  string methods
var stringOne = "This is a React session ";
var stringTwo = "to learn Frontend and Backend";

// 1) charAt => returns character at a specifoed location

console.log(stringOne.charAt(1));

// 2)charCodeAt() => return unicode od character at a specified location

console.log(stringOne.charCodeAt(1));

// 3)concat => join the strings
console.log(stringOne.concat(stringTwo));

// 4) fromCharCode()

// 5)endsWith
console.log(stringOne.endsWith("ssion "));

// 6)includes
console.log(stringTwo.includes("learn"));

// indexOf
console.log(stringTwo.indexOf("end"));

// lastIndexOf
console.log(stringTwo.lastIndexOf("end"));

// replace
console.log(stringTwo.replace(/end/g, "END"));

// slice
console.log(stringTwo.slice(9, 14));

// split
console.log(stringTwo.split("and"));

// startWith
console.log(stringTwo.startsWith("to"));

// toLowercase
console.log(stringOne.toLowerCase());

// toUpperCase
console.log(stringOne.toUpperCase());

var name1 = "monika  abhijeet   ";
var name2 = " monika abhijeet";

// trim
console.log(name1.trim() === name2.trim());

// array methods
// toString();
const fruits = ["apple", "orange", "mango", "peach", "strawberry", "guava"];
const vegetables = ["carrot", "onion", "tomato", "potato"];
const leafies = ["spinach", "methi", "coriander", "curry"];
console.log(fruits.toString());

// join
console.log(fruits.join(" "));

// push
fruits.push("watermelon");
console.log(fruits);

// pop
console.log(fruits.pop());
// length
console.log(fruits);
console.log(fruits.length);

// concat
console.log(fruits.concat(vegetables, leafies));

// splice
// const fruits = ["apple", "orange", "mango"];

console.log(fruits.splice(2, 1, "grapes", "kiwi"));
console.log(fruits);
