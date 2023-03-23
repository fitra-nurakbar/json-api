const express = require("express");
const app = express();
const data = require("./data.json");
const cors = require("cors");

const port = 5000

app.use(cors())

app.get("/", function (req, res) {
  res.json(data);
});

app.listen(port, () => {
  console.log(`Running on port ${port}`)
});

module.exports = app;
