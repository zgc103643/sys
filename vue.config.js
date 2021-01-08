const path=require("path")
module.exports = {
    publicPath:"/admin",//设置css,js,img文件在index.html中的基本路径
    outputDir:"admin",//设置npm run biud 打生成的静态文件夹名称
    //less全局文件
    pluginOptions: {
        'style-resources-loader': {//得先安装 npm i vue-cli-plugin-style-resources-loader --save-dev 和 npm i style-resources-loader --save-dev
            preProcessor: 'less',
            patterns: [path.resolve(__dirname, './src/assets/theme.less')] // less所在文件路径
        }
    }
}
