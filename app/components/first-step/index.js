import React, { Component } from 'react'
import { Link } from 'react-router'
import LabelInformacao from '../atoms/label/labelInformacao'
import CheckBoxMostrarSenha from '../atoms/checkbox/checkMostarSenha'
import ButtonActionComponent from '../buttonAction'

class FirstStepComponent extends Component {

  _handleChange( propName , event  ) {
    let { update_user } = this.props 

    update_user( propName , event.target.value )
  }

  _handleChangeCheckbox(e){
    let{formImput, set_check_to_show_password} = this.props
    set_check_to_show_password(!formImput.get('password').get('showPassword'))
  }

  _submit(e){
    let { user, set_password_message,  set_validation_first_setp} = this.props
    
    e.preventDefault()      
    // const regex = /"([A-Za-z0-9]{6,8})"/;
    // if(regex.test(user.get("password")) === false){
    //     set_password_message("senha incorreta")  
    // } else {
    //    set_validation_first_setp()
    // }  
    set_validation_first_setp()
    return false    
  }
 
  render() {
    let { user, errorMessage, formImput, formValidation, show_button, show_error, show_success } = this.props
    return (
      <form onSubmit={this._submit.bind(this)}>
        <LabelInformacao htmlFor="email">
          <input id="email" type="e-mail" name="email" readOnly="readOnly" placeholder="Digite seu e-mail" autoComplete="off"   onChange={this._handleChange.bind(this , 'email')}  value={user.get("email")} />
        </LabelInformacao>
        <LabelInformacao htmlFor="password" htmlMessage={formImput.get('password').get('message')}>        
          <CheckBoxMostrarSenha message="Mostrar senha" onClick={this._handleChangeCheckbox.bind(this)}/>
          <input id="password" 
            type={formImput.get('password').get('type')} 
            name="password" placeholder="Criar senha" 
            autoComplete="off" 
            onChange={this._handleChange.bind(this , 'password')}  
            value={user.get("password")} 
            //onKeyUp={this._handlekeyUp.bind(this, 'password')} 
            />          
        </LabelInformacao>
        <ButtonActionComponent 
          value="Continuar" 
          formValidation={formValidation} 
          show_button={show_button} 
          show_error={show_error} 
          show_success={show_success}/>
      </form>
      
    )
  }
} 
export default FirstStepComponent
