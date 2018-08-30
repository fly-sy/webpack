import React from 'react'
import Types from 'prop-types'

export default class App extends React.Component {

  // props类型校验
  static propTypes = {
    initcount: Types.number.isRequired
  }

  // 设置props默认值（如果外面没有传递）
  static defaultProps = {
    initcount: 0
  }

  /**
   * 
   * @param {外界传递的值} props 
   */
  constructor(props) {
    super()
    this.state = {
      count: props.initcount
    }
  }


  render() {
    return (
      <div>
        <button onClick={() => this.add()}>点我+1</button>
        <hr />
        {/* <span>{this.props.initcount}</span> */}
        <span>{this.state.count}</span>
      </div>
    )
  }

  // 运行阶段的第一个生命周期函数
  // 使用这个 函数，可以按需更新页面；减少不必要的 DOM 渲染；
  shouldComponentUpdate(nextProps, nextState) {
    // 需求3：偶数更新页面；奇数不更新页面；
    // return false
    // 注意： 在 shouldComponentUpdate 方法中，如果想获取 最新的 state 值，千万不要使用 this.state.***
    // console.log(this.state.count)
    // console.log(nextState.count)
    if (nextState.count % 2 === 0) { // 偶数
      return true
    }
    return false
    // console.log(document.getElementById('myh3').innerHTML)
  }

  // 运行阶段 第二个生命周期函数 【组件将要被更新】
  componentWillUpdate() {
    // console.log(document.getElementById('myh3').innerHTML)
  }

  componentDidUpdate() {
    // console.log(document.getElementById('myh3').innerHTML)
  }

  // 主要用于监听props的数据  
  componentWillReceiveProps(nextProps) {
    this.setState({
      // 这里的数据源来至于父组建  
      count: nextProps.initcount
    })
  }

  add = () => {
    // 这里的数据源来至于自己本身
    this.setState({
      // 这里不如果想要使用++ 的方式 写为  ++this.state.count    
      count: this.state.count + 1
    })
  }
}