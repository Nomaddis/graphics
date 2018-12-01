import React, {Component} from 'react';

import {
  CartesianGrid,
  XAxis, YAxis, Tooltip, Legend, Line, LineChart, BarChart
} from 'recharts';
import './Analytics.css';
import {Button, ButtonToolbar, DropdownButton, MenuItem, Modal, ToggleButton, ToggleButtonGroup} from "react-bootstrap";
import Bar from "recharts/es6/cartesian/Bar";
import Cell from "recharts/es6/component/Cell";
import ModalGraphic from "./modalGraphic";
import {Chart, HighchartsChart, PlotBand, SplineSeries, Subtitle, Title} from "react-jsx-highcharts";


const timeData = [
  {name: 1, ms: getRandomInt(50, 150)},// very well
  {name: 2, ms: getRandomInt(150, 200)},// good
  {name: 3, ms: getRandomInt(50, 150)},// very well
  {name: 4, ms: getRandomInt(150, 200)},// good
  {name: 5, ms: getRandomInt(50, 150)},// very well
  {name: 6, ms: getRandomInt(150, 200)},// good
  {name: 7, ms: getRandomInt(201, 301)},// bad
  {name: 8, ms: getRandomInt(150, 200)},// good
  {name: 9, ms: getRandomInt(150, 200)},// good
  {name: 10, ms: getRandomInt(150, 200)},// good
];

const PData = [
  {name: 1, p: getRandomFloatmin(0.02, 0.1)},// very well
  {name: 2, p: getRandomFloatmin(0.1, 0.9)},// good
  {name: 3, p: getRandomFloatmin(0.02, 0.1)},// very well
  {name: 4, p: getRandomFloatmin(0.1, 0.9)},// good
  {name: 5, p: getRandomFloatmin(0.02, 0.1)},// very well
  {name: 6, p: getRandomFloatmin(0.1, 0.9)},// good
  {name: 7, p: getRandomFloatmin(1.1, 2.1)},
  {name: 8, p: getRandomFloatmin(0.1, 0.9)},// good
  {name: 9, p: getRandomFloatmin(0.1, 0.9)},// good
  {name: 10, p: getRandomFloatmin(0.1, 0.9)},// good
];

const JData = [
  {name: 1, ms: getRandomInt(1, 19)},// very well
  {name: 2, ms: getRandomInt(21, 49)},// good
  {name: 3, ms: getRandomInt(1, 19)},// very well
  {name: 4, ms: getRandomInt(21, 49)},// good
  {name: 5, ms: getRandomInt(1, 19)},// very well
  {name: 6, ms: getRandomInt(21, 49)},// good
  {name: 7, ms: getRandomInt(51, 67)},
  {name: 8, ms: getRandomInt(21, 49)},// good
  {name: 9, ms: getRandomInt(21, 49)},// good
  {name: 10, ms: getRandomInt(21, 49)},// good
];

const filteredData = [
  {name: 0, QoS: 5},
  {name: 0.2, QoS: 4.2},
  {name: 0.4, QoS: 2.2},
  {name: 0.6, QoS: 0.6},
  {name: 0.8, QoS: 0},
];


function getRandomInt(min, max) {
  let rund = Math.floor(Math.random() * (max - min + 1)) + min;
  return parseFloat(rund.toFixed(4));
}

function getRandomFloatmin(min, max) {
    return Math.random() * (max - min) + min;
};


