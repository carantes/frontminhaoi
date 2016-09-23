import React, { Component } from 'react'
import { connect } from 'react-redux' 
import { bindActionCreators } from 'redux'
import Isvg from 'react-inlinesvg'

import * as Actions from './../actions'

import { load_user } from './../actions'
import ServiceListComppnent from './../components/service-list'

class User extends Component {

//uso do backend
//static fetchData({ store, params }) {
  //  	let { cpf } = params
  //  	return store.dispatch(load_user({ cpf }))
  //  }

//uso do frontend
  componentWillMount() {
    let { cpf } = this.props.params
    this.props.load_user({ cpf })
    this.props.set_home_data({title:'Oi cadastro digital', logo:'/assets/images/logos/oi/oi-logo-purple.svg'})
  }

  render() {
  	let { user } = this.props 
    return (
    	<div>
        <ServiceListComppnent user={ user } />  
      </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(User)