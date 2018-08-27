

{

  var obj = {
    name: 'fly',
    age: 18
  }

  // var name = obj.name
  // var age = obj.age

  // name 是obj里面的key  name123是配置的别名    
  var { name: name123 } = obj

  // console.log(name123)
  // console.log(age)

  var [a, b, c] = [1, 2, 3]

  // console.log(a)
  // console.log(b)

}

{
  // 解构赋值 + 函数 + 默认值
  // function show(obj) {
  function show({ name, age = 8 }) {
    // console.log(obj.name)
    console.log(name)
    console.log(age)
  }

  // show({ name: 'fly' })
}

{

  // rest参数和字符串扩展   

  function show(...args) {  // 在形参的位置 ...args 叫做rest参数 
    // arguments 是一个伪数组不能使用forEach 
    // console.log(arguments[0])

    var result = 0

    // for (var i = 0; i < arguments.length; i++) {
    //   result += arguments[i]
    // }


    args.forEach(item => {
      result += item
    })


    // console.log(result)
  }

  var arr = [1, 2, 3, 4]

  // show(arr[0], arr[1], arr[2], arr[3])
  // show(1, 2, 3, 4)   

  show(...arr)   // 在实参的位置 ...arr 叫做字符串的扩展  
}


{


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
  var show4 = (item, index) => item + index


}