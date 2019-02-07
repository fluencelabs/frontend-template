const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    // use index.js as entrypoint
    entry: {
        app: ['./index.js']
    },
    devServer: {
        contentBase: './bundle',
        hot: true
    },
    mode: "development",
    // build all code in `bundle.js` in `bundle` directory
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'bundle')
    },
    plugins: [
        // create `index.html` with imported `bundle.js`
        new HtmlWebpackPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ]
};
