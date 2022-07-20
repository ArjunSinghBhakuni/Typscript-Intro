interface User {
 type: 'user';
 name: string;
 age: number;
 occupation: string;
}

interface Admin {
 type: 'admin';
 name: string;
 age: number;
 role: string;
}

const Person1 : User ={
 type: 'user',
 name: "Arjun",
 age: 24,
 occupation: "fswd",

}

const Person2: Admin= {
 type: 'admin',
 name: "Suraj",
 age: 27,
 role: "engineer",
}

const getUserType =(obj:User | Admin):string=>{
 return obj.type
}

console.log(getUserType(Person1))

console.log(getUserType(Person2))