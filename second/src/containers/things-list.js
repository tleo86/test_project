import React, { Component } from 'react';

import {connect} from 'react-redux';
import '../App.css';

class ThingList extends Component {
 showlist(){
   return this.props.things.map ((thing, index) =>{
     return(<tr>
                    <td><input type="checkbox" key ={index} /></td>
                    <td key={index}>{index}</td>
                    <td key={thing.Name}>{thing.Name}</td>
                    <td key={thing.Quantity}>{thing.Quantity}</td>
                    <td key={thing.Comment}>{thing.Comment}</td>
                    <td key={thing.Date}>{thing.Date}</td>
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
