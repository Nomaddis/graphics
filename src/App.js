import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Button, MenuItem, Nav, NavDropdown, NavItem} from 'react-bootstrap';
import Navbar from "react-bootstrap/es/Navbar";
import Header from "./components/Header/Header";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
      </div>
    );
  }
}

export default App;
