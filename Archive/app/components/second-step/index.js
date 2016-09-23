import React, { Component } from 'react'
import Isvg from 'react-inlinesvg'
import InputElement from 'react-input-mask'
import { Link } from 'react-router' 

class SecondtepComponent extends Component {

  _handleChange( propName , event  ) {
    let { update_user } = this.props 
    update_user( propName , event.target.value )
  }

  render () {
    let { user } = this.props
    return (
      <form  >
        <label for="cpf">
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
        </label>
        <Link to="/renato">
          <label>
            <input type="submit" value="Continuar" autoComplete="off" />
            <Isvg src="/assets/icons/form/arrow.svg" />
          </label>
        </Link> 
      </form>
    )
  }
} 

export default SecondtepComponent