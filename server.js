const express = require("express");
const path = require("path");

const port = 3003;

const app = express();

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
