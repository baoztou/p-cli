const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: {
        main: "./src/main.js",
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name]-[chunkhash].bundle.js",
        publicPath: "", // publicPath是生成的dist中的html文件中自动引入js和css文件时在最前面拼的一部分字符串
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: "babel-loader",
                },
            },
            {
                test: /\.(png|jpg|jpeg|gif)$/,
                use: [{ loader: "file-loader" }],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html",
            filename: "index.html",
            chunks: ["main"], // 生成的index.html中自动引入的组件，这里设置的是entry中定义的key
        }),
    ],
    resolve: {
        //配置免后缀的文件类型
        extensions: [".js", ".jsx", ".vue", ".css", ".less", ".scss"],
        //为全路径配置缩写@
        alias: {
            "@": path.resolve(__dirname, "src"),
        },
    },
};
