import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as Actions from './../actions'

import SecondStepComponent from './../components/second-step'

class SecondStep extends Component {

  componentWillMount() {
    console.log("----------------")
    console.log("----------------")
    console.log("----------------")

    let { sendErrorMessage } = this.props
    //sendErrorMessage('comecando funcao')
    
  }
  render() {
  	let { user , update_user, create_user, errorMessage, formValidation, show_button, show_error, show_success } = this.props
    return (
      <SecondStepComponent 
        user={user} 
        update_user={update_user} 
        create_user={create_user} 
        errorMessage={errorMessage}
        formValidation={formValidation}
        show_button={show_button}
        show_error={show_error}
        show_success={show_success}/>
    )
  }
}
function mapStateToProps(state) { 
  return {
    user : state.App.get('user')
    , errorMessage : state.App.get('errorMessage')
    , formValidation: state.App.get('formValidation')
    , show_error: state.App.get('show_error')
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SecondStep)