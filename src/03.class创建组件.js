// import React, { Component } from 'react'
import React from 'react'

import ReactDom from 'react-dom'


class Hello extends React.Component {
  constructor() {
    super()
    this.state = {  // 类似于 vue 的data  
      msg: 'class私有的数据'
    }
  }
  render() {
    const { msg } = this.state
    return (
      <div>
        <h1>{this.props.name}</h1>
        <h1>{this.state.msg}</h1>
        <h1>{msg}</h1>
      </div>
    )
  }
}

const user = {
  name: 'fly',
  age: 18
}
ReactDom.render(<div>
  123
  <Hello {...user}></Hello>
</div >, document.querySelector('#app'))