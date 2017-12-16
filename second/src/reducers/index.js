import { combineReducers } from 'redux';
import things from './info';
import addThingModal from './addThingModal';

const rootReducer = combineReducers({
  things,
  addThingModal
});

export default rootReducer;
