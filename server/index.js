const { client, syncAndSeed } = require("./db.js");
const express = require("express");
const { static } = express;
const path = require("path");
const volleyball = require("volleyball");

const app = express();

// Logging middleware
app.use(volleyball);

// Body parsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Staic file serving middleware
app.use("/public", static(path.join(__dirname, "../public")));

// Routes access via AJAX
app.use("/api", require("./api"));

// Sends index.html
app.get("/", (req, res, next) => {
  res.sendFile(path.join(__dirname, "..", "client", "index.html"));
});

// Error catching
app.use((err, req, res, next) => {
  console.error(err, typeof next);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || "Internal server error.");
});

const init = async () => {
  try {
    await client.connect();
    await syncAndSeed();
    console.log("Connect and seeded database");
    const port = process.env.PORT || 3000;
    app.listen(port, () =>
      console.log(`
          
          Listening on port ${port}

          http://localhost:${port}/
          
    `)
    );
  } catch (error) {
    console.log(`There's problem starting up`, error);
  }
};

init();
