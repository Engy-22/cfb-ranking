const path = require('path');
const webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  mode: 'development',
  entry: './app/src/app.js',
  output: {
    path: path.resolve(__dirname,'app/public'),
    filename: 'js/app.js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.scss$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'sass-loader'
        ],
      },
    ]
  },
  resolve: {
    alias: {
      'public': path.resolve(__dirname, 'app/public')
    }
  },
  plugins: [
    new VueLoaderPlugin()
  ]
};