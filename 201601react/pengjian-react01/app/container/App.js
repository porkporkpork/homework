import React,{ Component } from 'react'
import Button from '../components/Button/Button'

import './App.less'
import 'bootstrap/dist/css/bootstrap.css'

export default class App extends Component{
  render(){
    return (
      <div className='app'>
        <Button />
        <div className='tip'></div>
        <span className="glyphicon glyphicon-asterisk" ></span>
      </div>
    )
  }
}
