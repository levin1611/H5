var webpack = require('webpack');
var path =require('path')
var HtmlwebpackPlugin = require("html-webpack-plugin");
var CleanWebpackPlugin = require("clean-webpack-plugin");
module.exports = {
    mode:'production',
    entry:{
        index: './js/index.js'
    },
    output: {
        path: __dirname+'/bundle',
        filename: 'bundle.js'
    },
    module: {
        rules:[
            { 
              test: /\.css$/, 
              use: [
                "style-loader",
                "css-loader"
              ]
            },
            {
                test:/\.(png)|(jpg)|(gif)$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            limit:5000,   //大于50K的 都打包
                            name:"[hash:8].[name].[ext]",
                            publicPath:"./images",  //替换CSS引用的图片路径 可以替换成爱拍云上的路径
                            outputPath:"./images"        //生成之后存放的路径
                        }
                    }
                   
                ]
            },
            {
                test:/\.html$/,
                use:[{
                    loader:'html-loader',
                    options:{
                        attrs: ['img:src', 'img:data-src', 'img:data-original','audio:src'],
                        minimize:true
                    }
                }]
            }
        ]
    },
    
    plugins:[
        new CleanWebpackPlugin(['bundle']),
        new HtmlwebpackPlugin({
            filename:"./index.html",
            template: "./index.html",
            inject:'body',
            minify:{
                removeAttributeQuotes:true
            },
            hash:true
        })
    ]
};