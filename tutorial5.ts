
// functions in js

// let anyType: any;
// anyType = 20;

// function add(num1, num2) {
//     return num1 + num2;
// }


// in typeScript
function add(num1: number, num2: number) {
    return num1 + num2;
}
add(5, 10);
// add (5,"10"); not possile due to datatype passed inside the function

// arrow functions

const arrowFunctions = () => {
    console.log("this is how the arrow functions look like");

}


// optional and default parameters
// optional //  the only codition is that these should be placed only after all the 
// required parameters are declared in the function
// eg:
function adding(num1: number, num2?: number) {
    return num1 + num2; //gives 5
}
adding(5);//this is possible as the second parameter is optional

//default parameters    //it has a set value to the parameter
function multiplying(num1: number, num2: number = 10) {
    return num1 * num2; //gives 100  
}
multiplying(10)