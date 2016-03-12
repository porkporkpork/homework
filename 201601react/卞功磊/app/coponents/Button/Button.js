/**
 * Created by gonglei.bian on 2016/3/8.
 */
import React,{Component } from 'react';

class Button extends Component{
    handleClick(){
        alert("戳戳")
    }
    render(){
        const style=require('./Button.less');
        return (
            <button className="myButton" onClick={
                this.handleClick.bind(this)
            }>快戳</button>
        )
    }
};
export  default Button