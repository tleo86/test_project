import React from 'react';

import '../App.css';

const Modal = () => (
  <div className='modal-content'>
          <input type='text' placeholder='Название' value='' /> <br />
          <input type='number' placeholder='Количество' value='' /><br />
          <input type='text' placeholder='Комментарий' value='' /><br />

          <button >Готово</button>
          <button className = 'close'>Отмена</button>
  </div>
);

export default Modal;



//var modal = document.getElementById('myModal');
//var btn = document.getElementById('myBtn');
//var cls = document.getElementsByClassName('close')[0];
  //   btn.onclick = function()
    // {
	  //modal.style.display = 'block';
     //}

        //cls.onclick = function(){
	    //modal.style.display = 'none';
//}
