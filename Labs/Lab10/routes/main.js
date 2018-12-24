const express = require("express");
const router = express.Router();
const userData = require("../data/users");

router.get("/", async (req, res) => {
	let isAuthenticated;
	try {
        //Authcookie??
		isAuthenticated = await userData.findUserBySessionId(re.cookies.Authcookie);
	} catch (err) {
        isAuthenticated = false;
        //return err; not necessary
	}

	if (isAuthenticated) {
		//If auth, redirect to private
        res.redirect("/private");
    } else {
		//Auth user should not see login, unauth does though
        let document = { 
			title: "Login" 
		};
        
		res.render("home", document);
	}
});

module.exports = router;