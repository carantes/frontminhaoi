import React, { Component } from 'react'
import { connect } from 'react-redux' 
import { bindActionCreators } from 'redux'
import Isvg from 'react-inlinesvg'

import * as Actions from './../actions'

import { load_user } from './../actions'
import MenuComponent from './../components/menu'
import ServiceListComppnent from './../components/service-list'

class Fixo extends Component {
// static fetchData({ store, params }) {
//    	let { cpf } = params
//    	console.log('CPF',cpf);
//    	return store.dispatch(load_user({ cpf }))
//    }


componentDidMount() {
  this.props.set_home_data({title:'Cadastro Digital Fixo', logo:'/assets/images/logos/oi/logo_oi_desk.svg'})
}


render() {
  let { user } = this.props
// let { numeroTelefone } = this.props.params
return (
  <div>
  <MenuComponent/>
  <div>
  </div>      
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

export default connect(mapStateToProps, mapDispatchToProps)(Fixo)