// Typescript is superset of JavaScript

let m1 : string = "Hello World";

let age1 : number = 26;

let flag1 : boolean = true;

let num : number[] = [1, 2, 3, 4, 5];

let city : any= ["Nagpur", 12, "Pune", "Mumbai"];

// To run a TypeScript file, we need to first 
// compile it to JavaScript using the 
// command "tsc filename.ts" and 
// then run the generated JavaScript 
// file using "node filename.js".

console.log(m1);
console.log(age1);
console.log(flag1);
console.log(num);
console.log(city);



// functions in  Typescript

function add(a:number, b: number): number{
    return a + b;
}

let sum = add(5, 10); // error : Argument of type 'string' is not assignable to parameter of type 'number'.

// onjects in Typescript

let user : {name: string, age: number} = {name: "Abhijeet", age: 26};