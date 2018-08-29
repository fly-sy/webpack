import React from 'react'
export default class App extends React.Component {

  constructor() {
    super()
    this.state = {
      msg: '123'
    }
  }

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

    // e.target 和 this.refs.text 得到的都是原生的DOM 

    console.log(e.target)
    console.log(this.refs.text)

    // let newValue = e.target.value
    let newValue = this.refs.text.value

    this.setState({
      msg: newValue
    })

  }

  clickHandle = (arg1) => {
    // console.log(arg1)
    this.setState({
      msg: this.state.msg + arg1
    }, () => {
      console.log(this.state.msg)
    })
  }
}