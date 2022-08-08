'use strict'
const path = require('path')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  context: path.resolve(__dirname, '../'),
  mode: process.env.NODE_ENV,
  entry: {
    app: './src/App.js'
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['.js'],
    alias: {
      '@': resolve('src')
    },
  },
  // module: {
  //   rules: [
  //     {
  //       test: /\.(sc|c|sa)ss$/,
  //       use: [
  //         {
  //           loader: 'style-loader',
  //         },
  //         {
  //           loader: 'css-loader',
  //           options: {
  //             sourceMap: true,
  //             importLoaders: 2,
  //           },
  //         },
  //         // You have to put in after `css-loader` and before any `pre-precessing loader`
  //         { loader: 'scoped-css-loader' },
  //         {
  //           loader: 'sass-loader',
  //         },
  //       ],
  //     },
  //   ]
  // }
}

const merge = require('webpack-merge')
const customWebpackConfig = require('./webpack.custom')
module.exports = merge(customWebpackConfig, module.exports)
