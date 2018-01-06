module.exports = {
  entry: ["./js/utils","./js/app"],
  output: {
    filename: "bundle"
  },
  watch: true,

  module: {
    loaders: [
      {
        test: /\.es6$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "jshint-loader",
        enforce: "pre"
      }
    ]
  },

  resolve: {
    extensions: ['.js', '.es6', '*']
  }
}
