const { merge } = require("webpack-merge");
const base = require("./webpack.base.js");
const path = require("path");

module.exports = merge(base, {
    //定义环境为开发环境
    mode: "development",
    devtool: "inline-source-map",
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader",
                    },
                    { loader: "css-loader" },
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                                plugins: [require("autoprefixer")],
                            },
                        },
                    },
                ],
            },
            {
                test: /\.less$/,
                use: [
                    {
                        loader: "style-loader",
                    },
                    { loader: "css-loader" },
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                                plugins: [require("autoprefixer")],
                            },
                        },
                    },
                    { loader: "less-loader" },
                ],
            },
        ],
    },
    //配置本地服务
    devServer: {
        //配置本地的静态资源文件夹，用来让这两个文件夹内部的文件可以通过访问http地址直接展示
        static: [
            path.resolve(__dirname, "dist"), //这里是构建目标路径
            path.resolve(__dirname, "public"), //这里是public部分的内容
        ],
        host: "localhost", //本地服务启动后的ip地址
        port: 8080, //本地服务启动的端口号
        open: true, //启动时自动打开默认浏览器
    },
});
