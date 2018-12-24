const express = require("express");
const router = express.Router();
const userData = require("../data/users");

router.post("/", async (req, res) => {
    const username = req.body.username, password = req.body.password;
    let isAuthenticated = false;

    try {
        //Check if isAuth true
        isAuthenticated = await userData.verificationValid(username, password);
        res.cookie('AuthCookie', username, {maxAge: 3600000});
    } catch (err) {
        //isAuthenticated = false;
        console.log(err);
    }

    if (isAuthenticated) {

        res.redirect("/private");
    
    } else {

        let document = {
            error: "Did not provide valid username/password"
        };
        
        res.render("home", document);  
    }
});
module.exports = router;