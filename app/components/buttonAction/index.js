import React, { Component } from 'react'
import Isvg from 'react-inlinesvg'
import LabelInformacao from '../atoms/label/labelInformacao'

class ButtonActionomponent extends Component {

  componentWillMount() {
    let { show_button, show_error, show_success } = this.props

    show_button();
  }

  render () {
    let { value, formValidation } = this.props
    console.log("--------------------")
    console.log(formValidation)
    console.log("--------------------")
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
        
        <LabelInformacao>
          <input type="submit" value='error'/>
            <Isvg src="/assets/icons/form/arrow.svg" />
        </LabelInformacao>
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