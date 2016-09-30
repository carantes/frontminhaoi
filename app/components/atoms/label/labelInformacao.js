import React, { Component } from 'react'

class LabelInformacaoComponent extends Component {

  render() {
    let { htmlFor, htmlMessage } = this.props
    return (
        <label htmlFor={ htmlFor }>
            { htmlMessage }
             {this.props.children}
        </label>      
    )
  }
} 
export default LabelInformacaoComponent
