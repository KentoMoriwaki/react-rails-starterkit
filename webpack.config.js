var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'eval',
  context: path.resolve('./frontend'),
  entry: {
    javascriptt: [
      'webpack-dev-server/client?http://localhost:5100',
      'webpack/hot/only-dev-server',
      'react-hot-loader/patch',
      './src/index'
    ],
    html: './index.html'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  output: {
    path: path.resolve('./public/dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loaders: ['babel'],
      exclude: /node_modules/,
    }, {
      test: /\.css$/,
      loaders: ['style', 'css']
    }, {
      test: /\.html$/,
      loader: 'file?name=[path][name].[ext]'
    }]
  }
};
