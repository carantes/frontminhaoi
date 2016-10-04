import React, { Component } from 'react'

class LabelInfoImageComponent extends Component {

  render() {
    let { htmlMessage } = this.props
    return (
        <label>
            { htmlMessage }            
        </label>      
    )
  }
} 
export default LabelInfoImageComponent