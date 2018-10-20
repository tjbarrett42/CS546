const express = require("express");
const aboutRoutes = express();

aboutRoutes.get("/", async (req, res) => {
    res.json({
        name:"Timothy Barrett",
        cwid:"10413018",
        biography:"I've lived in Haledon, New Jersey my entire life, going to school locally until transferring to a private middle school, and then proceeded to continued into a catholic high school.\nThe newest chapter in my life started at the end of highschool, when experimenting with performing arts gave me newfound confidence in myself, allowing me to become the person I am today.",
        favoriteShows:["Spongebob", "That 70s Show", "Friends", "HIMYM"],
        hobbies:["Gaming","Reading","Drawing","Robotics"]
    });
});


// router.post("/", async (req, res) => {
//   // Not implemented
//   res.status(501).send();
// });

module.exports = aboutRoutes;