class analytics extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleHide = this.handleHide.bind(this);

    this.state = {
      show: false,
      numPages: null,
      pageNumber: 1,
      timeData: timeData,
      PData: PData,
      JData: JData,
    };
  }

  handleShow() {
    this.setState({ show: true });
  }

  filterTimeData = () => {
    let timeData = [];
    this.state.timeData.forEach((item) => {
      if(item.ms < 200) {
        timeData.push({ name: item.name, ms: 0});
      } else {
        timeData.push(item);
      }
    });
    this.setState({ timeData });
  };

  filterPDataData = () => {
    let PData = [];
    this.state.PData.forEach((item) => {
      if(item.p < 1) {
        PData.push({ name: item.name, p: 0});
      } else {
        PData.push(item);
      }
    });
    this.setState({ PData });
  };

  filterJDataData = () => {
    let JData = [];
    this.state.JData.forEach((item) => {
      if(item.ms < 50) {
        JData.push({ name: item.name, ms: 0});
      } else {
        JData.push(item);
      }
    });
    this.setState({ JData });
  };

  handleHide() {
    this.setState({ show: false });
  }


  render() {
    const { timeData } = this.state;

    return (
      <div>
        <h1 style={{textAlign: 'center'}}>Simulation of communication parameters</h1>
        <div className='row'>
          <div className='col-md-6'>
            <div className='graphic-container'>
              <h3 style={{textAlign: 'center'}}>Затримка</h3>
              <BarChart width={550} height={300} data={timeData}
                        margin={{top: 5, right: 30, left: 20, bottom: 5}}>
                <CartesianGrid strokeDasharray="3 3"/>
                <XAxis dataKey="name" label={{ value: "Users", position: 'insideBottomRight', offset: 0 }}/>
                <YAxis label={{ value: "t", position: 'insideLeft' }}/>
                <Tooltip/>
                <Legend />
                <Bar dataKey="ms" fill="#8884d8" >
                  {
                    timeData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.ms > 200 ? '#a01313' : entry.ms < 200 && entry.ms > 150 ? "#dac525" : "#2ca02c"}/>
                    ))
                  }
                </Bar>
              </BarChart>
            </div>
          </div>

          <div className='col-md-6'>
            <div className='graphic-container'>
              <h3 style={{textAlign: 'center'}}>Втрати</h3>
              <BarChart width={550} height={300} data={this.state.PData}
                        margin={{top: 5, right: 30, left: 20, bottom: 5}}>
                <CartesianGrid strokeDasharray="3 3"/>
                <XAxis dataKey="name" label={{ value: "Users", position: 'insideBottomRight', offset: 0 }}/>
                <YAxis label={{ value: "p", position: 'insideLeft' }}/>
                <Tooltip/>
                <Legend />
                <Bar dataKey="p" fill="#8884d8" >
                  {
                    PData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.p > 1 ? '#a01313' : entry.p < 1 && entry.p > 0.1 ? "#dac525" : "#2ca02c"}/>
                    ))
                  }
                </Bar>
              </BarChart>
            </div>
          </div>
        </div>

        <div className='row'>

        </div>

        <div className='row'>
          <div className='col-md-6'>
            <div className='graphic-container'>
              <h3 style={{textAlign: 'center'}}>Джитер</h3>
              <BarChart width={550} height={300} data={this.state.JData}
                        margin={{top: 5, right: 30, left: 20, bottom: 5}}>
                <CartesianGrid strokeDasharray="3 3"/>
                <XAxis dataKey="name" label={{ value: "Users", position: 'insideBottomRight', offset: 0 }}/>
                <YAxis label={{ value: "j", position: 'insideLeft' }}/>
                <Tooltip/>
                <Legend />
                <Bar dataKey="ms" fill="#8884d8">
                  {
                    JData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.ms > 50 ? '#a01313' : entry.ms < 50 && entry.ms > 20 ? "#dac525" : "#2ca02c"}/>
                    ))
                  }
                </Bar>
              </BarChart>
            </div>
          </div>
          <div className="col-md-6">
            <Button bsStyle="primary" onClick={this.handleShow}>
              More details
            </Button>
            <Button bsStyle="primary" onClick={() => {
              this.filterTimeData();
              this.filterPDataData();
              this.filterJDataData();
            }}>
              Filter
            </Button>
          </div>
        </div>


        <div>
          <Modal
            {...this.props}
            show={this.state.show}
            onHide={this.handleHide}
            dialogClassName="custom-modal"
            bsSize="large"
            aria-labelledby="contained-modal-title-lg"
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-lg">
                Modal heading
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <h4>Filtered</h4>
              <div className='graphic-container graphic-container-modal'>
                <h3 style={{textAlign: 'center'}}>Затримка</h3>
                <LineChart width={800} height={300} data={filteredData}
                           margin={{top: 5, right: 30, left: 20, bottom: 5}}>
                  <XAxis dataKey="name" label={{ value: "QoS", position: 'insideBottomRight', offset: 0 }}/>
                  <YAxis/>
                  <CartesianGrid strokeDasharray="3 3"/>
                  <Tooltip/>
                  <Legend />
                  <Line type="monotone" dataKey="QoS" stroke="#8884d8" activeDot={{r: 8}}/>
                </LineChart>
                {/*<div className='graphic-modal-labels'>*/}
                  {/*<div className="label-container">*/}
                    {/*<span className="modal-label">Користувачі дуже задоволені</span>*/}
                    {/*<span className="modal-label">Користувачі задовлені</span>*/}
                    {/*<span className="modal-label">Деякі користувачі не задоволені</span>*/}
                    {/*<span className="modal-label">Башато користувачівне задоволені </span>*/}
                    {/*<span className="modal-label">Всі користувачі не задоволені</span>*/}
                  {/*</div>*/}
                {/*</div>*/}
              </div>

            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.handleHide}>Close</Button>
            </Modal.Footer>
          </Modal>
        </div>


      </div>
    );
  }
}

export default analytics;