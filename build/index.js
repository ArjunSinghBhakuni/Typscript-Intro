// Booleans
var isDone = false;
isDone = true;
// Number
var price = 10;
//String
var first_name = "Masai";
var last_name = "School";
var full_name = "".concat(first_name, "_").concat(last_name); //Inference check from the values
//Array
var arr1 = [1, 2, 3, 4];
var arrayOfStrings = ["Masai", "School"];
arrayOfStrings.push("Karnataka");
var arrOfPerson = [];
// interface person {
//   first_name: string;
//   last_name: string;
//   age: number;
// }
var masai = {
    first_name: "masai",
    last_name: "school",
    age: 3,
    isWorking: true
};
//Tuples - Arrays
//1. The number of elements in the tuple is fixed
//2. The types of elements are known in advance.
var tuple;
tuple = ["Masai", 3];
tuple.push(5);
console.log(tuple);
//Enums -> a group of named constants
var Color;
(function (Color) {
    Color[Color["RED"] = 0] = "RED";
    Color[Color["GREEN"] = 1] = "GREEN";
    Color[Color["BLUE"] = 2] = "BLUE";
})(Color || (Color = {}));
var greenColor = Color.GREEN;
// console.log(Color["1"]);
//Others
var u;
var n;
var a;
//functions
// function sum(a: number, b: number):number {
//   return a + b;
// }
var sum = function (a, b) {
    if (b === void 0) { b = 10; }
    return a + b;
};
console.log(sum(2));
var printName = function (_a) {
    var first_name = _a.first_name, last_name = _a.last_name, age = _a.age, isWorking = _a.isWorking;
    console.log("".concat(first_name, "_").concat(last_name));
};
var person1 = {
    first_name: "Masai",
    last_name: "School",
    age: 3,
    isWorking: true
};
printName(person1);
//Union
var output;
output = ["Masai", 3];
//Intersection
var coder = {
    first_name: "masai",
    last_name: "school",
    isWorking: true,
    skills: "coding"
};
//# sourceMappingURL=index.js.map