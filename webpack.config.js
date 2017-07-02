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
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)/,
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
