const express = require("express");
const app = express();
const data = require("./data.json");

const port = 5000

app.get("/", function (req, res) {
  res.json(data);
});

app.listen(port, () => {
  console.log(`Running on port ${port}`)
});

module.exports = app;
