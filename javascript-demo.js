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
person.printNameFunction();
person.printNameArrow();
