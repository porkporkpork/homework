var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var publicPath = path.resolve(__dirname, 'public');

module.exports = {
  entry:{
    index: [
      'webpack/hot/dev-server',
      'webpack-dev-server/client?http://localhost:8080',
      path.resolve(__dirname, 'app/index.js')
    ],
    vendor: ['react','react-dom']
  },
  output: {
    path: publicPath,
    filename: 'bundle.js'
  },
  resolve: {
    extension: ['', '.js', '.jsx', '.json']
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['react-hot','babel'],
        exclude: path.resolve(__dirname,'node_modules')
      },
      {
        test: /\.css/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader")
      },
      {
        test: /\.sass/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader!sass-loader?indentedSyntax")
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'url-loader?name=static/[name].[ext]&limit=8192'
      },
      {
        test: /\.(woff|woff2|ttf|svg|eot)(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url?limit=10000"
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js?[hash]'),
    new ExtractTextPlugin("[name].css?[hash]", {
        allChunks: true,
        disable: false
    }),
    new HtmlWebpackPlugin({
      title: 'piyafang-react',
      template: './app/index.html',
    })
  ],
  devtool: 'cheap-module-source-map'
};
