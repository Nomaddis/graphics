import React, { Component } from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import dropdown1 from "./components/DropdownMenu/dropdownMenu1";
import dropdown2 from "./components/DropdownMenu/dropdownMenu2";
import Publishing from "./components/Publishing/Publishing";

import Highcharts from 'highcharts';
import {
  HighchartsChart, Chart, withHighcharts, XAxis, YAxis, Title, Subtitle, Legend, LineSeries
} from 'react-jsx-highcharts';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>

        <Route exact path="/" component={dropdown1} />
        <Route path="/about" component={dropdown2} />
        <Route path="/publishing" component={Publishing} />
        <Footer/>
      </div>
    );
  }
}


function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

export default withHighcharts (App, Highcharts);