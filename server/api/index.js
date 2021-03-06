const { client } = require("../db.js");
const router = require("express").Router();

// connect to get all recipes
router.get("/recipes", async (req, res, next) => {
  try {
    const SQL = `SELECT * FROM recipe;`;
    const recipes = await client.query(SQL);
    req.status(201).send(recipes);
  } catch (ex) {
    console.log(ex);
  }
});

router.get("/recipes/:id", async (req, res, next) => {
  try {
    const SQL = `SELECT * FROM recipe WHERE id = ${req.params.id};`;
    const recipe = await client.query(SQL);
    req.status(201).send(recipe);
  } catch (ex) {
    console.log(ex);
  }
});

module.exports = router;
