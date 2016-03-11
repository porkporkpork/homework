'use strict';

import React,{ Component } from  'react'
import ReactDOM from 'react-dom'
import Button from './components/Button/Button'
import App from './container/App';

class HelloWorld extends Component {
  render() {
    return <h1>Hello world, you can do ddd</h1>
  }
}
ReactDOM.render(<App/>,document.getElementById('app'))
