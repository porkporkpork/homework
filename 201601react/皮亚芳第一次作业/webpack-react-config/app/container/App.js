import React, { Component } from 'react';
import Button from '../components/Button/Button';

import './App.sass';

class App extends Component {
  render(){
    return (
      <div className="app">
        <Button />
        <div className="tip"></div>
        {/* 这里我们使用以下图标字体 */}
        <span className="glyphicon glyphicon-asterisk"></span>
      </div>
    );
  }
}

export default App;
