import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Table from './components/table';
import Thead from './components/Thead';
import Modal from './components/modal';
import Btmd from './components/Btmd';



import './App.css';

import { connect } from  "react-redux"



class App extends Component {
  render() {
    console.log(this.props.things);
    return (
      <div>
          <div className= 'App-header'>
            <h1>Тестовое задание </h1>
          </div>
             <table>
                <Thead />
                <Table />
            </table>
            <Btmd />
            <div id ='myModal' className="modal">
                <Modal />
            </div>
        </div>
        );
  }
}
export default connect (
state => ({
things: state}),
dispatch=> ({})
)(App);
