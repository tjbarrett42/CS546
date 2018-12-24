const mongoCollections = require("../config/mongoCollections");
const recipes = mongoCollections.recipes;
//const users = require("./users");
const uuid = require("uuid/v4");

let exportedMethods = {

	async getRecipeById(id) {
		if (!id) throw "You must provide an id to search for";
		if(typeof id !== "string") throw ("Error: ID is not a string");

		const recipeCollection = await recipes();
		return recipe = await recipeCollection.findOne({ _id: id });
		
	},
	
	async getAllRecipes() {
		const recipeCollection = await recipes();
		//all recipe collection
		const allRC = await recipeCollection.find({}).toArray();
		//new all recipe collection
		let newARC = [];
		let recipeCollectionArrayLength = allRC.length;

		for(let i = 0; i < recipeCollectionArrayLength; i++) {
			newARC.push({
				_id: allRC[i]._id, 
				title: allRC[i].title
			});
		}

		return newARC;
		
	},

	async postRecipe(recipe) {
		//For throwing, checking string title array ingredients, array steps
		if (!recipe.title) throw "You must provide a title";
		if (!recipe.ingredients) throw "You must provide ingredients";
		if (!recipe.steps) throw "You must provide steps";
		if((typeof recipe.title) != "string") throw "Title not of type string";
		if(!Array.isArray(recipe.ingredients)) throw "Ingredients not of type array";
		if(!Array.isArray(recipe.steps)) throw "Steps not of type array";
		// Test individual ingredients (names and amounts)
		recipe.ingredients.forEach((ingredient) => {
			if (!ingredient.name) throw "You must provide a name for each ingredient";
			if (!ingredient.amount) throw "You must provide an amount for each ingredient";
			if (typeof ingredient.name !== "string") throw "Ingredient name not a string";
			if (typeof ingredient.amount !== "string") throw "Ingredient amount not a string";
		})
		// Test individual steps (itself)
		recipe.steps.forEach((step) => {
			if (!step) throw "You must provide a step";
			if (typeof step !== "step") throw "Step not a string";
		})


		const recipeCollection = await recipes();
		let newRecipeInfo = {
			_id: uuid(),
			title: recipe.title,
			ingredients: recipe.ingredients,
			steps: recipe.steps
		};

		//const insertInfo = 
		await recipeCollection.insertOne(newRecipeInfo);
		//if (insertInfo.insertedCount === 0) throw "Could not add recipe";
		// ^ Was causing bugs (lecture code)

		const newRecipe = await this.getRecipeById(id);
		return newRecipe;
	},

	async putRecipe(id, recipe){
		//Updates the specified recipe with by replacing 
		//the recipe with the new recipe content, 
		//and returns the updated recipe

		//Create new obj for "put" recipe
		const pRecipe = {};
		if(recipe.title) pRecipe.title = recipe.title;
		if(recipe.ingredients) pRecipe.ingredients = recipe.ingredients;
		if(recipe.steps) pRecipe.steps = recipe.steps;

		//For throwing, checking string title array ingredients, array steps
		if (!recipe.title) throw "You must provide a title";
		if (!recipe.ingredients) throw "You must provide ingredients";
		if (!recipe.steps) throw "You must provide steps";
		if((typeof recipe.title) != "string") throw "Title not of type string";
		if(!Array.isArray(recipe.ingredients)) throw "Ingredients not of type array";
		if(!Array.isArray(recipe.steps)) throw "Steps not of type array";
		// Test individual ingredients (names and amounts)
		recipe.ingredients.forEach((ingredient) => {
			if (!ingredient.name) throw "You must provide a name for each ingredient";
			if (!ingredient.amount) throw "You must provide an amount for each ingredient";
			if (typeof ingredient.name !== "string") throw "Ingredient name not a string";
			if (typeof ingredient.amount !== "string") throw "Ingredient amount not a string";
		})
		// Test individual steps (itself)
		recipe.steps.forEach((step) => {
			if (!step) throw "You must provide a step";
			if (typeof step !== "step") throw "Step not a string";
		})

		
		//if (insertInfo.insertedCount === 0) throw "Could not add recipe";
		// ^ Was causing bugs (lecture code)

		const recipeCollection = await recipes();
		await recipeCollection.updateOne({_id: id}, {$set: pRecipe});
		//return await
		const newRecipe = await this.getRecipeById(id);
		return newRecipe;
	},

	async patchRecipe(id, recipe) {
		//Create empty recipe obj
		let pRecipe = {}
		
		//For throwing, checking string title array ingredients, array steps
		//Since this is patch, if no error, copy pRecipe to recipe
		if(recipe.title){
			if (!recipe.title) throw "You must provide a title";
			if((typeof recipe.title) != "string") throw "Title not of type string";
			pRecipe.title = recipe.title;
		}
		
		if(recipe.ingredients){
			if (!recipe.ingredients) throw "You must provide ingredients";
			if(!Array.isArray(recipe.ingredients)) throw "Ingredients not of type array";
			recipe.ingredients.forEach((ingredient) => {
				if (!ingredient.name) throw "You must provide a name for each ingredient";
				if (!ingredient.amount) throw "You must provide an amount for each ingredient";
				if (typeof ingredient.name !== "string") throw "Ingredient name not a string";
				if (typeof ingredient.amount !== "string") throw "Ingredient amount not a string";
			})
			pRecipe.ingredients = recipe.ingredients;
		}
		if(recipe.steps){
			if (!recipe.steps) throw "You must provide steps";
			if(!Array.isArray(recipe.steps)) throw "Steps not of type array";
			recipe.steps.forEach((step) => {
				if (!step) throw "You must provide a step";
				if (typeof step !== "step") throw "Step not a string";
			})
			pRecipe.steps = recipe.steps;
		}
		
		const recipeCollection = await recipes();
		//(not needed?) let patchedRecipe =
		await recipeCollection.findOneAndUpdate({_id: id}, {$set: pRecipe});
		//return await
		const newRecipe = await this.getRecipeById(id);
		return newRecipe;

	},

	async deleteRecipe(id){
		if (!id) throw "You must provide an id";
		if((typeof id) != "string") throw "Id not of type string";

		const recipeCollection = await recipes();

		await recipeCollection.deleteOne({_id: id});
	}
};

module.exports = exportedMethods;