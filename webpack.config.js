const path = require('path');

module.exports = {
  entry: "./index.js",
  output: {
    filename: "./public/bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.css/,
        include: path.resolve(__dirname, "./app"),
        loader: "style-loader!css-loader"
      },
      {
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)/,
        include: path.resolve(__dirname, "./app"),
        loader: "url-loader"
      },
      {
        test: /\.js/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {
          presets: [ "react", "es2015" ]
        }
      }
    ]
  },
  resolve: {
    extensions: [ ".js" ]
  }
}
