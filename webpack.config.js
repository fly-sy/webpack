const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const htmlPlugin = new HtmlWebpackPlugin({
  template: path.join(__dirname, './src/index.html'),
  filename: 'index.html'
})

module.exports = {
  mode: 'development',  // development production 
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
  }
}