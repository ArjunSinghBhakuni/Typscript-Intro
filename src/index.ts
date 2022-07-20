// Booleans
let isDone: boolean = false;
isDone = true;

// Number
let price: number = 10;

//String
let first_name: string = "Masai";
let last_name: string = "School";
let full_name = `${first_name}_${last_name}`; //Inference check from the values

//Array
let arr1: number[] = [1, 2, 3, 4];
let arrayOfStrings: string[] = ["Masai", "School"];
arrayOfStrings.push("Karnataka");

//Object
//Primitive types in TypeScript -> number, string, boolean, null, undefined, symbol and big-int.

//to create the shape of an object

type softwareDeveloper = {
  skills: string;
};

type person = {
  first_name: string;
  last_name: string;
  age?: number;
  isWorking: boolean;
}; // creating a blue-print for the object

let arrOfPerson: person[] = [];

// interface person {
//   first_name: string;
//   last_name: string;
//   age: number;
// }

const masai: person = {
  first_name: "masai",
  last_name: "school",
  age: 3,
  isWorking: true,
};

//Tuples - Arrays
//1. The number of elements in the tuple is fixed
//2. The types of elements are known in advance.

let tuple: [string, number, number?];
tuple = ["Masai", 3];
tuple.push(5);
console.log(tuple);

//Enums -> a group of named constants

enum Color {
  RED, //0
  GREEN, //1
  BLUE, //2
}

let greenColor = Color.GREEN;
// console.log(Color["1"]);

//Others
let u: undefined;
let n: null;
let a: any;

//functions
// function sum(a: number, b: number):number {
//   return a + b;
// }

const sum = (a: number, b: number = 10): number => {
  return a + b;
};

console.log(sum(2));

const printName = ({ first_name, last_name, age, isWorking }: person): void => {
  console.log(`${first_name}_${last_name}`);
};
let person1: person = {
  first_name: "Masai",
  last_name: "School",
  age: 3,
  isWorking: true,
};

printName(person1);

//Union
let output: (number | string)[];
output = ["Masai", 3];

//Intersection
let coder: person & softwareDeveloper = {
  first_name: "masai",
  last_name: "school",
  isWorking: true,
  skills: "coding",
};