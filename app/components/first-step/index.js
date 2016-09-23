import React, { Component } from 'react'
import Isvg from 'react-inlinesvg'
import { Link } from 'react-router' 

class FirstStepComponent extends Component {

  _handleChange( propName , event  ) {
    let { update_user } = this.props 
    update_user( propName , event.target.value )
  }

  render() {
    let { user } = this.props
    return (
      <form >
        <label htmlFor="email">
          <input id="email" type="e-mail" name="email" placeholder="Digite seu e-mail" autoComplete="off"   onChange={this._handleChange.bind(this , 'email')}  value={user.get("email")} />
        </label>
        <label htmlFor="password">
          <input id="password" type="password" name="password" placeholder="Criar senha" autoComplete="off" onChange={this._handleChange.bind(this , 'password')}  value={user.get("password")} />
        </label>
        <p>{ user.get('token') }</p>
        <p>{ user.get('cpfCripto') }</p>
        <Link to="/passo-2">
          <label>
            <input type="submit" value="Continuar" autoComplete="off" />
            <Isvg src="/assets/icons/form/arrow.svg" />
          </label>
        </Link> 
      </form>
      
    )
  }
} 
export default FirstStepComponent
