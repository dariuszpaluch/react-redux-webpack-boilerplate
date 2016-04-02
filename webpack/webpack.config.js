var webpack = require('webpack')

module.exports = {
    entry:  './src/',
    output: {
        path:     'builds',
        filename: 'bundle.js',
        publicPath: 'builds/',
    },
    module: {
        loaders: [
          {
              test: /\.js/,
              loader: 'babel-loader',
              exclude: /node_modules/,
              query: {
                  presets: ['es2015']
              }
          },
          {
              test:   /\.scss/,
              loader: 'style!css!sass',
              // Or
              loaders: ['style', 'css', 'sass'],
          },
          {
              test:   /\.html/,
              loader: 'html',
          }
        ],
    }
};