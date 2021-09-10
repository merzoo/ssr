const path = require("path");
const { merge } = require("webpack-merge");
const base = require("./webpack.base");

module.exports = merge(base, {
  target: "node",
  entry: "./src/server/index.js",
  output: {
    path: path.resolve("build"),
    filename: "server.js",
  },
});
