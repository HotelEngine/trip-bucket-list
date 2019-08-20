const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: {
        app: path.resolve(__dirname, 'src/app/index.js'),
        vendor: ['angular']
    },
    resolve: {
        alias: {
            // allow angular app to import from react-components
            'react-components': path.join(__dirname, '/react-components/index.js'),
            'Redux': path.join(__dirname, '/Redux')
        },
        extensions: ['.js', '.jsx']
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'public')
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.html$/,
                loader: 'html-loader'
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.scss$/,
                include: path.resolve(__dirname, 'src/app/styles'),
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            hmr: process.env.NODE_ENV === 'development',
                        },
                    },
                    {
                        loader: "css-loader" // translates CSS into CommonJS
                    },
                    {
                        loader: "sass-loader", // compiles Sass to CSS
                    }
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css'
        })
    ]
}