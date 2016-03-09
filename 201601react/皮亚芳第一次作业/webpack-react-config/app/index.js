'use strict';

// 1.
// import React, {  Component } from 'react';
// import ReactDOM from 'react-dom';

// class HelloWorld extends Component {
//   render () {
//     return (
//       <h1>hello hahahha</h1>
//     )
//   }
// }
//
// ReactDOM.render(<HelloWorld />, document.getElementById('app'));


// 2.
// import React from 'react';
// import ReactDOM from 'react-dom';
// import Button from './components/Button/Button';
//
// let root = document.getElementById('app');
// ReactDOM.render( <Button />, root );


// 3
import React from 'react';
import ReactDOM from 'react-dom';
import App from './container/App';

let root = document.getElementById('app');
ReactDOM.render( <App />, root );

import moduleB from './util/moduleB';
