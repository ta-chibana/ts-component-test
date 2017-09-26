import React from 'react'
import ReactDom from 'react-dom'
import MyComponent from './MyComponent'

ReactDom.render(<MyComponent content="hello world"/>, document.getElementById('app'))
