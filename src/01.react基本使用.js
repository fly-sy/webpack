import React from 'react'
import ReactDom from 'react-dom'

// 1.0 创建元素

// 1.1 普通创建元素方式
// 参数1 元素的类型 
// 参数2 属性，null 或者是一个对象
// 参数3 元素中的值 是一个字符串   
// 参数4 是需要嵌套的元素   
// const myh1 = React.createElement('h1', null, 'this is h1')
// const myh1 = React.createElement('h1', { title: 'h1' }, 'this is h1')
// 1.2元素嵌套
// const myDiv = React.createElement('div', { title: 'div' }, null, myh1) 

// 1.3 使用jsx语法创建元素 

// 什么时候需要return？ 

// forEach 没有返回值  所有操作的时候不需要return  

// map     有返回值，返回一个新的数据，这里需要return  


let a = 10

let flag = false

const h1 = <h1>这是一个使用jsx创建的h1元素</h1>

let arr = ['keke', 'sky', 'fly']

var newArr = []

arr.forEach(item => {
  let result = <h1>{item}</h1>
  newArr.push(result)
})

let mapArr = arr.map(item => {
  return <h1>{item}</h1>
})

// 在js中写类似于html标签的语法，就是jsx语法，最终jsx会被babel转换成对象   
const myDiv = <div id="mydiv" title="div">

  <h1>this is h1</h1>

  {a}

  <p>{flag ? 'span' : '!span'}</p>

  {h1}

  <hr />
  // {newArr}

  {/* 
    添加class类样式的时候使用className代替class关键字 
    label for 改为 htmlfor 
  */}

  <hr />

  // {mapArr}
  <hr />

  {arr.map((item, index) => <h3 key={index}>{item}</h3>)}

</div>


// 2.0 把元素渲染在指定的视图上 
// ReactDom.render(myh1, document.querySelector('#app'))
// 参数1 是要渲染的元素
// 参数2 要渲染的区域   
ReactDom.render(myDiv, document.querySelector('#app'))