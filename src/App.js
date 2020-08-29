import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './shared/Header'
import Footer from './shared/Footer'
import Sidebar from './shared/Sidebar'
import { render } from '@testing-library/react';

class App extends Component {

  render() {
    return (
      <div>
        <div className="App" id="wrapper">

          <Sidebar></Sidebar>
          <div id="content-wrapper" class="d-flex flex-column">
            <div id="content">
              <Header></Header>
              <h1>Torne-se um programador</h1>
              <div class="container-fluid">
              </div>
            </div>
          </div>
        </div>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
