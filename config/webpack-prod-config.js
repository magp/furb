var path = require('path');
var webpack = require('webpack');
var htmlcopy = require('html-webpack-plugin');

module.exports = {
  devtool: 'source-map',
  entry: [
    './app/client.jsx'
  ],
  output: {
    path: path.join(__dirname, '../static'),
    filename: 'source.[hash].js',
    publicPath: './'
  },
  plugins: [
    new htmlcopy({
      template: 'app/index.html'
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': "'production'"
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false,
      },
      output:{
        comments: false
      }
    })
  ],
  module: {
    loaders: [
    // js
    {
      test: /\.jsx?$/,
      loaders: ['babel-loader?presets[]=es2015,presets[]=react'],
      include: path.join(__dirname, '../app')
    },
    // CSS
    {
      test: /\.scss$/,
      include: path.join(__dirname, '../app'),
      loader: 'style-loader!css-loader!sass-loader'
    }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  }
};
