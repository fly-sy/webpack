import React from 'react'
import ReactDom from 'react-dom'


import Hello from '@/components/Hello'

const user = {
  name: 'fly',
  age: 18
}

ReactDom.render(<div>
  123
  <Hello {...user}></Hello>
</div>, document.querySelector('#app'))
