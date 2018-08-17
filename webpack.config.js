const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require('webpack');

const htmlWebPackPlugin = new HtmlWebPackPlugin({
    template : './src/index.html',
    filename: './index.html'
});

const miniCssExtractPlugin = new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    });

const hotModuleReplacementPlugin = new webpack.HotModuleReplacementPlugin();

module.exports = {
    output:{
        filename: 'bundle.js'
    },
    module: {
        rules:[
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.html$/,
                use: [{
                    loader: 'html-loader'
                }]
            },
            {
                test: /\.css$/,
                use:[MiniCssExtractPlugin.loader, "css-loader"]
            }
        ]
    },
    plugins: [
        htmlWebPackPlugin, miniCssExtractPlugin,hotModuleReplacementPlugin
    ],
    devServer:{
        hot:true
    }
};