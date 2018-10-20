const express = require("express");
const educationRoutes = express();

educationRoutes.get("/", async (req, res) => {
    res.json(
      [
        {
              schoolName: "AMBS",
              degree: "Middle School",
              favoriteClass: "Physics",
              favoriteMemory: "Creating weapons in class out of school supplies"
        },
        {
            schoolName: "Bergen Catholic HS",
            degree: "High School",
            favoriteClass: "Physics",
            favoriteMemory: "Free gym class AKA Basketball Squad time"
        },
        {
            schoolName: "Stevens Institute of Technology",
            degree: "Bachelors",
            favoriteClass: "CS546",
            favoriteMemory: "Having money in my pocket"
        }
      ]
    );
});

module.exports = educationRoutes;