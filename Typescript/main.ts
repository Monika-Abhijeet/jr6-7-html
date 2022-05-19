export let message = "Hello world";
console.log(message);
console.log(8 + 2 * 5 - 3);
console.log("i am in watch mode");

let isPresent: boolean = true;
let total: number = 100;
let name: string = "Monika";
let fruits: Array<string> = ["Apple", "Mango", "grapes"];

let x: number;
x = 10;

const y: number = 10;
// intellisence
console.log(name.toLowerCase());

let abc = 10;

let phNo: number | string;
phNo = 12347676;

// functions in typescript

function add(n1: number, n2: number = 10) {
  return n1 + n2;
}
let sum = add(5, 10);
sum = add(5);

function printPersonDetails(person: Person) {
  console.log(`${person.firstName} ${person.lastName}`);
}
function printEmployeeDetails(employee: Person) {
  console.log(`${person.firstName} ${person.lastName}`);
}
function printManagerDetails(manager: Person) {
  console.log(`${person.firstName} ${person.lastName}`);
}
interface Person {
  firstName: string;
  lastName: string;
  email: string;
  phNo: number;
}
let person = {
  firstName: "Monika",
  lastName: "Abhijeet",
  email: "monika@gmail.com",
  phNo: 8787,
};

printPersonDetails(person);

class Employee {
  empName: string;
  constructor(name: string) {
    this.empName = name;
  }

  greet() {
    console.log(`Good Morning ${this.empName}`);
  }
}

class Manager extends Employee {
  constructor(managerName: string) {
    super(managerName);
  }

  delegateWork() {
    console.log("Manager is delegating work", this.empName);
  }
}

let employee1 = new Employee("Monika");
console.log(employee1.empName);
employee1.greet();

let m1 = new Manager("Abhijeet");
m1.delegateWork();
m1.greet();
console.log(m1.empName);
