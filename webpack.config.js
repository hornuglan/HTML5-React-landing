const path = require('path');
const extractTextPlugin = require('extract-text-webpack-plugin');
const htmlWebpackPlugin = require('html-webpack-plugin');
const react = require('react');
const reactDOM = require('react-dom');

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },

  module: {
    rules: [
      {
        test: /\.scss$/,
        use: extractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      },
      /*{
        test: /\.js$/,
        exclude: [/node_modules/],
        use: [{
          loader: 'babel-loader',
          options: {
            presets: ['env', 'react']
          }
        }]
      }*/
       /* {
          test: /\.(js|jsx)$/,
            exclude: /node_modules/,
          use: {
            loader: 'babel-loader'
          }
        },*/
    /*  {
        test: /\.html$/,
        exclude: [/node_modules/, require.resolve('./src/index.html')],
        use: [
          {
            loader: 'file-loader',
            query: {
              name: '[name].[ext]'
            }
          }
        ]
      }*/
    ]
  },

  plugins: [
    new extractTextPlugin('style.css'),
   /* new htmlWebpackPlugin({
      template: "./src/index.html",
      filename: "./src/index.html"
    })*/
  ]
};
