var WebpackStripLoader = require("strip-loader");
var webConfig = require("./webpack.config");
var stripLoader = {
  test: ["/\.js$/, /\.es6$/"],
  exclude: /node_modules/,
  loader: WebpackStripLoader.loader('console.log', 'debugger')
}
webConfig.module.loaders.push(stripLoader);
module.exports = webConfig;
