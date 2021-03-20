const path = require("path")

module.exports = {
  entry: path.resolve(__dirname, "./src/index.tsx"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"]
  },
  module: {
    rules: [
      { test: /\.tsx?$/, loader: "ts-loader" }
    ]
  },
  devServer: {
    contentBase: './',
    inline: true,
    hot: true,
    port: 3000,
    host:"0.0.0.0"
  }
}
