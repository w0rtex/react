const prod = process.env.NODE_ENV === "production";

const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode: prod ? "production" : "development",
    entry: "./src/index.tsx",
    output: {
        path: __dirname + "/dist/",
    },
    module: {
        // TypeScript loader
        rules: [
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                resolve: {
                    extensions: [".ts", ".tsx", ".js", ".json"],
                },
                use: "ts-loader",
            },
            // SASS / CSS / SCSS / Loader
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    "style-loader",
                    // Translates CSS into CommonJS
                    "css-loader",
                    // Compiles Sass to CSS
                    "sass-loader",
                ],
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                    },
                ],
            },
        ],
    },
    devtool: prod ? undefined : "source-map",
    plugins: [
        new HtmlWebpackPlugin({
            template: "index.html",
        }),
        new MiniCssExtractPlugin(),
    ],
};
