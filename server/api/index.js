const { client } = require("../db.js");
const router = require("express").Router();

// connect to get all recipes
router.get("/recipes", async (req, res, next) => {
  try {
    const SQL = `SELECT * FROM recipe;`;
    console.log(SQL);
    const recipes = await client.query(SQL);
    res.status(200).send(recipes.rows);
  } catch (ex) {
    next(ex);
  }
});

router.get("/recipes/:id", async (req, res, next) => {
  try {
    const SQL = `SELECT * FROM recipe WHERE id = ${req.params.id};`;
    console.log(SQL);
    const recipe = await client.query(SQL);
    res.status(200).send(recipe.rows);
  } catch (ex) {
    next(ex);
  }
});

router.get("/tags", async (req, res, next) => {
  try {
    const SQL = `SELECT * FROM tag;`;
    console.log(SQL);
    const tags = await client.query(SQL);
    res.status(200).send(tags.rows);
  } catch (ex) {
    next(ex);
  }
});

router.get("/tags/:id", async (req, res, next) => {
  try {
    const SQL = `SELECT * FROM tag WHERE id = ${req.params.id};`;
    console.log(SQL);
    const tag = await client.query(SQL);
    res.status(200).send(tag.rows);
  } catch (ex) {
    next(ex);
  }
});

router.post("/recipes", async (req, res, next) => {
  try {
    const { title, videoUrl, note, tags } = req.body;
    let SQL = `INSERT INTO recipe(title, videoUrl, note) VALUES ('${title}', '${videoUrl}', '${note}') RETURNING id;`;
    const id = await client.query(SQL);
    for (let i = 0; i < tags.length; i++) {
      SQL = `SELECT id FROM tag WHERE name = '${tags[i]};`;
      let tagId = await client.query(SQL);
      if (!tagId) {
        SQL = `INSERT INTO tag(name) VALUES('${tag[i]}') RETURN id;`;
        tagId = await client.query(SQL);
      }
      SQL = `INSERT INTO tag_recipe(tag_id, recipe_id) VALUES (tagId, id);`;
      await client.query(SQL);
    }
    res.status(201).redirect("/recipes/:" + id);
  } catch (ex) {
    next(ex);
  }
});

router.delete("/recipes/:id", async (req, res, next) => {
  try {
    let SQL = `SELECT id from recipe WHERE id = ${req.params.id}`;
    const id = await client.query(SQL);
    if (id) {
      SQL = `DELETE FROM tag_recipe WHERE recipe_id = '${id}';`;
      await client.query(SQL);
      SQL = `DELETE FROM recipe WHERE id = '${id}';`;
      await client.query(SQL);
      res.redirect("/recipes");
    }
    res.status(404).send({ message: `Recipe with id ${id} is not found` });
  } catch (ex) {
    next(ex);
  }
});

module.exports = router;
