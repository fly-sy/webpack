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
      </div>
    )
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