import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import  rootReducer from './reducers/index';




const store = createStore(rootReducer);
function listthings(state = [], action){
if(action.type=== 'ADD_THING'){
  return [
  ...state,
    action.payload
  ];
}
return state;
}
store.subscribe(() => {
  console.log('subscribe', store.getState());
  const thngls = document.querySelectorAll('.table')[0];
  //store.getState().forEach(Name => {
  //const td = document.createElement('tr');
  //td.textContent = Name;
  //thngls.appendChild(td);
//})
});
store.dispatch ({type: 'ADD_THING', payload:''});

//const addthngBtn = document.querySelectorAll('.addthng')[0];
//addthngBtn.addEventListener('onClick', () => {
//const thingName = document.querySelectorAll('.thingName')[0].value;
//const thingQuent = document.querySelectorAll('.thingQuent')[0].value;
//const thingCom = document.querySelectorAll('.thingCom')[0].value;
  console.log('thingName');


//});


ReactDOM.render(
  <Provider store={store}>
    <App />
    </Provider>, document.getElementById('root'));
registerServiceWorker();
