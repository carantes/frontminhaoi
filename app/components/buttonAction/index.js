import React, { Component } from 'react'
import Isvg from 'react-inlinesvg'
import LabelInformacao from '../atoms/label/labelInformacao'

class ButtonActionomponent extends Component {

  componentWillMount() {
    let { show_button } = this.props

    show_button();
  }

  render () {
    let { value, formValidation } = this.props
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
        formValidation.get('button') === 'error' ? (
      
        <LabelInformacao>
          <input type="submit" value='error'/>
            <Isvg src="/assets/icons/form/arrow.svg" />
        </LabelInformacao>
        ) : null
      } 
      {
        formValidation.get('button') === 'success' ? (
      
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