import Immutable from 'immutable'

import { UPDATE_USER, LOADDED_USER, CREATED_USER, CREATED_USER_ERROR, SET_HOME_DATA } from '../actions'

let defaultState = Immutable.fromJS({
  user: {
    email : 'usuario@email.com'
    , password : ''
    , cpf : ''
    , nome : 'Aguardando...'
    , cpfCripto : ''
    , token : ''
  } 
  , title : "Oi cadastro digital"
  , logo : "/assets/images/logos/oi/oi-logo-purple.svg"
  , isCreated : false
  , errorMessage : 'Sem Error'
})
 

function appReducer (state = defaultState, action) {
  switch ( action.type ) { 
    case UPDATE_USER :  
      return state.mergeDeep({ user : action.user })
      break 
    case LOADDED_USER :  
      return state.merge({ user : action.response.data })
      break 
    case CREATED_USER :
      return state.mergeDeep({ isCreated : true })
      break
    case CREATED_USER_ERROR :
      return state.mergeDeep({ errorMessage : 'com error' })
      break
    case SET_HOME_DATA :
      return state.mergeDeep({ title :  action.data.title, logo: action.data.logo })
      break
  default : 
    return state
  }
}

export default appReducer