const express = require("express");
const router = express.Router();


router.get("/", (req, res) => {
  const document = {
		title: "The Best Palindrome Checker in the World!"
	};
  
  res.render("form", document);
});

module.exports = router;