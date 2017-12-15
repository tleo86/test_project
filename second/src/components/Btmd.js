import React from 'react';
import Modal from 'react-modal';
//import {showBigModal} from '../Actions/index';
//import {bindActionCreators} from 'redux';
//import {connect} from 'react-redux';

import '../App.css';

class Btmd extends React.Component {
constructor(){
  super()
  this.state = {
    isActive: false
  }
}
componentWillMount() {
 Modal.setAppElement('body');
}
toggleModal = () => {
  this.setState({
    isActive: !this.state. isActive
  })
}
addthing() {
  console.log('addthing', this.nameInput.value,  this.quentInput.value, this.comInput.value );
}
render(){
  return(
    <div id='buttons'>
       <button onClick = {this.toggleModal} className='btns' >Добавить</button>
          <Modal isOpen={this.state.isActive}  onRequestClose={this.toggleModal} className='modal-content'>
             <input type="text" placeholder='Название' ref = {(inputname)=>{this.nameInput = inputname}} /> <br />
             <input type="number"placeholder='Количество' ref = {(inputq)=>{this.quentInput = inputq}} /><br />
             <input type="text" placeholder='Комментарий' ref = {(inputcom)=>{this.comInput = inputcom}} /><br />
                 <button onClick= {this.addthing.bind(this)} className='addthng'>Готово</button>
                 <button onClick = {this.toggleModal} className = 'close'>Отмена</button>
          </Modal>
     <button className='btns'>удалить</button>
    </div>
);
}
}


export default  Btmd;
