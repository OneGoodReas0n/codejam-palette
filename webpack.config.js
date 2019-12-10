const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackAssetsPlugin = require('html-webpack-assets-plugin');

module.exports = {
    entry: './index.js',

    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'build.js',
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env'],
                        },
                    },
                    {
                        loader: 'eslint-loader',
                    },
                ],
            },

            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    {
                        loader: 'css-loader',
                    },
                    {
                        loader: 'sass-loader',
                    },
                ],
            },

            {
                test: /\.(png|jpe?g|gif|svg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: 'assets',
                        },
                    },
                ],
            },
        ],
    },

    plugins: [
        new MiniCssExtractPlugin({
            filename: 'style.css',
        }),

        new HtmlWebpackPlugin({
            template: 'index.html',
        }),

        new HtmlWebpackAssetsPlugin({
            assets: {
                './assets': './assets',
            },
            link: [
                { href: '/assets/icons/arrows-alt.svg', rel: 'icon' },
                { href: '/assets/icons/exchange-alt.svg', rel: 'icon' },
                { href: '/assets/icons/eye-dropper.svg', rel: 'icon' },
                { href: '/assets/icons/fill-drip.svg', rel: 'icon' },
                { href: '/assets/icons/pencil.svg', rel: 'icon' },
                { href: '/assets/icons/search-icon.svg', rel: 'icon' },
            ],
        }),
    ],

    mode: 'development',
};
