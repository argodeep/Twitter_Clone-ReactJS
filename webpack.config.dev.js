const HtmlWebPackPlugin = require("html-webpack-plugin");
const CopyWebPackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const WorkboxWebpackPlugin = require("workbox-webpack-plugin");
const path = require('path');

module.exports = {
    entry: path.join(__dirname, '/src/index.js'),
    output: {
        filename: 'static/js/[id].[hash].js',
        path: path.join(__dirname, '/build'),
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                },
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader"
                    }
                ]
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    'style-loader',
                    // Translates CSS into CommonJS
                    'css-loader',
                    // Compiles Sass to CSS
                    'sass-loader',
                ],
            },
            {
                test: /\.css$/i,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: 'static/css',
                        },
                    },
                    'css-loader'
                ],
            },
            {
                test: /\.(png|svg|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: 'static/media'
                        }
                    }
                ],

            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./public/index.html",
            filename: "./index.html",
            publicPath: '/',
            base: '/'
        }),
        new CopyWebPackPlugin({
            patterns: [
                {
                    from: 'public',
                    to: '',
                    globOptions: {
                        ignore: ['*.html']
                    }
                }
            ],
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin(
            {
                filename: "static/css/[id].css",
                chunkFilename: 'static/css/[id].css'
            }
        ),
        // new WorkboxWebpackPlugin.GenerateSW({
        //     clientsClaim: true,
        //     skipWaiting: true,
        //     exclude: [/\.html$/]
        // }),
    ],
    // optimization: {
    //     moduleIds: 'hashed',
    //     runtimeChunk: 'single',
    //     splitChunks: {
    //         cacheGroups: {
    //             vendor: {
    //                 test: /[\\/]node_modules[\\/]/,
    //                 name: 'vendors',
    //                 chunks: 'all',
    //             },
    //         },
    //     },
    // }
    devServer: {
        historyApiFallback: { disableDotRule: true }
    },
    resolve: {
        alias: {
            assets: path.resolve(__dirname, 'src/assets/'),
            app: path.resolve(__dirname, 'src/app/')
        }
    },
    watchOptions: {
        ignored: /node_modules/
    }
};