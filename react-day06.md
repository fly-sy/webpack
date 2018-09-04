# react-day06 

## 一、数据库安装

+ window  phpstudy 

+ mac     mamp    

+ 数据库的格式化工具  navicat-premium  | nacicat for mysql  


## 二、vue ui框架  

+ pc端  element-ui    

+ 移动端 mint-ui  


## 三、 react脚手架  

1. generator-z-react-cli

2. create-react-app (简化掉了所有的webpack)

  + npm install create-react-app 

  + create-react-app 项目名称    

  + cd 项目名称 

  + yarn start   

  + https://blog.csdn.net/qq_39207948/article/details/79467389


## 四、项目文件的命名方式  

+ components/Home.jsx  

  import Home from 'components/home'

+ components/home/Home.jsx    好处在于自己的组件的内容自己维护，就近维护    

  import Home from 'components/home/Home'

+ components/home/index.jsx   这种引入的时候可以不写上index.jsx   

  import Home from 'components/home'


## 五、导航路由实现 

1. 实时获取location hash值 到达动态修改 key的值 达到选中效果   

2. 修复根路径进入的时候获取不到hash的有效数据    


## 六、路由使用场景   

+ 一个link 对应 一个 组件   （组件结构不一样） 

+ 一个多个link对应 一个组件，然后根据请求的参数不同显示不一样的数据 （组件结构都是一样的）


## 七、路由发生改变的时候也会触发 componentWillReceiveProps 

1. props 数据发生改变的时候 应该使用 componentWillReceiveProps 获取最新改变的值，并同步到 state上面      

2. state发送改变的的时候,应该马上使用它的回调函数再次发送请求   

## 八、 loading 状态控制  

1. 先在constructor 中初始一个  isloading 的布尔值  true  

2. 当路由发送改变的时候触发 componentWillReceiveProps isloading: true   显示

3. 当componentWillMount 请求数据完成的时候  isloading: false    隐藏  


## 九、react项目注意点  

+ 技术栈 webpack + react-router-dom + fetch-jsonp + ant degsin + es6 

+ 脚手架的选择： 如果自己不需要 sass less 可以直接使用 create-react-app 快速搭建脚手架   

+ ui选择：支持的react版本  ant degsin 、zent 

+ 数据请求： axios 、 fetch 、 fetch-jsonp   

+ 项目需要跨域的： fetch-jsonp 、 axios-jsonp、 axios + webpack-dev-server 反向代理配置（devServer: {proxy:{}}）

+ 第三方的组件功能： 建议直接去github 或者 开源中国查找  