import React, { Component } from 'react'

class CheckMostrarSenhaComponent extends Component {

  render() {
    let { message, value, name, onClick } = this.props
    return (
        <span >
            <input type="checkBox" name={ name } value={ value } onClick={onClick}/> { message }
        </span>      
    )
  }
} 
export default CheckMostrarSenhaComponent