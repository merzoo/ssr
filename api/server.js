const express = require("express");
const cors = require("cors");
const app = express();

app.use(
  cors({
    origin: "http://localhost:1234",
  })
);

const users = [
  {
    id: 1,
    name: "xiaoming",
  },
  {
    id: 2,
    name: "小米",
  },
];

app.get("/api/users", function (req, res) {
  res.json(users);
});

app.listen(4000, () => {
  console.log(111);
});
