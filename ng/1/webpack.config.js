
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: __dirname + '/src/app/index.js',
    output: {
        path: '/dist/',
        filename: 'bundle.js',
        publicPath: '/'
    },
    module: {

    },

    plugins:[

        new HtmlWebPackPlugin({
            template:__dirname+"/src/public/index.html",
            inject:"body"
        })

    ],
    devServer: {
        contentBase: '/.src/public',
        port: 7700,
    }
}