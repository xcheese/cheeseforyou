var webpack = require('webpack');
var fs = require('fs');
var path = require('path');
var glob = require('glob');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
require("babel-polyfill");

function entries (globPath) {
    var files = glob.sync(globPath);
    var entries = {}, entry, dirname, basename;
    for (var i = 0; i < files.length; i++) {
        entry = files[i];
        dirname = path.dirname(entry);
        basename = path.basename(entry, '.js');
        entries[basename] = entry;
    }
    return entries;
}

function isProduction() {
    return process.env.NODE_ENV && process.env.NODE_ENV.replace(/(\s*$)/g,"") === 'production';
}
var pluginsConfig = [
    new ExtractTextPlugin('./css/[name].css',{allChunks: true}),
    new webpack.optimize.CommonsChunkPlugin({ //CommonsChunkPlugin 插件可以打包所有文件的共用部分生产一个commons.js文件
        name: 'commons',
        path: __dirname + '/public/dist/entry/',
        filename: 'commons.js',
        minChunks: 3, //最少引用3次才会提取出来
    })
]

var aliasConfig = {
    vue:__dirname + '/node_modules/vue/dist/vue.esm.js', //优化别名，本地开启devtool
}
console.log(entries(__dirname + '/views/entry/*.js'))
module.exports = {
    entry: entries(__dirname + '/views/entry/*.js'), //通配多入口
    // entry:
    //     { index: ['babel-polyfill','/Users/cheese/Documents/cheeseforyou/src/server/views/entry/index.js'] },
    output: {
        path: __dirname + '/public/dist/entry/',
        filename: '[name].js?[chunkhash]'   //关于chunkhash 和 hash的区别：http://www.cnblogs.com/ihardcoder/p/5623411.html
    },
    plugins: pluginsConfig,
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias:aliasConfig,
    },
    module: {
        rules: [
            // {
            //     test: /\.scss$/,
            //     loader: 'style-loader!css-loader!sass-loader'
            // },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options:{
                    extractCSS: true
                }
            }
        ]
    }
}
