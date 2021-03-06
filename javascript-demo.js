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
// const fruits = ["apple", "orange", "mango", "peach", "strawberry", "guava"];

console.log(fruits.splice(2, 2, "grapes", "kiwi"));
console.log(fruits);

let employees = [
  { name: "monika", salary: 90000 },
  { name: "Abhijeet", salary: 150000 },
  { name: "Gaanavi", salary: 13000 },
  { name: "mamatha", salary: 5000 },
  { name: "prahlad", salary: 30000 },
  { name: "Sharad", salary: 88000 },
];

let lesSalary = employees.filter((emp) => {
  return emp.salary < 50000;
});

let moreSalary = employees.filter((emp) => {
  return emp.salary > 50000;
});

console.log(lesSalary);
console.log(moreSalary);

const registeredUsers = [
  {
    userName: "Monika",
    password: "monika123",
  },
  {
    userName: "Sharad",
    password: "sharad56657",
  },
  {
    userName: "Gaanavi",
    password: "Gaanu777",
  },
];

let uName = "Gaanavi";
let pwd = "Gaanu7798";

let loginUser = registeredUsers.filter((user) => {
  return user.userName === uName && user.password === pwd;
});

if (loginUser.length > 0) {
  console.log("login successfull");
} else {
  console.log("login failed");
}

const capGEmployees = [
  "Monika",
  "siddireddy",
  "madhu",
  "harish",
  "deepthi",
  "keerthana",
  "jeeshitha",
  "Akhila",
];

const TCSEmployees = ["Sharad", "nishitha", "pranamya", "harshika"];
const [emp1, emp2, , emp3, ...remainingEmployees] = capGEmployees;
console.log(emp1, emp2, emp3);
console.log(remainingEmployees);
console.log([...capGEmployees, ...TCSEmployees]);

const personOne = {
  name: "monika",
  age: 28,
  email: "monika@gmail.com",
  address: {
    apartment: "abc",
    city: "bangalore",
    state: "karnataka",
  },
};
const personalDetails = {
  name: "monika",
  age: 28,
  email: "monika@gmail.com",
  address: {
    apartment: "abc",
    city: "bangalore",
    state: "karnataka",
  },
};

const careerDetails = {
  empId: "12345",
  name: "Monika Abhijeet",
  email: "monika@capg.com",
  address: {
    building: "#567",
    city: "bangalore",
    state: "karnataka",
    country: "INDIA",
  },
};

const {
  email,
  address: { state },
  name,
  ...remainingInfo
} = personOne;

console.log(email, state, name);
console.log({ ...personalDetails, ...careerDetails });

var numbers = [1, 2, 3, 4, 5];
var filteredNumber = numbers
  .filter((num) => {
    return num % 2 == 0;
  })
  .map((num) => {
    return num * num;
  });

console.log(filteredNumber);

const halodocEmp = [
  "Monika",
  "siddireddy",
  "madhu",
  "harish",
  "deepthi",
  "keerthana",
  "jeeshitha",
  "Akhila",
];

const empDetails = halodocEmp.map((emp, index) => {
  return {
    slNo: index + 1,
    name: emp,
    company: "Halodoc",
  };
});
console.log(empDetails);

name1 = {
  firstName: "Monika",
  lastName: "Abhijeet",
};

let printFullName = function (city, state) {
  console.log(
    `My name is ${this.firstName} ${this.lastName} and i am from ${city}, ${state}`
  );
};
var name2 = {
  firstName: "Sharad",
  lastName: "Gudihal",
};
let name3 = {
  firstName: "sachin",
  lastName: "Tendulkar",
};
printFullName.call(name1, "bangalore", "karnataka");
printFullName.call(name3, "mumbai", "maharashrtra");
printFullName.call(name2, "hyderabad", "AP");

printFullName.apply(name1, ["bangalore", "karnataka"]);
printFullName.apply(name3, ["mumbai", "maharashrtra"]);
printFullName.apply(name2, ["hyderabad", "AP"]);

let newName1 = printFullName.bind(name1, "Bangalore", "Karnataka");
newName1();
