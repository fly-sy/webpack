import React from 'react'
import ReactDom from 'react-dom'


function Hello(props) {
  return (
    <div>
      这是个hello组件{props.name}-{props.age}-{props.sex}
    </div>
  )
}

const user = {
  name: 'fly',
  age: 18,
  sex: '男'
}


ReactDom.render(<div>
  123
  {/*es6运算符展开*/}
  <Hello {...user}></Hello>
</div >, document.querySelector('#app'))