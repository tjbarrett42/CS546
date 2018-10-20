const geometry = require("./geometry");
const utilities = require("./utilities");

//Geometry

console.log("***Geometry***");
console.log("**volumeOfRectangularPrism");
try {
console.log(geometry.volumeOfRectangularPrism());
} catch (err) {
    console.log(err);
}
try {
// ? console.log(geometry.volumeOfRectangularPrism(i,should,throw));
} catch (err) {
    console.log(err);
}

try {
    console.log(geometry.volumeOfRectangularPrism(3,5,-200));
} catch (err) {
    console.log(err);
}

console.log("**surfaceAreaOfRectangularPrism");

try {
    console.log(geometry.surfaceAreaOfRectangularPrism());
} catch (err) {
    console.log(err);
}

try {
    //console.log(geometry.surfaceAreaOfRectangularPrism(i,should,throw));
} catch (err) {
    console.log(err);
}

try {
    console.log(geometry.surfaceAreaOfRectangularPrism(3,5,-200));
} catch (err) {
    console.log(err);
}

console.log("**volumeOfSphere");
try {
    console.log(geometry.volumeOfSphere());
} catch (err) {
    console.log(err);
}

try {
    //console.log(geometry.volumeOfSphere(i,should,throw));
} catch (err) {
    console.log(err);
}

try {
    //console.log(geometry.volumeOfSphere(this_is_an_error));
} catch (err) {
    console.log(err);
}

try {
    console.log(geometry.volumeOfSphere(-200));
} catch (err) {
    console.log(err);
}


console.log("**surfaceAreaOfSphere");
try {
    console.log(geometry.surfaceAreaOfSphere());
} catch (err) {
    console.log(err);
}

try {
    //console.log(geometry.surfaceAreaOfSphere(this_is_an_error));
} catch (err) {
    console.log(err);
}

try {
    console.log(geometry.surfaceAreaOfSphere(-200));
} catch (err) {
    console.log(err);
}


console.log("***Utilities***:");

console.log("**deepEquality");
// const first = {a: 2, b: 3};
// const second = {a: 2, b: 4};
// const third = {a: 2, b: 3};
// console.log(utilities.deepEquality(first, second)); // false
// console.log(utilities.deepEquality(first, third)); // true
// console.log(utilities.deepEquality(3, "a"));

try {
    console.log(utilities.deepEquality({"a":{"c":2,"b":1},"z":"test"},{"z":"test","a":{"b":1,"c":2}})());
} catch (err) {
    console.log(err);
}

try {
    console.log(utilities.deepEquality());
} catch (err) {
    console.log(err);
}

try {
    console.log(utilities.deepEquality(1,2));
} catch (err) {
    console.log(err);
}


console.log("**uniqueElements");
// const testArr = ["a", "a", "b", "a", "b", "c"];
// console.log(utilities.uniqueElements(testArr)); // outputs 3
// const testArr2 = [];
// console.log(utilities.uniqueElements(testArr2));
// const testArr3 = "Hello";
// console.log(utilities.uniqueElements(testArr3));
console.log("**countOfEachCharacterInString");
// console.log(utilities.countOfEachCharacterInString("Hello"));
// console.log(utilities.countOfEachCharacterInString("abc123"));
// console.log(utilities.countOfEachCharacterInString("Testing testing 123 hello"));
// console.log(utilities.countOfEachCharacterInString(""));
// console.log(utilities.countOfEachCharacterInString(null));

