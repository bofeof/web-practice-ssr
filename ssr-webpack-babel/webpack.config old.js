const path = require('path');
// const nodeExternals = require('webpack-node-externals')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  // front + back
  entry: {
    server: path.resolve(__dirname, '../backend-ssr/server'),
    client: path.resolve(__dirname, '../frontend-ssr/src/index')
  },

  target: 'node',

  output: {
    // выводим транспилированные файлы  в build/ server.js и client.js
    // клиента подключаем через <script> в public/index.html
    // запуск сервера через package
    path: path.resolve(__dirname, './build-ssr'),
    filename: '[name].js',
  },

  mode: 'development',

  devServer: {
    static: path.resolve(__dirname, './build-ssr'),
    compress: true,
    port: 3000,
    open: true,
  },

  resolve: {
    extensions: ['.*', '.js', '.jsx', '.tsx', '.ts'],
  },

  module: {
    rules: [
      // регулярное выражение, которое ищет все js файлы
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        // для изображений
        test: /\.(png|svg|jpg|gif|jpeg)$/,
        //переносить исходные файлы в конечную сборку в том же формате
        type: 'asset/resource',
        generator: {
          filename: 'images/[hash][ext][query]',
        },
      },
      {
        // для шрифтов
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
        use: [MiniCssExtractPlugin.loader, {
          loader: 'css-loader',
          options: { importLoaders: 1 }
        }]
      },
      'postcss-loader'
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './frontend-ssr/public/index.html',
      chunks: ['client'],
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin()
  ],
};
