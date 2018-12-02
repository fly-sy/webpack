# react-day05  

## 一、跨域请求常用手段   

1. jsonp 

2. cors  

3. webpack-dev-server proxy  （在有webpack的基础上）

  ```

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

    https://segmentfault.com/a/1190000012383015
  ```

5. nginx 服务器    


## 二、ajax请求的三种手段  

### 传统的请求方式  

```
  getContentByPromise('./files/1.txt')
  .then(res => { // 读取文件1
    console.log(res)
    getContentByPromise('./files/2.txt')
    .then(res => { // 读取文件2
      console.log(res)
      getContentByPromise('./files/3.txt')
      .then(res => { // 读取文件3
         console.log(res)  
      })
    })
  })

  ps: 这是一个错误的示范，不要这样使用，传统的请求方式有地狱回调 非常恶心   
```

### 使用promise 改造   

```
  getContentByPromise('./files/1.txt')
  .then(res => { // 读取文件1
    console.log(res)
    return getContentByPromise('./files/2.txt')
  })
  .then(res => { // 读取文件2
    console.log(res)

    return getContentByPromise('./files/3.txt')
  })
  .then(res => { // 读取文件3
    console.log(res)
  })

  ps: promise 的出现时为了解决传统的地狱回调问题，但是并不能减少代码量  

```

### es7 async await 简化promise请求 

```

  1. 基本语法 async可以修饰普通函数、箭头函数   

  async function getContent(){

    const result = await promise异步请求

  }

  getContent()

  2. 示例 

  async function getContent() {
    console.log(1)
    const result1 = await getContentByPromise('./files/1.txt')
    console.log(result1)
    const result2 = await getContentByPromise('./files/2.txt')
    console.log(result2)
    const result3 = await getContentByPromise('./files/3.txt')
    console.log(result3)

  }

  getContent() 

  ps: 使用async修饰的函数是一个异步函数，awiat 必须是在 async修饰的异步函数中使用  
```

## 三、express 生成器 （脚手架）

+ npm install express-generator -g

+ express 项目名称    

+ npm start  


## 四、路由  

+ 前端路由 

  是在ui的角度，通过hash值分发组件，实现页面的跳转  ，hash地址和组件的对应关系

+ 后端路由   

  请求地址和处理的回调函数的对应关系，主要目的是分发资源 （返回一个json），url地址和后端处理函数的对应关系  

ps: 路由就是一种对应关系   


## 五、react 中的路由使用  

### 基本路由组件  

+ HashRouter   在vue中是隐藏掉了不需要我们配置，在react当中HashRouter只需要使用一次，该组件内部值能放一个容器元素   

+ Route       有2个身份，一个容器（好比如vue中的 route-view），一个是路由的匹配规则设置 

+ Link         配置路径的跳转（好比如vue中的 route-link）   

+ Redirect     路由的重定向组件

### 基本使用    

1. yarn add react-route-dom -S   

2. import {HashRouter,Route,Link} from 'react-route-dom'  

3. 把HashRouter设置在 App.jsx 跟组件上   HashRouter

4. 设置 Link 的配置  

  ```
    <Link to="/home"></Link>
    <Link to="/about"></Link>
    <Link to="/vip"></Link>
  ```
5. 引入相应的组件 然后 配置 Route 的规则   

  + path 配置的路径

  + component 要显示的组件

  + exact(默认就是模糊匹配) 精确匹配  Link 的 to属性  和 Route 的 path 属性一致的时候 才进行component 显示    

  ```

    <Route path="/home" component={Home}></Route>
    <Route path="/about" component={About}></Route>
    <Route path="/vip" component={Vip}></Route>

  ```

### 动态路由传参数    

```
    <Link to="/home/1"></Link>

    <Route path="/home/:id" component={Home}></Route>

    在Home组件中使用  this.props.match.params.id   

```

### 编程式导航  

+ this.props.hostory.go()  

+ this.props.hostory.push('/home')   vue  this.$route.push('/home')

### 路由 Redirect 重定向    

+ 按需引入重定向组件    

  ```
    import {HashRouter,Route,Link,Redirect} from 'react-route-dom' 
  ```

+ 配置路由的规则    

  ```
    <Route exact  path="/" render={()=> <Redirect to="/home" />}></Route>

    ps： 使用路由重定向一定要使用精确匹配   
  ```

###  路由嵌套      

+ 在已经匹配过路由的组件里面再写路由，嵌套的路由不需要再使用HashRouter  

## 六、Ant Design  UI框架   

### ant 全局引入  

+ yarn add antd -S  

+ 引入包 import  {} from 'antd'

+ 引入样式     

### 按需引入   

+ 先安装按需引入插件  yarn add babel-plugin-import -S  

+ 在babel里面配置插件  

  ```
    {
      "plugins": [
        ["import", { "libraryName": "antd", "libraryDirectory": "es", "style": "css" }] // `style: true` 会加载 less 文件
      ]
    }
  ```

+ 手动按引入样式   

  ```
    import DatePicker from 'antd/lib/date-picker';  // 加载 JS
    import 'antd/lib/date-picker/style/css';        // 加载 CSS
    // import 'antd/lib/date-picker/style';         // 加载 LESS
  ```

## 七、es6 fetch 返回promise对象   

1. get请求方式 

  ```

    fetch(url,{
      method: 'GET'
    })
    .then(response=>{        // 第一个.then 返回的是原生的 Response 对象   
      return response.json() // response.json() 把二进制文件转换成一个json的promise对象  
    })
    .then(res=>{            // 第二个.then 接受转换好的json数据    
      console.log(res.data)
    })

  ```

2. post请求方式


  ```

    1. 先包装请求数据 

    let setData = new UrlSearchParams()  
    // name 属性是后台定死的   
    setData.append('name', '🚜')

    2. 设置请求类型method和请求参数body  

    fetch(url,{
      method: 'POST',
      body: setData  
    })
    .then(response=>{        // 第一个.then 返回的是原生的 Response 对象   
      return response.json() // response.json() 把二进制文件转换成一个json的promise对象  
    })
    .then(res=>{            // 第二个.then 接受转换好的json数据    
      console.log(res.data)
    })

  ```

3. 借助fetch-jsonp  第三方包 

  ```
    1. fetch-jsonp 结合 promise  
    
    fetchJsonp(url,{
      method: 'GET'
    })
    .then(response=>{        // 第一个.then 返回的是原生的 Response 对象   
      return response.json() // response.json() 把二进制文件转换成一个json的promise对象  
    })
    .then(res=>{            // 第二个.then 接受转换好的json数据    
      console.log(res.data)
    })
  
    ps:fetch 默认是没有jsonp 请求，如果想使用需要借助第三方的fetch-jsonp   
  
  
  2. fetch-jsonp 结合 async 和 await  
  ```


  getinfo = async () => {

    const res = await this.$http(url)
    
    const data = await res.json()  
  }


  ```

   
  ```

