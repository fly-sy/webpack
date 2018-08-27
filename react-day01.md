# react-day01

##  库和框架的区别

+ 库  插件式的、切入到相同的插件很容易 jquery、zepto 、引入的一些插件  

+ 框架  一整套的解决方法、 ui、路由、http请求，切入到别的框架会比较困难  

##  前端三大框架简单对比   

+ angular 最早出来（1.0，2.0 2个妈）有组件、有指令

+ vue     目前最火的(不一定是用的最多的，有组件、有指令)

+ react   目前最流行（使用最多，有组件、没有指令）

## React和Vue的对比 

1. 组件化： 在ui的角度，对页面的相同元素进行抽离，可以方便后期的维护和代码的复用 

2. 模块化： 在js的角度，把某些相同的业务抽离出来就是模块化，可以方便后期的维护和代码的复用 

3. 组件化和模块化的好处：组件化和模块化在项目迭代变大的时候，可以快速的使用原有的模块和组件，快速构建项目，也方便后期的维护 

4. 如何实现组件化（vue、react）

  + vue （.vue template、script、style）

  + react （都是基于js es6、es7）

5. 移动app方面

  + react   react-native (在react的基础上开发app、目前只有一些大公司在使用)

  + vue     weex （目前只有阿里自己在使用）

6. 原生app  

  + ios  object-c  

  + android java  

## 原生的DOM和虚拟DOM的区别  

+ DOM   html  js  大量操作容易造成页面卡顿效果，性能不是很好   

+ 虚拟DOM、diff算法 ，脱离了框架就没有意义了，是在内存中模拟DOM树  


## 列表渲染的方式  

  1. 列表渲染

    + es6的模板字符串渲染  `<div>${name}</div>`   
    
    + 使用art-template 进行渲染     
    
    ps: 效果出来、但是性能不是很好、达不到按需更新的那种效果   

  2. 如何提高性能   

    + 新旧DOM树的对比，达到按需更新   
    
    + 如何在内存中创建DOM树，然后再去对比，达到真正的按需更新    
    
    + 虚拟DOM 实现我们的高效更新？ 如何实现 ？ diff算法   

 3. 虚拟DOM的概念  

    + 本质： 使用js对象，模拟实现页面上数据的嵌套  

    + 目的： 达到页面的高效更新 （按需更新）


## diff算法  

1. tree diff  

2. component diff 

3. element diff  

ps: 查找顺序：先使用tree diff对比2棵新旧的树，发现里面那个组件是需要更新的component tree，如果组件的类型一致，继续使用element diff算法 查找不一样的元素，如果查找到了就进行`按需`更新

虚拟DOM 提供的是 2棵新旧的  DOM 树  

diff算法 只是提供快捷的查找元素的方案  

## webpack4.x基本使用 

### 本地使用

+ npm install webpack webpacl-cli -D 

+ 装好之后可以可以直接使用 webpack 运行打包项目   

### 项目使用  

1. 初始化  

  + npm init -y

2. 约定的项目结构  

  + dist 

  + src  

    + index.html

    + index.js    

  + package.json   

  + webpack.config.js （可选），还是建议使用   

3. webpack.config.js 配置的一些改变  

  1. 不需要设定入口文件和出口文件  

  2. 引入了模式 mode 可以快速切换 

    + 开发环境（development）
    
    + 上线环境（production）

 4. 2个webpack核心包  
  
    + webpack (核心功能) 

    + webpack-cli （打包功能）

    + npm|cnpm install webpack webpack-cli -D  |  yarn add webpack webpack-cli -D  


###  webpack-dev-server （会把main.js生成在内存中） 

+ npm install webpack-dev-server -D  

+ "webpack-dev-server --open --port --hot"


### html-webpack-plugin 配置 （把index.html生成在内存中）

1. 配置    

  yarn add html-webpack-plugin -D    
  ```

    const path = require('path')
    const HtmlWebpackPlugin = require('html-webpack-plugin')

    const htmlPlugin = new HtmlWebpackPlugin({
      template: path.join(__dirname, './src/index.html'),
      filename: 'index.html'
    })

    module.exports = {
      model: 'development',   //development  production  
      plugins: [
        htmlPlugin
      ]
    }
  ```
2. 作用

  + 把index.html 写在内存中  

  + 自动把打包好的main.js添加到index.html中   


## 手动打包和webpack-dev-server帮助打包有什么区别   

+ 手动打包会把文件持久化   

+ webpack-dev-server（没有额外配置的时候）生成在内存中   

## React基本使用 

1. 引入react（核心）react-dom（虚拟DOM渲染）  

2. 使用React.createElement 创建 虚拟DOM

3. 使用ReactDOM.render 渲染虚拟DOM到指定区域 

## babel 基本配置

+ yarn add babel-core babel-loader babel-plugin-transform-runtime -D    （核心包）

+ yarn add babel-preset-env babel-preset-stage-0 babel-preset-react -D  （语言包）

+ 在webpack.config.js中配置loader 

  ```
    module: {
      rules: [
        { test: /\.js|jsx$/, use: 'babel-loader', exclude: /node_modules/ }
      ]
    }
  ```
+ 配置.babelrc文件 

  ```
    {
      "presets": [
        "env",      // es的所语法
        "stage-0",  // 指定用哪个版本
        "react"     // react的jsx支持包  
      ],
      "plugins": [
        "transform-runtime"  // 在插件的基础上运行   
      ]
    }
  ```

## jsx语法  

可以在js中写html ，所有的html元素最终会转换成对象，谁来转换？babel 