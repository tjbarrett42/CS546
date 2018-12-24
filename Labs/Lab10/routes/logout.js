const express = require("express");
const router = express.Router();
//const userData = require("../data/users");

router.get("/", async (req, res) => {
    var document = {
        title: "Logged out"
    }
    //cookie
    //clearCookie
    //Create cookie
    res.cookie("AuthCookie"); //Expires?
    res.clearCookie("AuthCookie");
    res.render("logout", document);
});

module.exports = router;