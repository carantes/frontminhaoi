import React, { Component } from 'react'
import InputElement from 'react-input-mask'
import { Link } from 'react-router' 
import LabelInformacao from '../atoms/label/labelInformacao'
import Image from '../atoms/image/image'
import ButtonActionComponent from '../buttonAction'

class SecondtepComponent extends Component {

  _handleChange( propName , event  ) {
    let { update_user } = this.props 
    update_user( propName , event.target.value )
  }

  _submit(e) {
    let { user, create_user } = this.props
    e.preventDefault()  
    create_user(user)
    return false
  }

  render () {
    let { user, create_user, errorMessage, formValidation, show_button } = this.props
    return (
      <form onSubmit={this._submit.bind(this)}>
        <div className="form__user">
          <LabelInformacao htmlFor="cpf">
            <InputElement
                id="cpf"
                type="text"
                className="base-text-input"
                mask="999.999.999-99"
                maskChar=""
                placeholder="CPF"
                onChange={this._handleChange.bind(this , 'cpf')}  
                value={user.get("cpf")}
                />
          </LabelInformacao>    
          <ButtonActionComponent value="Entrar" formValidation={formValidation} show_button={show_button} />       
        </div>
      </form>
    )
  }
} 

export default SecondtepComponent