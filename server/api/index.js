const db = require("../db.js");
const router = require("express").Router();

// connect to get all recipes
router.get("/recipes", async (req, res, next) => {
  try {
    const SQL = `SELECT * FROM recipe;`;
    const recipes = await db.query(SQL);
    res.status(200).send(recipes.rows);
  } catch (ex) {
    next(ex);
  }
});

router.get("/recipes/:id", async (req, res, next) => {
  try {
    const SQL = `SELECT * FROM recipe WHERE id = ${req.params.id};`;
    const recipe = await db.query(SQL);
    res.status(200).send(recipe.rows);
  } catch (ex) {
    next(ex);
  }
});

router.post("/recipes", async (req, res, next) => {
  try {
    debugger;
    const { title, videourl, note } = req.body;
    let SQL = `INSERT INTO recipe(title, videourl, note) VALUES ('${title}', '${videourl}', '${note}') RETURNING id;`;
    const id = await db.query(SQL);

    res.status(201).redirect(`/recipes/${id}`);
  } catch (ex) {
    next(ex);
  }
});

router.delete("/recipes/:id", async (req, res, next) => {
  try {
    let SQL = `SELECT id from recipe WHERE id = ${req.params.id}`;
    const id = await db.query(SQL);
    if (id) {
      SQL = `DELETE FROM recipe WHERE id = '${id}';`;
      await db.query(SQL);
      res.redirect("/recipes");
    }
    res.status(404).send({ message: `Recipe with id ${id} is not found` });
  } catch (ex) {
    next(ex);
  }
});

module.exports = router;
