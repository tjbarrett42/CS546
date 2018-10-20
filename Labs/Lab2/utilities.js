const deepEquality = function deepEquality(obj1, obj2){
    // Check at ever level if the same
    // print nested objects for obj1, obj2
    if((!obj1) || (!obj2)){
        throw "Error: Argument does not exist, null, or undefined";
    }

    if(!(obj1 === Object(obj1) && (obj2 === Object(obj2)))){
        throw"Error: Type";
    }

    let printedObj1 = '{';
    let printedObj2 = '{';

    for (let property in obj1) {
        printedObj1 += property + ': ' + obj1[property]+', ';
    }
    for (let property in obj2) {
        printedObj2 += property + ': ' + obj2[property]+', ';
    }

    printedObj1 += '}';
    printedObj2 += '}';

    // compared printed objects, if equal, return true
    if (printedObj1 == printedObj2) return true;
    return false;
}

const uniqueElements = function uniqueElements(arr){
    // Iterate through the array and return how many unique elements there are
    if(!arr){
        throw "Error: Argument does not exist, null, or undefined";
    }
    if(arr.length == 0){
        throw "Error: Array is empty";
    }
    if(!(arr.constructor === Array)){
        throw "Error: Argument is not an array";
    }

    let inUniqueArr = false;
    let uniqueArr = [];

    // iterate through length
    for (var i = 0; i < arr.length; i++){
        // if arr[i] is not in uniqueArr, add to uniqueArr
        // console.log("I see " + arr[i]);
        inUniqueArr = false;
        for (var j = 0; j < uniqueArr.length; j++){
            if(arr[i] == uniqueArr[j]) {
                inUniqueArr = true;
                // console.log(arr[i] + " is not unique");
            }
        }
        if (inUniqueArr == false){
            // console.log(arr[i] + " is unique");
            uniqueArr.push(arr[i]);
        }
    }
    return uniqueArr.length;
}

const countOfEachCharacterInString = function countOfEachCharacterInString(str){

    try{
        if(!str){
            throw "Error: Argument does not exist, null, or undefined";
        }
        if(typeof str != "string"){
            throw "Error: String is empty";
        }
        if(str == ""){
            throw "Error: String is empty";
        }

        str = str.toLowerCase();

        var charObj = {};
        // Pupulate object properties and values
        for (var i = 0; i < str.length; i++){
            charObj[str.charAt(i)] = charObj[str.charAt(i)] ? charObj[str.charAt(i)] + 1 : 1;
        }
        // Sort by property value for wanted result

        // Return sorted object
        return charObj;
    } catch (err) {
        return err;
    }
}

module.exports = {
    deepEquality,
    uniqueElements,
    countOfEachCharacterInString
};