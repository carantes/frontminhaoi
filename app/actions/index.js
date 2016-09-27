import { CALL_API, CHAIN_API } from 'middleware/api'
import { browserHistory } from 'react-router'
import { _ } from 'lodash'
export const UPDATE_USER = Symbol('UPDATE_USER') 
export const LOADDED_USER = Symbol('LOADDED_USER') 
export const CREATED_USER = Symbol('CREATED_USER') 
export const CREATED_USER_ERROR = Symbol('CREATED_USER_ERROR') 
export const SET_HOME_DATA = Symbol('SET_HOME_DATA') 

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
      // afterSuccess : GO_TO('/usuario/concurso')
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
      type: 'external'
      // afterSuccess : GO_TO('/user/10559258720')
    }
  }
}

export function errorMessage(data){
  return {
    type: CREATED_USER_ERROR,
    data
  }
}