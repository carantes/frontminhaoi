import { CALL_API, CHAIN_API } from '../middleware/api'
import { browserHistory } from 'react-router'
import { _ } from 'lodash'
export const UPDATE_USER = Symbol('UPDATE_USER') 
export const LOADDED_USER = Symbol('LOADDED_USER') 
export const CREATED_USER = Symbol('CREATED_USER') 
export const CREATED_USER_ERROR = Symbol('CREATED_USER_ERROR') 
export const SET_HOME_DATA = Symbol('SET_HOME_DATA') 
export const SEND_USER_ERROR = Symbol('SEND_USER_ERROR') 
export const SET_VALIDATION_FIRST_STEP = Symbol('SET_VALIDATION_FIRST_STEP') 
export const SET_CHECK_TO_SHOW_PASSWORD = Symbol('SET_CHECK_TO_SHOW_PASSWORD') 
export const SET_MESSAGE_PASSWORD = Symbol('SET_MESSAGE_PASSWORD') 
export const SHOW_BUTTON = Symbol('SHOW_BUTTON') 
export const SHOW_ERROR = Symbol('SHOW_ERROR') 
export const SHOW_SUCCESS = Symbol('SHOW_SUCCESS') 

export function GO_TO (path){
 browserHistory.push(path)
}

export function update_user(propName , propValue){ 
  let user = {};

  switch ( propName ) {
    case 'email':
      user = { email : propValue }
      break;
    case 'password':
      user = { password : propValue }
      break;
    case 'cpf':
      user = { cpf : propValue }
      break;
    case 'cpfCripto':
      user = { cpfCripto : propValue }
      break;
    case 'token':
      user = { token : propValue }
      break;
  }

  return {
    type: UPDATE_USER,
    user
  }
  
}

export function set_home_data(data){
  return {
    type: SET_HOME_DATA,
    data
  }
}

export function set_validation_first_setp(data){
  return {
    type: SET_VALIDATION_FIRST_STEP
  }
}

export function set_check_to_show_password(value){
  return {
    type: SET_CHECK_TO_SHOW_PASSWORD
    , value  
  }
}

export function set_password_message(message){
  return {
    type: SET_MESSAGE_PASSWORD
    , message  
  }
}

export function load_user( cpf ) {
  let user = {}
  user.cpf =  cpf;

  return {
    [CALL_API]: {
      method: 'post', 
      body :  cpf ,
      path: '/precadastro/consulta/',
      successType: LOADDED_USER,
      type: 'external' 
    }
  }
}

export function create_user( user ) {

  return {
    [CALL_API]: {
      method: 'post', 
      //body :  { cpf : user.get('cpf'), token : 658828, senha  : 'abc123', cpfcripto  : '3XvZTP0atAgmyRaJVOwg0Q==' },
      body : user.toObject(),
      path: '/cadastro/',
      successType: CREATED_USER,
      errorType: CREATED_USER_ERROR,
      type: 'external',
      afterSuccess : ()=>{GO_TO('/user/'+user.get('cpf').replace(/[^0-9]/gi, ''))}
    }
  }
}

export function sendErrorMessage(mensagem){
  return {
    type: SEND_USER_ERROR,
    mensagem
  }
}

export function show_button(){
  return {
    type: SHOW_BUTTON,
  }
}

export function show_error(){
  return {
    type: SHOW_ERROR,
  }
}

export function show_success(){
  return {
    type: SHOW_SUCCESS,
  }
}