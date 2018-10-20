const questionOne = function questionOne(arr) {
    var sumOfSquares = Math.pow(arr[0],2) + Math.pow(arr[1],2) + Math.pow(arr[2],2);
    return sumOfSquares;
}

const questionTwo = function questionTwo(num) { 
    var first = 1;
    var second = 0;
    var tempNum;

    while (num > 0){
        tempNum = first;
        first = first + second;
        second = tempNum;
        num--;
    }

    return second;
    // Fib recursive sequence was not working correctly
}

const questionThree = function questionThree(text) {
    // Pretty and adaptable solution
    var vowelCount = 0
    var vowels = ['a','e','i','o','u','A','E','I','O','U'];
    for(var i = 0; i < text.length; i++){
        for(var j = 0; j < vowels.length; j++){
            if(text.charAt(i) == vowels[j]) vowelCount++;
        }
    }
    return vowelCount;
}

const questionFour = function questionFour(num) {
    // factorial(n) = n * (n-1) * (n-2)... * 1
    var result = 1;
    
    if (num == 0) return 1;
    if (num < 0) return NaN;

    for (var i = 1; i <= num; i++){
        result *= (i);
    }
    return result;
}

module.exports = {
    firstName: "Timothy", 
    lastName: "Barrett", 
    studentId: "10413018",
    questionOne,
    questionTwo,
    questionThree,
    questionFour
};