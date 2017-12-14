import React from 'react';

import '../App.css';

const buttoms = () => (
  <div id='buttons'>
       <button className='btns' id = "add" onclick="addrows();">добавить</button>
       <button className='btns'>удалить</button>
  </div>
);

export default buttoms;
