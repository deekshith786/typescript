// Arrays in typescript
// can be declared in two ways
var firstArray = [];
var secondArray = [];
// for array of mixed types we have tuples in typescript
var mytuple = ["deekshith", 100];
// fixed number of values and the order of the value should be same as the types
var color;
(function (color) {
    color[color["red"] = 0] = "red";
    color[color["green"] = 1] = "green";
    color[color["blue"] = 2] = "blue";
})(color || (color = {}));
;
var c = color.green;
console.log(c);
//# sourceMappingURL=tutorial3.js.map