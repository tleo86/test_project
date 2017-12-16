import initialState from '../store/initialState'
import {ADD_THING_MODAL_OPEN} from '../actions/actionTypes'

export default function addthing (state = initialState.addThingModal, action) {
  switch (action.type) {
    case  ADD_THING_MODAL_OPEN:
      return {...state, isOpen: true};
    default:
      return state;
  }
}
