const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


module.exports = {
    mode:'development',
    entry: './src/index.js',
    output:{
        path: path.resolve(__dirname, './dist'),
        filename: '[name].[contenthash].js', 
        //assetModuleFilename:'assets/img/[hash][ext][query]'
    },
    
    resolve: {
        extensions:['js']
    },

    module: {
        rules:[
            //Babel
            {
                test:/\.m?js$/,
                exclude: /node_modules/,
                use:{
                    loader: 'babel-loader'
                }
            },
            //CSS
            {
                test: /\.css$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader"
                ],
            },
            //Image
            {
                test: /\.(png|svg|jpg|jpeg)$/i,
                type: 'asset/resource',
                generator: {
                  filename: 'assets/img/[hash][ext][query]',
                },
            },

        ]
    },

    plugins:[
        //HTML
        new HtmlWebpackPlugin({
            inject: true,
            template: './public/index.html',
            filename: 'index.html'
        }),
        //Css
        new MiniCssExtractPlugin({
            filename:'assets/[name].[contenthash].css'
        }),
    ],


}