import Immutable from 'immutable'

import { SEND_USER_ERROR , UPDATE_USER, LOADDED_USER, CREATED_USER, CREATED_USER_ERROR, SET_HOME_DATA } from '../actions'

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
  , errorMessage : ''
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
      if(action.response.status === 500){
        return state.merge({ errorMessage : action.response.mensagem , isCreated : false })
      }
      return state.mergeDeep({ isCreated : true })
      break
    case SEND_USER_ERROR :
      return state.merge({ errorMessage : action.mensagem })
      break
    case CREATED_USER_ERROR :
      return state.mergeDeep({ errorMessage : "error 500 do servidor"})
      break
    case SET_HOME_DATA :
      return state.mergeDeep({ title :  action.data.title, logo: action.data.logo })
      break
  default : 
    return state
  }
}

export default appReducer