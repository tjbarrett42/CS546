const express = require("express");
const router = express.Router();
const data = require("../data/index");
const recipeData = data.recipes;

/* Routes
GET 		/recipes
GET 		/recipes:id
POST		/recipes
PUT 		/recipes/:id
PATCH 	/recipes/:id
DELETE	/recipes/:id
*/

router.get("/recipes", async (req, res) => {
	try {
		const recipeList = await recipeData.getAllRecipes();

		res.json(recipeList);
	} catch (err) {
		res.status(500).send({error: err});
	}
});

router.get("/recipes/:id", async (req, res) => {
	try {
		const recipe = await recipeData.getRecipeById(req.params.id);

		res.json(recipe);
	} catch (err) {
		res.status(404).json({ message: "Recipe not found" });
	}
});
  
router.post("/recipes", async (req, res) => {
	try {
		//Creates a recipe with the supplied data in the request body
		let recipeBody = req.body;
		//returns the new recipe
		const recipe = await recipeData.postRecipe(recipeBody);

		res.json(recipe);
	} catch (err) {
		res.status(500).send({error: err});
	}
});

router.put("/recipes/:id", async (req, res) => {
	try {
		//Updates the specified recipe with by replacing, return
		let recipeUpdated = await recipeData.putRecipe(req.params.id, req.body);
		
		res.json(recipeUpdated);
	} catch (err) {
		res.status(500).send({error: err});
	}
});

router.patch("/recipes/:id", async (req, res) => {
	try {
		//Updates the specified recipe with only the supplied changes, return
		let recipeUpdated = await recipeData.patchRecipe(req.params.id, req.body);
		
		//Update status, since recipe is Updated but is the initial recipe
		res.status(200).json(recipeUpdated);
	} catch (err) {
		res.status(500).send({error: err});
	}
});

router.delete("/recipes/:id", async (req, res) => {
	try {
		//Deletes the recipe and returns nothing.
		await recipeData.deleteRecipe(req.params.id);
		
		res.status(200).json({message: "Recipe deleted"});
	} catch(err) {
		res.status(500).json({error: err});
	}
});

module.exports = router;