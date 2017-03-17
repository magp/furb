var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
  entry: [
    'react-hot-loader/patch',
    'webpack-hot-middleware/client',
    './app/client/clientDev.jsx'
  ],
  output: {
    path: path.join(__dirname, '../static'),
    filename: 'client.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': "'development'"
      }
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
  ],
  module: {
    loaders: [
    // js
    {
      test: /\.jsx?$/,
      loaders: ['babel-loader?presets[]=es2015,presets[]=react,plugins[]=react-hot-loader/babel'],
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
    extensions: ['.js', '.jsx'],
  },
  watchOptions: {
    aggregateTimeout: 300,
  }
};