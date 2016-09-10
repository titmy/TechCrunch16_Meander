var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'src/client/public');
var APP_DIR = path.resolve(__dirname, 'src/client/app');

var config = {
  entry: APP_DIR + '/index.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module: {
  	loaders: [
      { test: /\.css$/, loader: 'style!css' },
      { test: /\.jsx?$/, include: APP_DIR, loader: 'babel' },
      { test: /\.scss$/, loaders: ['style', 'css', 'sass'] },
    ]
  }
};

module.exports = config;