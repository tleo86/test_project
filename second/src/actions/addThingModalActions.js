import * as actionTypes from './actionTypes';

export function open() {
  return { type: actionTypes.ADD_THING_MODAL_OPEN }
  
}

export function changename(name) {
  return { type: actionTypes.CHANGE_NAME , name}
  
}