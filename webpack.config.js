module.exports = {
  entry: "./index.js",
  output: {
    filename: "./public/bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.css/,
        loader: "style-loader!css-loader"
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
