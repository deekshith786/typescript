// Arrays in typescript

// can be declared in two ways

let firstArray: number[] = [];

let secondArray: Array<string> = [];

// for array of mixed types we have tuples in typescript

let mytuple: [string, number] = ["deekshith", 100];

// fixed number of values and the order of the value should be same as the types

enum color {red, green, blue};
let c:color = color.green;
console.log(c);
