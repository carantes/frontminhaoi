import React, { Component } from 'react'

class ImageComponent extends Component {

  render() {
    let { src } = this.props
    return (
        <img src={ src }/>  
    )
  }
} 
export default ImageComponent
