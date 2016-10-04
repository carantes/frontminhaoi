import React, { Component } from 'react'
import Isvg from 'react-inlinesvg'
import LabelInformacao from '../atoms/label/labelInformacao'
import LabelInfoImage from '../atoms/label/labelInfoImage'

class ButtonActionomponent extends Component {

  componentWillMount() {
    let { show_button, show_error, show_success } = this.props

    show_button();
  }

  render () {
    let { value, formValidation, htmMessage } = this.props
    return (
      <span>
      {
        formValidation.get('button') === 'button' ? (
        <LabelInformacao>
          <input type="submit" value={value}/>
            <Isvg src="/assets/icons/form/arrow.svg" />
        </LabelInformacao>
        ) : null
      }
      {
        formValidation.get('error') === 'error' ? (
        
        <LabelInfoImage htmMessage="Algo está errado!!!!"/>

        ) : null
      } 
      {
        formValidation.get('success') === 'success' ? (
      
        <LabelInformacao>
          <input type="submit" value='success'/>
            <Isvg src="/assets/icons/form/arrow.svg" />
        </LabelInformacao>
        ) : null
      }
      </span>
    )
  }
} 

export default ButtonActionomponent