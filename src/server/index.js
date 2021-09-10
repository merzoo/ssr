import render from "./render";

const express = require("express");
const app = express();

app.use(express.static("public"));

app.get("*", (req, res) => {
  render(req, res);
});

app.listen(1234, () => {
  console.log(`app is listening at port 1234`);
});
