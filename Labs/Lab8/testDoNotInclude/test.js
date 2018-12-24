const isPalindrome = function isPalindrome(pStr) {
    //A palindrome is a phrase that is spelled 
    //the same way, backwards and forwards 
    //(ignoring spacing and punctuation; 
    //only alphanumeric characters matter).
    
    //Change all alphanumer to lowercase
    console.log("Start with: '" + pStr + "'");
    pStr = pStr.toLowerCase();
    console.log("Lowercase: '" + pStr + "'");
    //Remove all non-alphanumeric (punc, spaces)
    pStr = pStr.replace(/[^a-z0-9]+/g,'');
    console.log("Alphanumeric: '" + pStr + "'");

    let pStrLen = pStr.length;
    let pStrRevIndex = pStr.length-1;
    let middle = (pStr.length / 2) + 1;
    
    for (let i = 0; i < pStrLen; i++){
        if (pStr[i] !== pStr[pStrRevIndex]) return false;
        pStrRevIndex--;
        if(i == middle){ //confirmed once halfway through
            return true;
        }
    }
    return true;
}

console.log(isPalindrome("Was it a ccat I saw?"));