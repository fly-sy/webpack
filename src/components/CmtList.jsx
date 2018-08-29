import React from 'react'
import CmtItem from './CmtItem'

// 没开启模块化
// import '../assets/cmtlist.css'

// 开启模块化
import styles from '../assets/cmtlist.css'

export default class CmtList extends React.Component {
  constructor() {
    super()
    this.state = {
      CommentList: [ // 评论列表数据
        { id: 1, user: '张三', content: '哈哈，沙发' },
        { id: 2, user: '李四', content: '哈哈，板凳' },
        { id: 3, user: '王五', content: '哈哈，凉席' },
        { id: 4, user: '赵六', content: '哈哈，砖头' },
        { id: 5, user: '田七', content: '哈哈，楼下山炮' }
      ]
    }
  }

  render() {
    const { CommentList } = this.state
    return (
      <div>
        {/* 当前使用的className 属性值使用 字符串 */}
        {/* style 属性值为 {obj} 表达式 */}
        {/* 没开启模块化 */}
        {/* <h1 className="title">评论组件</h1> */}
        <h1 className={styles.title}>评论组件</h1>
        {CommentList.map(item => <CmtItem key={item.id} {...item}></CmtItem>)}
      </div>
    )
  }
}