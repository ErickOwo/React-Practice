const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname,"dist"),
        filename: "bundle.js",
        publicPath: "/"
    },
    mode: "development",
    resolve: {
        extensions: [".js",".jsx"],
        alias: {
            "@images": path.resolve(__dirname,"src/assets/images"),
            "@styles": path.resolve(__dirname,"src/styles"),
            "@components": path.resolve(__dirname,"src/components"),
            "@containers": path.resolve(__dirname,"src/containers"),
            "@pages": path.resolve(__dirname,"src/pages"),
            "@routes": path.resolve(__dirname,"src/routes")
        }
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.html$/,
                use: [
                    "html-loader"
                ]
            },
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    "css-loader"
                ]
            },
            {
                test: /\.png$/,
                type: "asset"
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html",
            filename: "./index.html"
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css"
        })
    ],
    devServer: {
        static: {
            directory: path.join(__dirname, "public")
        },
        compress: true,
        port: 3006,
        open: true,
        historyApiFallback: true
    }
}