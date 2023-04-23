const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

require('dotenv').config()
const process = require('process');

module.exports = () => {
  const {PORT = 3000, NODE_ENV='development'} = process.env

  return {
    // front + back
  entry: {
    server: './backend-ssr/server',
    client: './frontend-ssr/src/index.js',
  },

  target: 'node',

  output: {
    // выводим транспилированные файлы  в build/ server.js и client.js
    // клиента подключаем через <script> в public/index.html
    // запуск сервера через package
    path: path.resolve(__dirname, 'build-ssr'),
    filename: '[name].js',
  },

  mode: NODE_ENV,

  devServer: {
    static: path.resolve(__dirname, './build-ssr'),
    compress: true,
    port: PORT,
    open: true,
  },

  module: {
    rules: [
      // js файлы
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        //переносить исходные файлы в конечную сборку в том же формате
        type: 'asset/resource',
        generator: {
          filename: 'images/[hash][ext][query]',
        },
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf)$/,
        //переносить исходные файлы в конечную сборку в том же формате
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[hash][ext][query]',
        },
      },

      // css
      {
        test: /\.css$/,
        // при обработке этих файлов нужно использовать
        // MiniCssExtractPlugin.loader и css-loader
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: { importLoaders: 1 },
          },
          'postcss-loader',
        ],
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './frontend-ssr/public/index.html',
      chunks: ['client'],
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin(),
  ],
  }



};

