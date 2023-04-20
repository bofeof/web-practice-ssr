const path = require('path')
const nodeExternals = require('webpack-node-externals')

module.exports = {
  // entry: './backend-ssr/server.js',
  entry: {
    client: './backend-ssr/server.js',
    bundle: '../frontend-ssr/server-build/bundle.js'
  },

  target: 'node',

  externals: [nodeExternals()],

  output: {
    // выводим транспилированный проект в server-build/server.js
    path: path.resolve('./backend-ssr/server-build'),
    filename: 'server.js'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  }
}
