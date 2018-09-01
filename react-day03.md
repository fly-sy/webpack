# react-day03 

## 一、react 样式的使用 

### style写法 (不推荐使用行内样式)

1. 直接定义为对象  

```
  const item = {color: red,"font-size": "12px"}
  style={item}

  字符串需要使用""，还有使用连接符定义的属性也使用"" 如： "font-size"  fontSize (驼峰不需要"")
```

2. 定义为一个大对象使用

```
  const styles = {
    item: {color: red}
  }

```

3. 抽离为js文件   

```
  export defulat {
    item: {color: red}
  }

  import styles from './components/styles.js'
```

### className 写法  

1. 先要在webpack.config.js 中配置loader   

```
  { test: /\.css$/, use: ['style-loader', 'css-loader'] }
```

2. 定义.css 文件   

```
  .title {
    color: red
  }
```

3. 在className上直接使用字符串名称    

```
  // 没有开启模块化的情况下  
  <h1 className="title">评论组件</h1>

  ps: className 属性值直接是一个字符串   style的属性值是一个{obj} 解析的对象  style={{color:red}}
```

### css样式冲突问题  

1. vue   

  ```
    <style scoped></style>
  ```

2. react   
   

  ```
    1. 开启样式模块化  

    { test: /\.css$/, use: ['style-loader', 'css-loader?modules'] }

    2. 定义名称引入样式     

    // 以前的引入方式   
    import './assets/cmtlist.css'

    // 开启模块化后的引入方式   
    import objcss from './assets/cmtlist.css'

    3. 使用样式   

    // 没开启模块化之前的写法  
    className="title"     

    // 开启模块化之后的引入方式   

    className = {objcss.title}

    ps: 
      1. 开启css模块化的目的是，在不同的组件中使用相同的样式名称 

      2. 使用css模块化只能模块 class 和 id  样式   
  ```


### 配置 `localIdentName` 防止样式名冲突   

+ path 根路径   src

+ name 文件的名称  css

+ local 样式的名称   title     

+ hash 设置hash值 进一步 避免样式名 冲突   

```
  { test: /\.css$/, use: ['style-loader', 'css-loader?modules&localIdentName=[path][name]-[local]-[hash:5]'] }

```

### 设置样式是否被模块化  

+ :global() 设置样式全局使用不被模块化  

  ```
    :global(.test) {

    }

    className = {styles.title + ' test'}

    className = {['styles.title','test'].join('')}
  ```

+ :local() 默认就是已经开启了模块化，一般不需要设置

### 开启sass|less|stylus  

+ less 

  yarn add less less-loader -D  

  .less

+ sass  

  yarn add node-sass sass-loader -D

  .sass 

  .scss

+ stylus  

  yarn add stylus stylus-loader -D  

  .styl  
  
```
  { test: /\.scss$/, use: ['style-loader', 'css-loader?modules&localIdentName=[path][name]-[local]-[hash:5]', 'sass-loader'] } // 打包处理 scss 文件的 loader
```


## 二、react 事件绑定  

### 事件需要使用驼峰命名   onclick -> onClick   onmouseover -> onMouseover    

### 基本使用方式  

  ```
    onClick={function}
  ```

### 标准使用方式  

  ```
    onClick = {()=>{this.clickHandle()}}

    clickHandle = ()=> {

    }
  ```

### 传值，如果是多个参数继续往后添加

  ```
    onClick = {()=>this.clickHandle('™')}

    clickHandle = (arg1)=> {
      console.log(arg1)
    }
  ```

### 使用this.setState 修改 state 的值 达到model 和 view 同步   

  ```
    onClick = {()=>this.clickHandle('™')}

    clickHandle = (arg1)=> {
      
      this.setState({
        msg: this.state.msg + arg1  
      })
    }
 
  ```

### 使用this.setState注意点  

1. 使用this.setState 不会覆盖之前的值，只会修改设置的数据  

2. 想要修改数据后马上获取到最新的值，使用this.setState的回调函数设置  

```
    onClick = {()=>this.clickHandle('™')}

    clickHandle = (arg1)=> {
      
      this.setState({
        msg: this.state.msg + arg1  
      },function(){
        console.log(this.state.msg)
      })
    }
```

## 三、单项数据绑定和双向数据绑定

+ 单向数据绑定： model 改变 view 改变， 不能反过来 

+ 双向数据绑定： model 改变 view 改变， 反之亦然   

### react默认单项数据绑定  

+ 一旦定义 this.state 里面的数据, 就可以直接使用在view上面  

### react双向数据绑定实现方式 （vue是帮我们实现了）

1. 给input标签元素添加 onChange 事件 ， 好比如vue使用v-model   

2. 获取到input value 的值  

  + 通过event对象的方式传递target 传递过来的是一个原生的DOM，通过这个原生的DOM 获取value 如： e.targer.value

  + 类似于vue添加ref属性 ，然后使用 this.refs.属性名称的值   ref="text" , this.refs.text.value 获取value   

3. 使用this.setState 同步数据   

4. 代码示例  

  ```
    render() {
      return (
        <div>
          <button onClick={() => { this.clickHandle('™') }}>点我</button>
          <h1>{this.state.msg}</h1>
          <input type="text" ref="text" value={this.state.msg} onChange={(e) => this.modelHandle(e)} />
        </div>
      )
    }

    modelHandle = (e) => {

      // let newValue = e.target.value
      let newValue = this.refs.text.value

      this.setState({
        msg: newValue
      })

    }
  ```

## 四、生命周期函数  

1. vue   

  + created  

  + mounted  

+ 微信小程序  

  + onLoad   

  + onReady   

+ react  

  + componentWillMount   

  + componentDidMount   

 
