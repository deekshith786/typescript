// varialble decalaration

// let and const are the two variables used most
// these cannot be redeclared 

// const must be defined when declared

let x = 10;
const y = 20;
let sum = x + y;
console.log(sum);


// types in typescript 

// boolean, number, string

let isBeginner: boolean = true;
let total: number = 0;
let personName: string = "deekshith"

// string manipulation

let sentence: string = `hello ${personName} welcome to the class`;
console.log(sentence);

// we can also have undefined and null types in the typescript
let n: null = null;
let u: undefined = undefined;

// and this null and undefined can also be assigned to the other types like string, boolean, number
let isNew: boolean = null;
let ourName: string = undefined;
