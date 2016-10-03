import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as Actions from './../actions'

import FirstStepComponent from './../components/first-step'
import SecondStepComponent from './../components/second-step'


class FirstStep extends Component {
  
  componentWillMount() {
    let { email, token, cpfCripto } = this.props.params
    let { update_user, errorMessage, show_error } = this.props
    
    update_user('email', email )
    update_user('token', token )
    update_user('cpfCripto', cpfCripto )

  }

  render() {
  	let { user , update_user, errorMessage , formValidation, set_validation_first_setp, create_user, _handleChangeCheckbox, formImput, set_check_to_show_password, set_password_message, show_button, show_error, show_success } = this.props
    return (
      <div>
      {
        formValidation.get('firstStep') === false ? (
          <FirstStepComponent 
            set_validation_first_setp={set_validation_first_setp} 
            formValidation={formValidation} 
            formImput={formImput} 
            set_check_to_show_password= {set_check_to_show_password} 
            set_password_message={set_password_message} 
            user={user} 
            update_user={update_user} 
            show_button={show_button} 
            show_error={show_error} 
            show_success={show_success}/>
        ) :
        (
          <SecondStepComponent user={user} 
            update_user={update_user} 
            create_user={create_user} 
            errorMessage={errorMessage} 
            formValidation={formValidation} 
            show_button={show_button} 
            show_error={show_error} 
            show_success={show_success}/>
        )
      }      
      </div>
    )
  }
} 
 
function mapStateToProps(state) { 
  return {
    user : state.App.get('user')
    , errorMessage : state.App.get('errorMessage')
    , formValidation : state.App.get('formValidation')
    , formImput: state.App.get('formImput')
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(FirstStep)