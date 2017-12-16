import React, { Component } from 'react';

import {connect} from 'react-redux';
import '../App.css';

class ThingList extends Component {
 showlist(){
   return this.props.things.map ((thing, index) =>{
     return(<tr key ={index}>
                    <td><input type="checkbox"  /></td>
                    <td>{index}</td>
                    <td>{thing.Name}</td>
                    <td>{thing.Quantity}</td>
                    <td>{thing.Comment}</td>
                    <td>{thing.Date}</td>
            </tr>
       )}
     );
 }

  render(){
    return  this.showlist()
  }
}
function mapStateToProps (state) {
  return{
    things: state.things
  }
}

export default connect(mapStateToProps)(ThingList);
