const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

// const CleanWebpackPlugin = require('clean-webpack-plugin')
const { CleanWebpackPlugin} = require('clean-webpack-plugin');

console.log('妈蛋的');
module.exports = {
    entry: './src/index.ts',
    output: {
           // 输出路径 要求绝对路径
           path: path.resolve(__dirname, 'dist'),
           // 文件名
           filename: 'main.js',
    },
    // resolve: {
    //     extendsions:['.js', '.ts', '.tsx']
    // },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    devtool: process.env.NODE_ENV === 'production'? false : 'inline-source-map',
    devServer: {
        // 启动gzip压缩
        compress: true,
        // 端口号
        port: 5000,
        // 域名
        host: 'localhost',
        // 自动打开浏览器
        open: true,
        // 开启HMR功能
        hot: true,
    },
    plugins: [
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: ['./dist']
        }),
        new HtmlWebpackPlugin({
            // template: './src/template/index.html'
            template: './src/template/index.html',
            filename: './index.html'
        })
    ]
}

// const path = require('path')
//         module.exports = {
//             // 入口 要求相对路径
//             entry: './src/main.js',
//             // 出口
//             output: {
//                 // 输出路径 要求绝对路径
//                 path: path.resolve(__dirname, 'dist'),
//                 // 文件名
//                 filename: 'main.js',
//                 // 打包前是否清空output目录
//                 clean: true
//             },
//             // 加载器
//             module: {
//                 rules: [
//                     // loader的配置
//                 ]
//             },
//             // 插件
//             plugins: [
//                 // 插件配置
//             ],
//             // 模式
//             mode: 'production',
//         }