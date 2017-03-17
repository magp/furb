var path = require('path');
var webpack = require('webpack');

module.exports = {
  context: path.join(__dirname, '../app'),
  target: 'web',
  entry: [
    './client/client.jsx'
  ],
  output: {
    path: path.join(__dirname, '../dist'),
    filename: 'client.js',
    publicPath: './'
  },
  plugins: [
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
      },
      sourceMap: true
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
  },
  devtool: 'source-map'
};
