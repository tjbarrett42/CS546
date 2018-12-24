const express = require("express");
const router = express.Router();
const data = require("../data");
const palindromeData = data.pStr;

router.get("/", (req, res) => {
	const document = {
		title: "Status code: 400",
		description: "Empty document"
	};
	res.status(400).render("error", document);
});

router.post("/", (req, res) => {
    const result = req.body['text-to-test'];
    if (result){
        let resultMsg = "failure"; //Start as failure
        //console.log("The fuck u say 2 me?");
        let palBool = palindromeData.isPalindrome(result);
        //If true, result is true. Use this to call css class later
        if (palBool) {
            resultMsg = "success";
        }

        const document = {
            title: "The Palindrome Results!",
            text: result,
            isPal: palBool,
            class: resultMsg
        };
        //Result.handlebar
        res.render("result", document);

    }else{
        const document = {
            title: "Status code: 400",
            description: "Empty document"
        };
        res.status(400).render("error", document);
    }
});
module.exports = router;