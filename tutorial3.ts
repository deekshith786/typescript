// Arrays in typescript

// can be declared in two ways

let firstArray: number[] = [];

let secondArray: Array<string> = [];

// for array of mixed types we have tuples in typescript

let mytuple: [string, number] = ["deekshith", 100];

// fixed number of values and the order of the value should be same as the types

enum color { red, green, blue };
let c: color = color.green;
console.log(c);

// if the value is unknown we can use the types any
let randomValue: any = 10;
randomValue = true; 

// if we declare the any type as the variable type it also takes the unnecessary funtions and calls 
// so to tackle this we have a data type called unknown 
// this also acts as similar to any keyword bu doesnt allow any other funtions an pointeers

// let myVariable: any = 100;

// console.log(myVariable.name);
// myVariable();                       // in this case using any data type 
// myVariable.toUpperCase();              we are calling our variable as a
                                        //   function, variable , and also able to call differnt funtions which are inappropiate

// so using unknown keyword can be the best way to tackel this problem
// and also use as keyword to declare the datatype

let myVariable: unknown = 100;

function hasName(obj: any): obj is {name: string}
{
    return !!obj && typeof obj === "object" && "name" in obj
}
if(hasName(myVariable)){
console.log(myVariable.name);
}

// this line is called TypeAssertion (TypeCasting in othe language)
(myVariable as string).toUpperCase();








