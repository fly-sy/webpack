# react-day04  

## propTypes 类型校验   

1. npm install prop-types -S  

2. 校验使用方式    
  ```
  import Types from 'prop-types' // 导入类型校验的包

  static propTypes = { count: Types.number}

  ```

3. isRequired 设置必传属性  

  ```
      static propTypes = { count: Types.number.isRequired}
  ```

## defaultProps 设置默认值  

  ```
    外界没有传递模式值得时候自己组件内部自己设置默认值  

    static defaultProps = { count: 0}
  ```

## React生命周期函数  

### 创建阶段的生命周期 

1. constructor 类似于 vue  beforeCreated   

  + 初始化 state、props    

2. componentWillMount 类似于 created    

  + 在这个生命周期函数中可以获取到 state 、props 和 定义的普通函数   

3. render 类似于 vue beforeMounted     

  + 渲染虚拟DOM

4. componentdidMount 类似于  vue  mounted

  + 可以获取到挂在的DOM原生

### 运行阶段的生命周期  

1. shouldComponentUpdate  

  + 目的是控制属性的`按需更新`，在这个生命周期函数中如果想使用最新的数据传递2个形参 nextProps,nextState 

    ```
      shouldComponentUpdate(nextProps, nextState) {

        return true // 默认返回的是true
      }

    ```
2. componentWillUpdate   组件将要更新，页面拿到的还是旧的  

3. render  虚拟DOM        重新生成虚拟DOM 页面拿到的也是旧的    

4. componentDidUpdate    组件更新完毕  页面拿到的数据才是最新的   

5. componentWillReceiveProps 当props的值发生修改的时候，在子组件中可以使用该钩子函数获取最新的数据 

### 那个生命周期阶段可以使用 this.setState  

1. componentWillMount

2. componentdidMount 

3. componentWillReceiveProps  

## 修改props属性的2种方式 

### 在子组件中修改

1. props属性是`只读`的，要修改props先把传递过来的值，保存一份在state上 

  ```
    //在构造函数中获取props的值，需要把props传递进来，然后直接使用props.属性的方式 获取到
    constructor(props) {
      super()
      this.state = {
        // 把传递过来的props的数据赋值给了state   
        count: props.initcount
      }
    }
  ```

2. 再使用`this.setState` 同步数据，修改的永远是state上的值，props不算`真正意义`上的修改     

  ```
    this.setState({
      count: this.state.count + 1
    })
  ```
  
### 在父组件中修改     

1. 在父组件上直接修改父组件的state的值，达到修改props  ，也不算真正意义上的修改

2. 在子组件中使用 componentWillReceiveProps 钩子函数就收修改的值   

  ```
    // 组件的 porps 被改变，会重新触发 componentWillRevceiveProps
    componentWillReceiveProps(nextProps) { // 组件将要接收新属性
      // console.log('接收到了新属性' + this.props.initcount)
      console.log('nextProps 中的属性值是：' + nextProps.initcount)
      // 注意：如果在 componentWillReceiveProps 生命周期函数中，想要获取最新的 props 数据，
      // 不要使用 this.props.***，因为它是上一次的 props;
      // 最新的应该通过 componentWillReceiveProps(nextProps) 来获取；

      this.setState({
        count: nextProps.initcount
      })
    }
  ```


## 组件传值  

1. 直接在子组组件上使用  {...user}  initcount = {}  可以传递函数 show= {this.show}

2. 在子组件中不管是属性函数函数都是使用props 接收  this.props.initcount   this.props.show() 

ps: 在react中子传父和父传子的原理是一样的，只是传递函数的同时，可以执行传递一个实参给父组件   

## react中使用axios   

1. import axios from 'axios' 


2. 把axios挂在在react的原型上   

  React.Component.prototype.$http = axios 

3. 传递参数   

  + 传统的方式  

    ```
      axios.get('/user?ID=12345')
    ```

  + 设置params的方式
    ```
      axios.get('/user', {
        params: {
          ID: 12345
        }
      })
    ```
  + post 请求方式  

    ```
      axios.post('/user', {
        firstName: 'Fred',
        lastName: 'Flintstone'
      })
    ```

  + 对象的方式 

    ```
      axios({
        method: 'post',
        url: '/user/12345',
        data: {
          firstName: 'Fred',
          lastName: 'Flintstone'
        }
      });
    ```
  4. post 而外数据处理   

    ```
      // 在发送请求之前先把数据转换成 application/x-www-form-urlencoded 格式 
      axios.defaults.transformRequest = [function (data, headers) { 
        const arr = []
        for (let key in data) {
          arr.push(key + '=' + data[key])
        }

        return arr.join('&')
      }]

    ```

## 抽离axios完整配置  

    ```

      import React from 'react'
      import axios from 'axios'

      axios.defaults.transformRequest = [function (data, headers) {
        const arr = []
        for (let key in data) {
          arr.push(key + '=' + data[key])
        }
        return arr.join('&')
      }]

      axios.defaults.baseURL = 'http://39.106.32.91:3000'

      React.Component.prototype.$http = axios

    ```




