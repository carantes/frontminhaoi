import Immutable from 'immutable'

import { UPDATE_USER } from '../actions'

let defaultState = Immutable.fromJS({
  user: {
  	email : 'durand.neto@gmail.com'
  	, password : ''
  	, cpf : ''
  }
  , title : "OI Cadastro Digital!"
})
 

function appReducer (state = defaultState, action) {
  switch ( action.type ) { 
  	case UPDATE_USER :  
  	console.log(action.user )
		return state.mergeDeep({ user : action.user })
		break 
	default : 
		return state
	}
}

export default appReducer