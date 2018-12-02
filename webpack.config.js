const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const htmlPlugin = new HtmlWebpackPlugin({
  template: path.join(__dirname, './src/index.html'),
  filename: 'index.html'
})

module.exports = {
  mode: 'development',  // development开发环境 production上线环境
  plugins: [
    htmlPlugin
  ],
  module: {
    rules: [
      { test: /\.js|jsx$/, use: 'babel-loader', exclude: /node_modules/ },
      { test: /\.css$/, use: ['style-loader', 'css-loader?modules&localIdentName=[path][name]-[local]-[hash:5]'] }
    ]
  },
  resolve: {
    // 配置后缀名省略   
    extensions: ['.js', '.jsx', '.json'],
    // 配置别名   
    alias: {
      "@": path.join(__dirname, './src')
    }
  },

  // 配置反向代理 
  devServer: {
    proxy: {
      '/proxy': {
        // 设置跨域源路径
        target: 'https://m.maizuo.com',
        // 修改请求路径为跨域路径
        changeOrigin: true,
        // 重写路径
        pathRewrite: { '^/proxy': '' }
      }
    }
  }
}