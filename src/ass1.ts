
const user_name: string = "Arjun";

const age:number = 22;

const married:boolean = false;

const arrayofNumber:number[] = [1,2,3,4]

const arrayofString:string[]=["delhi","public","school"]

let tUple:[string,boolean]

tUple=["graduate",false]

enum details{
 User,
 SuperUser,
 Admin,
 SuperAdmin
}


const product =(a:number,b:number):number =>{
 return a*b;
}

console.log(product(5,20))

const divide =(a:number,b:number):number =>{
 return a/b;
}

console.log(divide(100,20))


const name_fnc =(n:string):void=>{
 console.log(n)
}

name_fnc("suresh")