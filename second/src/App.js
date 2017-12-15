import React, { Component } from 'react';
//import Modal from 'react-modal';
import Table from './components/table';
import Thead from './components/Thead';
import Btmd from './components/Btmd';



import './App.css';

import { connect } from  "react-redux"



class App extends Component {

  render() {

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

        </div>
        );
  }
}



export default connect (
state => ({
things: state}),
dispatch=> ({})
)(App);
