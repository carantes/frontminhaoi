import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as Actions from './../actions'
import SecondStepComponent from './../components/second-step'

class SecondStep extends Component {
  render() {
  	let { user , update_user } = this.props
    return (
      <SecondStepComponent user={user} update_user={update_user} />
    )
  }
}
function mapStateToProps(state) { 
  return {
    user : state.App.get('user')
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SecondStep)