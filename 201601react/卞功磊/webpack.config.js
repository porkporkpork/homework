var path=require('path');
var webpack=require('webpack');
var ExtractTextPlugin=require("extract-text-webpack-plugin");
var HtmlWebpackPlugin=require('html-webpack-plugin');
var publicPath=path.resolve(__dirname,'public');

module.exports={
    entry:{
        index: [
            'webpack/hot/dev-server',
            'webpack-dev-server/client?http://localhost:8080',
            path.resolve(__dirname, 'app/index.js')
        ],
        vendor:["react","react-dom"]
    },

    output:{
        path:publicPath,
        filename:'[name].js?[hash]'
    },
    resolve:{
      extension:['','.js','.jsx','.json']
    },
    devtool:'cheap-module-source-map',
    module:{
        loaders:[
            {
                test:/\.js$/,
                loaders:['react-hot','babel'],
                exclude:path.resolve(__dirname,'node_modules')
            },
            {
                test:/\.css/,
                loader:ExtractTextPlugin.extract("style-loader","css-loader")
            },
            {
                test:/\.less/,
                loader:ExtractTextPlugin.extract("style-loader","css-loader!less-loader")
            },
            {
                test:/\.(png|jpg)$/,
                //8K以下直接以base64解析
                loader:'url-loader?limit=8192'
            },
            {
                test:/\.(woff|woff2|ttf|svg|eot)(\?v=\d+.\d+\.\d+)?$/,
                loader:'url?limit=10000'
            }
        ]
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js'),
        new ExtractTextPlugin("[name].css?[hash]",{
            allChunks:true,
            disable:false
        }),
        new HtmlWebpackPlugin({
            title:'reactTest',
            template:'./app/index.html'
        })
    ]
};
