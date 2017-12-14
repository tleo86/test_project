import React from 'react';

import '../App.css';

const Modal = () => (
  <div className="modal-content">
          <input type="text" placeholder="Название" value="" /> <br />
          <input type="number" placeholder="Количество" value="" /><br />
          <input type="text" placeholder="Комментарий" value="" /><br />

          <button >Готово</button>
          <button className = "close">Отмена</button>
  </div>
);

export default Modal;
