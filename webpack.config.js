const path = require('path');
const themeWatcher = require('@sallaapp/theme-utils/WatcherPlugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const WebpackBuildNotifierPlugin = require('webpack-build-notifier');
const RemovePlugin = require('remove-files-webpack-plugin');



module.exports = {
    entry  : {
        main           : './assets/js/main.js',
        inner          : './assets/js/inner.js',
        home           : './assets/js/home.js',
        salla_login    : './assets/js/partials/salla-login.js',
        filepond       : './assets/js/plugins/filepond/filepond.js',
        filepond_styles: './assets/js/plugins/filepond/filepond.scss',
        home_styles    : './assets/styles/home.scss',
        main_styles    : './assets/styles/main.scss',
    },
    output : {
        path : path.resolve(__dirname, "assets", "dist"),
        clean: true,
        // filename: '[name]',
    },
    module : {
        rules: [
            {
                test: /\.js$/,
                use : ['babel-loader']
            },
            {
                test: /\.(s(a|c)ss)$/,
                use : [
                    MiniCssExtractPlugin.loader,
                    {loader: "css-loader", options: {url: false}},
                    "postcss-loader",
                    "sass-loader",
                ]
            },
        ]
    },
    plugins: [
        new themeWatcher(),
        //new FixStyleOnlyEntriesPlugin(),
        new RemovePlugin({
            after: {
                root: './assets/dist',
                include: [
                    'filepond_styles.js',
                    'home_styles.js',
                    'main_styles.js'
                ]
            }
        }),
        new MiniCssExtractPlugin(),
        new WebpackBuildNotifierPlugin({
            title: "Salla Theme",
            logo : path.resolve("./assets/images/favicon/apple-icon.png"),
            // suppressSuccess: true, // don't spam success notifications
            successSound: false,
        }),
    ],
};