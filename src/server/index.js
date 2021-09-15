const express = require("express");
const app = express();

app.use(express.static("public"));

import render from "./render";

app.get("*", (req, res) => {
  render(req, res);
});

app.listen(1234, () => {
  console.log(`app is listening at port 1234`);
});
