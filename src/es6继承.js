class Person {
  /**
   * 
   * @param {*} name 
   * @param {*} age 
   */
  constructor(name, age) {
    this.name = name
    this.age = age
  }

  say() {
    console.log('定义子类的公有函数')
  }
}


class Student extends Person {

  // 1. 继承后默认会把父类的构造函数隐藏的写了一次   
  // 2. 如果需要自己定义构造函数  需要配置 super() ，并传递相应的参数
  // 3. 添加构造函数的意义在于子类有自己的私有属性  

  constructor(name, age, it) {
    super(name, age)
    // 实例属性 
    this.it = it
  }


}

const student = new Student('fly', 18, '挨踢')

console.log(student.name)
console.log(student.it)
student.say()

// ps: 
//   1. 私有的实例属性写在自己的构造函数中

//   2. 公有的方法写在父类上 

