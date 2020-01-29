var path = require('path')
var webpack = require('webpack')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

var PROD = (process.env.NODE_ENV === 'production')

module.exports = {
  entry: {
    'vue-text-roll.js': './src/index.js',
    'vue-text-roll.min.js': './src/index.js'
  },
  output: {
    filename: '[name]',
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    library: ['vue-text-roll'],
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.vue$/,
        use: {
          loader: 'vue-loader'
        }
      }
    ]
  },
  plugins: PROD ? [
    new UglifyJsPlugin({
      include: /\.min\.js$/,
    })
  ] : []
}
