/**
 * Created by yuan on 2016/3/8.
 */
//alert('hello world!');
'use strict';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
//import Button from './components/Button/Button';
import App from './container/App';

class HelloWorld extends Component{
    render(){
        return(
            <h1> Hello world Hello world</h1>
        )
    }
}

let root = document.getElementById('app');
let button = document.getElementById('button');

ReactDOM.render(<App />, button);
ReactDOM.render(<HelloWorld />, root);
