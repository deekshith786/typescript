// typeinferance in typescript

//typescript didnt infered the datatype for variable a
let a;
a = true;
a = 100;

//typescript infered the datatype for variable b
let b = 500;
// b = false;  doesnt work like this


// union of types for variable 
let newVariable: number | string;

newVariable = 20;
newVariable = "deekshith";

// we could have also used the type any instead of union type
// reasons: 
// 1. any type takes all the types but union is restricted for specified types gives only
// intellisense support i.e giving suggestion for that variable after .
