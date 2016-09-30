import React, { Component } from 'react'
import Isvg from 'react-inlinesvg'
import Image from '../atoms/image'
import LabelInfo from '../atoms/label'

class ButtonActionomponent extends Component {

  render () {
    let { value, src, htmlMessage } = this.props
    return (
        <div>
            <div>
                <Image src={src} />
            </div>
            <div>
                <LabelInfo htmlMessage={htmlMessage}/>
            </div>
        </div>
    )
  }
} 

export default ButtonActionomponent