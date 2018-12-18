var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'weapp-pixi-loader.js',
        library: 'ResLoader',
        libraryTarget: 'umd'
    },
    externals: {
        'spark-md5' : 'spark-md5',
        'pixi.js': 'pixi.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    configFile: './babel.config.js'
                }
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'eslint-loader'
            }
        ]
    },
    stats: {
        colors: true
    },
    devtool: 'source-map'
};