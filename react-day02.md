# react-day02  

## 一、组件使用

### 使用构造函数创建组件

#### 在index.js文件中定义

  1. 基本定义

  ```
    function Hello(props) {
      return (
        <div>
          这是个hello组件{props.name}-{props.age}-{props.sex}
        </div>
      )
    }
  ```

  2. 传值方式

  ```
    ReactDom.render(<div>
      123
      {/全写方式/}
      <Hello name={user.name} age={user.age} sex={user.sex}></Hello>
      {/*es6运算符展开*/}
      <Hello {...user}></Hello>
    </div >, document.querySelector('#app'))

  ```

#### 以.jsx文件方式定义组件       

  1. 配置webpack.config.js   

  ```
    resolve: {
      // 配置后缀名省略   
      extensions: ['.js', '.jsx', '.json'],
      // 配置别名   
      alias: {
        "@": path.join(__dirname, './src')
      }
    }
  ```
  2. 在.jsx文件中  

  ```
    import React from 'react'

    export default function Hello(props) {
      return (<div>这是个hello组件{props.name}</div>)
    }

  ```

### 使用class创建组件   
  ```
    class Hello extends React.Component {
      render() {
        // return null
        return (
          <div>
            使用class创建组件的方式
          </div>
        )
      }
    }
  ```


###  构造函数创建的组件和class创建的组件有什么区别

1. 不管是构造函数还是class创建的组件props都是只读  

2. class有state属性、生命周期函数 而构造函数创建的组件没有state属性也没有生命周期 

3. 如果class想改写数据， 使用this.state   

## 二、es6  

### 变量定义   

  + let

  + const   

  + ps: let 和 const 都没有变量提升，都具有{}作用域，const定义的变量不能重新赋值

### 函数参数默认值     

  ```
    function show(a=1){
      console.log(a)
    }

    show()
  ```

### 解构赋值   

  ```
    var obj = {
      name: 'fly',
      age: 18
    }

    //es5
    var name = obj.name
    var age = obj.age  

    //es6 解构赋值的方式

    var {name,age} = obj  

    console.log(name)
    console.log(age)


    //数组解构
    var [a, b, c] = [1, 2, 3]

    console.log(a)
    console.log(b)

    ps: 解构赋值解构什么数据类型，就以  var 数据类型的初始值  = 解构的数据   

    如：
      数组    var [] = arr
      对象    var {} = obj   

  ```

### 解构赋值+函数+默认参数   

  ```

    function show({ name, age = 8 }) {
      // console.log(obj.name)
      console.log(name)
      console.log(age)
    }

    // show({ name: 'fly' })

  ```

### rest参数和字符串扩展

  ```
    function show(...args) {  // 在形参的位置 ...args 叫做rest参数

      var result = 0

      args.forEach(item => {
        result += item
      })

      console.log(result)
    }

    var arr = [1, 2, 3, 4]

    // show(arr[0], arr[1], arr[2], arr[3])
    // show(1, 2, 3, 4)   

    show(...arr)   // 在实参的位置 ...arr 叫做字符串的扩展  

  ```

### 箭头函数  

  ```
    // 普通的字面量定义函数  
    var show1 = function (item) {
      return item
    }

    // 标准的箭头函数写法  
    var show2 = (item) => {
      return item
    }

    // 最简化的写法  
    var show3 = item => item

    // 多个参数的写法  
    var show4 = (arg1, arg2) => arg1 + arg2

  ```

### class类

1. es5   
  ```
    // 构造函数
    function Person(name,age){
      this.name = name
      this.age = age
    }

    // 原型上的方法
    Person.prototype.say = function(){
      return this.name    
    }

    // 静态属性不需要通过实例化、实例出来的属性，直接以  构造函数名.静态属性
    Person.info = 'aaa'

    // 实例化对象
    var person = new Person('fly',18) 

    console.log(person.say())

    es5类： 构造函数+原型链 模拟成一个类的，本身这个es5没有类的概念
  ```

2. es6   

  ``` 

    class Person {
      // 构造函数
      constructor(name,age){
        // 实例化属性|私有属性
        this.name = name
        this.age = age
      }

      // 原型上的方法
      say(){
        return this.name 
      }

      // 静态属性 (已经被删除了，不建议使用)
      static info = 'aaa'
      // 静态函数
      static say(){
        console.log('这是一个静态方法')
      }
    }

    // 实例化
    const person = new Person('fly',18) 
    console.log(person.say())
    // 调用静态属性  
    console.log(Person.info)
    // 调用静态方法  
    Person.say()

    ps: 静态属性和静态函数的作用是不通过实例化给用户暴露一些默认的值、或者提示   

    1. class里面只能写实例函数、构造函数（constructo）、静态属性(已经舍弃掉了)、静态函数（之间不需要使用,隔开）
  ```


### 继承   

1. es5  

  ```

    1. 继承属性 （使用call改变this的指向）

    2. 继承函数 （子类的原型赋值给父类的实例化）


     // 父类构造函数
    function Person(name,age){
      this.name = name
      this.age = age
    }

    // 父类原型上的方法
    Person.prototype.say = function(){
      return this.name    
    }

    
     // 子类构造函数
    function Student(name,age){
      Person.call(this,name,age)
    }

    // 子类原型上的方法
    Student.prototype = new Person()

    // 子类实例化对象
    var student = new Student('fly',18) 


  ```

2. es6   

  ```

    class Person {
      // 1. 构造函数
      constructor(name, age) {
        this.name = name
        this.age = age
      }
    }


    class Student extends Person {
      // 1. 继承后默认会把父类的构造函数隐藏的写了一次   
      // 2. 如果需要自己定义构造函数  需要配置 super() ，并传递相应的参数
      // 3. 添加构造函数的意义在于子类有自己的私有属性  

      constructor(name, age, it) {
        super(name, age)
        this.it = it
      }
    }

    const student = new Student('fly', 18, '挨踢')

    console.log(student.name)
    console.log(student.it)


  ```

## 三、props 和 state    

1. props 外界传递的数据 使用props接收， 只读

2. state 一般用来定义死数据或者ajax请求的后台数据，可读，可写
