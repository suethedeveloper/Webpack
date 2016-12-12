//hot module replacement
var path = require('path'); //where to save file
var webpack = require('webpack');

module.exports = {
    entry: [
        './src/index.js',
        'webpack/hot/dev-server',
        'webpack-dev-server/client?http://localhost:8080'
    ],
    plugins: [ new webpack.HotModuleReplacementPlugin() ], //HotModuleReplacementPlugin is very big which means dev env only. no production
    output: {
        path: path.join(__dirname, 'dist'), //join with current directory, name dist
        publicPath: '/dist/', //public url of the output files in browser. if you have a script/link tag in header it's going to add '/dist/' before the file
        filename: 'bundle.js'
    }
};

//----- ORIGINAL ---------//
//var path = require('path'); //where to save file
//
//module.exports = {
//    entry: './src/index.js',
//    output: {
//        path: path.join(__dirname, 'dist'), //join with current directory, name dist
//        publicPath: '/dist/', //public url of the output files in browser. if you have a script/link tag in header it's going to add '/dist/' before the file
//        filename: 'bundle.js'
//    }
//};