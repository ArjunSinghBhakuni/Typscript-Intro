declare let isDone: boolean;
declare let price: number;
declare let first_name: string;
declare let last_name: string;
declare let full_name: string;
declare let arr1: number[];
declare let arrayOfStrings: string[];
declare type softwareDeveloper = {
    skills: string;
};
declare type person = {
    first_name: string;
    last_name: string;
    age?: number;
    isWorking: boolean;
};
declare let arrOfPerson: person[];
declare const masai: person;
declare let tuple: [string, number, number?];
declare enum Color {
    RED = 0,
    GREEN = 1,
    BLUE = 2
}
declare let greenColor: Color;
declare let u: undefined;
declare let n: null;
declare let a: any;
declare const sum: (a: number, b?: number) => number;
declare const printName: ({ first_name, last_name, age, isWorking }: person) => void;
declare let person1: person;
declare let output: (number | string)[];
declare let coder: person & softwareDeveloper;
