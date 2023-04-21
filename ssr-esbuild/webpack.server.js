const path = require('path')
// const nodeExternals = require('webpack-node-externals')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  // front + back
  entry: {
    server: './backend-ssr/server',
    client: './frontend-ssr/src/index'
  },

  target: 'node',

  // externals: [nodeExternals()],
  // externalsPresets: { node: true }

  output: {
    // выводим транспилированные файлы  в build/ server.js и client.js
    // клиента подключаем через <script> в public/index.html
    // запуск сервера через package
    path: path.resolve('./build-ssr'),
    filename: '[name].js'
  },

  resolve: {
    extensions: ['.*', '.js', '.jsx', '.tsx', '.ts']
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './frontend-ssr/public/index.html',
      chunks: ['client']
    })
  ]
}
