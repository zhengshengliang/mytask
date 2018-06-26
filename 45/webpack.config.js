const path = require('path');

module.exports = {
  entry: './src/js/app.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist/js'),
  },
  module: {
    rules: [{
      test: /\.js$/,
      loader: 'babel-loader',
      options: {
        presets: ['env']     
      },
      exclude: /node_modules/
    }, {
      test: /\.scss$/,
      use: [{
        loader: "style-loader"                      
      }, {
        loader: "css-loader"
      }, {
        loader: "sass-loader",
      }]  
    }]
  }
};
