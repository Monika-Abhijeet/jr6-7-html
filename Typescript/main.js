"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.message = void 0;
exports.message = "Hello world";
console.log(exports.message);
console.log(8 + 2 * 5 - 3);
console.log("i am in watch mode");
var isPresent = true;
var total = 100;
var name = "Monika";
var fruits = ["Apple", "Mango", "grapes"];
var x;
x = 10;
var y = 10;
// intellisence
console.log(name.toLowerCase());
var abc = 10;
var phNo;
phNo = 12347676;
// functions in typescript
function add(n1, n2) {
    if (n2 === void 0) { n2 = 10; }
    return n1 + n2;
}
var sum = add(5, 10);
sum = add(5);
function printPersonDetails(person) {
    console.log("".concat(person.firstName, " ").concat(person.lastName));
}
function printEmployeeDetails(employee) {
    console.log("".concat(person.firstName, " ").concat(person.lastName));
}
function printManagerDetails(manager) {
    console.log("".concat(person.firstName, " ").concat(person.lastName));
}
var person = {
    firstName: "Monika",
    lastName: "Abhijeet",
    email: "monika@gmail.com",
    phNo: 8787
};
printPersonDetails(person);
var Employee = /** @class */ (function () {
    function Employee(name) {
        this.empName = name;
    }
    Employee.prototype.greet = function () {
        console.log("Good Morning ".concat(this.empName));
    };
    return Employee;
}());
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(managerName) {
        return _super.call(this, managerName) || this;
    }
    Manager.prototype.delegateWork = function () {
        console.log("Manager is delegating work", this.empName);
    };
    return Manager;
}(Employee));
var employee1 = new Employee("Monika");
console.log(employee1.empName);
employee1.greet();
var m1 = new Manager("Abhijeet");
m1.delegateWork();
m1.greet();
console.log(m1.empName);
