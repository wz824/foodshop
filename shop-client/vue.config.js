module.exports = {
    outputDir: 'dist',   //build输出目录
    assetsDir: 'assets', //静态资源目录（js, css, img）
    lintOnSave: false, //是否开启eslint
    devServer: {
        open: true, //是否自动弹出浏览器页面
        host: "localhost", 
        port: '8080', 
        https: false,   //是否使用https协议
        hotOnly: false, //是否开启热更新
        proxy: {
            '/api': { // 匹配所有以 '/api'开头的请求路径
              target: 'http://localhost:4000', // 代理目标的基础路径
              // secure: false,  // 如果是https接口，需要配置这个参数
              changeOrigin: true, // 支持跨域
              pathRewrite: { // 重写路径: 去掉路径中开头的'/api'
                '^/api': ''
              }
            }
          },
      
    }
 }