const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

require('dotenv').config();
const process = require('process');

module.exports = () => {
  const { PORT = 3000, NODE_ENV = 'development' } = process.env;

  return {
    // front + back
    entry: {
      server: './backend-ssr/server',
      client: './frontend-ssr/src/index.js',
    },

    target: 'node',

    output: {
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
        // js
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
          },
        },
        {
          test: /\.(png|svg|jpg|gif)$/,
          //building with default file-extensions
          type: 'asset/resource',
          generator: {
            filename: 'images/[hash][ext][query]',
          },
        },
        {
          test: /\.(woff(2)?|eot|ttf|otf)$/,
          //building with default file-extensions
          type: 'asset/resource',
          generator: {
            filename: 'fonts/[hash][ext][query]',
          },
        },

        // css
        {
          test: /\.css$/,
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
  };
};
