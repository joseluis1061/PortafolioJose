const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode:'production',
    entry: './src/index.js',
    output:{
        path: path.resolve(__dirname, './dist'),
        filename: 'main.js', 
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
        new MiniCssExtractPlugin(),
    ]

}