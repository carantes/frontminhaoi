import Immutable from 'immutable'

import { SHOW_BUTTON, SHOW_ERROR, SHOW_SUCCESS, SET_MESSAGE_PASSWORD, SET_CHECK_TO_SHOW_PASSWORD, SET_VALIDATION_FIRST_STEP , SEND_USER_ERROR , UPDATE_USER, LOADDED_USER, CREATED_USER, CREATED_USER_ERROR, SET_HOME_DATA } from '../actions'

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
  , formValidation : {
    firstStep : false
    , button: 'button'
  }
  ,formImput:{
    password : {
      type:'password'
      , showPassword : false
      , message: ''
    }
  }
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
    case SET_VALIDATION_FIRST_STEP:
      return state.mergeDeep({formValidation: {firstStep: true}})
      break
    case SET_CHECK_TO_SHOW_PASSWORD:
      let type = "password" 
      let showPassword = false

      if (action.value === true){
        type = "text" 
        showPassword = true
      }
      return state.mergeDeep({formImput:{
        password: {
          type: type
          , showPassword : showPassword
        }}})
      break
    case SET_MESSAGE_PASSWORD:
      return state.mergeDeep({formImput:{
        password:{
          message: action.message
        }
      }})
      break
    case SHOW_BUTTON:
      return state.mergeDeep({formValidation:{button:'button'}})
      break
    case SHOW_ERROR:
      return state.mergeDeep({formValidation:{button:'error'}})
      break
    case SHOW_SUCCESS:
      return state.mergeDeep({formValidation:{button:'success'}})
      break
  default : 
    return state
  }
}

export default appReducer