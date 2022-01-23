const path = require("path");

module.exports = {
  mode: "development",
  entry: "./Section_16/src/index.js",
  output: {
    path: path.resolve(__dirname, "Section_16/dist"),
    filename: "bundle.js",
  },
  watch: true,
};
