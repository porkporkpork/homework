import React, {
  Component
} from 'react'
export default class Button extends Component {
  handleClick() {
    alert('What is the matter?');
  }

  render() {
    const style = require('./Button.less');
    return(
      <button className='my-button' onClick={this.handleClick.bind(this)}>
        就这么任性
      </button>
    )
  }
}
