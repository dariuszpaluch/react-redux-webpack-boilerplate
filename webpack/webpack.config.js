var webpack = require('webpack')
var OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {
    entry:  './src/index.jsx',
    output: {
        path:     'builds',
        filename: 'bundle.js',
        publicPath: 'builds/',
    },
    module: {
        loaders: [
          {
              test: /\.js/,
              loader: 'babel',
              exclude: /node_modules/,
              query: {
                  presets: ['es2015']
              }
          },
          {
             //tell webpack to use jsx-loader for all *.jsx files
             test: /\.jsx$/,
             loader: 'jsx-loader?insertPragma=React.DOM&harmony'
           },
          {
              test:   /\.scss/,
              loaders: ['style', 'css', 'sass'],
          },
          {
              test:   /\.html/,
              loader: 'html',
          }
        ],
    },
    externals: {
        //don't bundle the 'react' npm package with our bundle.js
        //but get it from a global 'React' variable
        'react': 'React'
    },
    resolve: {
      extensions: ['', '.js', '.jsx']
    },
    plugins: [
    new OpenBrowserPlugin({ url: 'http://localhost:8090/webpack-dev-server/index.html' })
    ]
};