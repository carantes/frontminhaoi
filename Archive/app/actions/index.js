import { CALL_API, CHAIN_API } from 'middleware/api'
import { browserHistory } from 'react-router'
import { _ } from 'lodash'
 

export const UPDATE_USER = Symbol('UPDATE_USER') 

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
  }

  return {
    type: UPDATE_USER,
    user
  }
}


export function loadUser( cpf ) {
  let user = {}
  user.cpf =  cpf;

  return {
    [CALL_API]: {
      method: 'post',
      type: 'external',
      body :  user ,
      path: '/user/save',
      successType: LOADDED_USER,
      // afterSuccess : GO_TO('/usuario/concurso')
    }
  }
}