module.exports = {
    publicPath:"/admin",//设置css,js,img文件在index.html中的基本路径
    outputDir:"admin",//设置npm run biud 打生成的静态文件夹名称
    pluginOptions: {
        'style-resources-loader': { preProcessor: 'less', patterns: ['C:\\Users\\QXZ16NM\\Desktop\\sys\\sys\\src\\assets\\theme.less'] }
    }
}
