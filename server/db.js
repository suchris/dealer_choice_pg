const pg = require("pg");

const db = new pg.Client(
  process.env.DATABASE_URL || "postgres://localhost/recipe_db"
);

db.connect()
  .then(() => console.log("Connect to database"))
  .catch((err) => console.log(err));

module.exports = db;
