const path = require("path");

/** @type {import('webpack').Configuration} */
module.exports = {
  entry: path.resolve(__dirname, "./src/index.ts"),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'blackend.bundle.js',
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(jsx|js)$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.ts?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-typescript"]
          }
        }
      }
    ],
  },
  resolve: {
    aliasFields: ["node"],
    extensions: [".js", ".ts"],
  },
  target: "node"
};
