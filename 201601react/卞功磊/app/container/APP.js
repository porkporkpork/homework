/**
 * Created by gonglei.bian on 2016/3/8.
 */
import React,{Component } from 'react';
import Button from '../coponents/Button/Button';
import 'bootstrap/dist/css/bootstrap.css';
import './App.less';

class App extends Component{
    render(){
        return (
            <div className="app">
                <Button />
                <div className="tip"></div>
                <span className="glyphicon glyphicon-cloud"></span>
            </div>
        )
    }
};
export default App;

