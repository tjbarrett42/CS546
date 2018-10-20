const express = require("express");
const storyRoutes = express();

storyRoutes.get("/", async (req, res) => {
	res.json({
		storyTitle:"Modern Monarch of Chime Aura",
		story:"Now this is the story all about how, My life got flipped-turned upside down, And I'd like to take a minute, just sit right there, I'll tell you how I became the prince of a town called Bel Air. \nIn west philadelphia, born and raised On the playground is where I spent most of my days. Chillin' out, maxin', relaxin all cool, And shootin' some B-ball outside of the school." 
	});
});

module.exports = storyRoutes;