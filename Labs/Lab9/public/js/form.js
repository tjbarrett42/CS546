(function () {
const palindrome = {
    isPalindrome(pStr) {
        //Change all alphanumer to lowercase
        // console.log("Start with: '" + pStr + "'");
        pStr = pStr.toLowerCase();
        // console.log("Lowercase: '" + pStr + "'");
        //Remove all non-alphanumeric (punc, spaces)
        pStr = pStr.replace(/[^a-z0-9]+/g,'');
        // console.log("Alphanumeric: '" + pStr + "'");

        let pStrLen = pStr.length;
        let pStrRevIndex = pStr.length-1;
        let middle = (pStr.length / 2) + 1;
        
        //Check for palindrome start from front and end of string,
        //Iterate towards middle.
        
        for (let i = 0; i < pStrLen; i++){
            if (pStr[i] !== pStr[pStrRevIndex]) return false;
            pStrRevIndex--;
            if(i == middle){ //confirmed once halfway through
                return true;
            }
        }
        return true;
    }
}

const staticForm = document.getElementById('form');

if (staticForm) {
    
    const input = document.getElementById("operation");

    const errorContainer = document.getElementById("error-container");
    // const errorTextElement = errorContainer.getElementsByClassName(
    //   "text-goes-here"
    // )[0];

    const resultContainer = document.getElementById("result-container");
    // const resultTextElement = resultContainer.getElementsByClassName(
    //   "text-goes-here"
    // )[0];

    staticForm.addEventListener("submit", event => {
        event.preventDefault();

        errorContainer.classList.add("hidden");
        resultContainer.classList.add("hidden");

        try{
            
            
            //appending li to ul credit
            //https://stackoverflow.com/questions/47951287/dynamically-add-li-to-ul-javascript
            
            const attempt = document.createElement('li');
            attempt.appendChild(document.createTextNode(input.value));
            if (palindrome.isPalindrome(input.value)){
                attempt.setAttribute("class", "is-palindrome");
            } else {
                attempt.setAttribute("class", "not-palindrome");
            }
            console.log("isPal tested");
            resultText.appendChild(attempt);
            resultContainer.classList.remove("hidden");
            
            
        } catch (e){
            const message = typeof e === "string" ? e : e.message;
            errorTextElement.textContent = e;
            errorContainer.classList.remove("hidden");
        }
    });
}
})();
