const path = require('path')
module.exports = {
  outputDir: './build',
  publicPath: './',
  devServer: {
    proxy: {
      '^/api': {
        target: 'http://152.136.185.210:5000',
        pathRewrite: {
          '^/api': ''
        },
        changeOrigin: true,
        ws: true
      }
    }
  },
  configureWebpack: {
    module: {
      rules: [
        // pinia 安装配置
        {
          test: /\.mjs$/,
          include: /node_modules/,
          type: 'javascript/auto'
        }
      ]
    },
    resolve: {
      alias: {
        components: '@/components',
        src: '@'
      }
    }
  }
}
