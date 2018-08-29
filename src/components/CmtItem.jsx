import React from 'react'
// import styles from './styles'

import styles from '../assets/cmtitem.css'

export default function CmtItem(props) {
  return (
    <div className={styles.cmtbox}>
      <h2 className={styles.item}>评论人：{props.user}</h2>
      <p>评论内容：{props.content}</p>
    </div>
  )
}