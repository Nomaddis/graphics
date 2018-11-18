import React, {Component} from 'react';

import { BarChart, Bar, Brush, Cell, CartesianGrid, ReferenceLine, ReferenceDot,
  XAxis, YAxis, Tooltip, Legend, Line, LineChart } from 'recharts';
import {ButtonToolbar, DropdownButton, MenuItem, ToggleButton, ToggleButtonGroup} from "react-bootstrap";


import PDFPreview from '../UI/PdfPreview/PdfPreview'


const data = [
  {name: 1, y1: 1, y2: 51, y3: 501, amt: 2400},
  {name: 2, y1: 4.69314718055995, y2: 54, y3: 504},
  {name: 3, y1: 10.0986122886681, y2: 59, y3: 509},
  {name: 4, y1: 17.3862943611199, y2: 66, y3: 516},
  {name: 5, y1: 26.6094379124341, y2: 75, y3: 525},
  {name: 6, y1: 37.7917594692281, y2: 86, y3: 536},
  {name: 7, y1: 50.9459101490553, y2: 99, y3: 549},
  {name: 8, y1: 66.07944154, y2: 114, y3: 564},
  {name: 9, y1: 83.19722458, y2: 131, y3: 581},
  {name: 10, y1: 102.3025851, y2: 150, y3: 600},
  {name: 11, y1: 123.3978953, y2: 171, y3: 621},
  {name: 12, y1: 146.4849066, y2: 194, y3: 644},
  {name: 13, y1: 171.5649494, y2: 219, y3: 669},
  {name: 14, y1: 198.6390573, y2: 246, y3: 696},
  {name: 15, y1: 227.7080502, y2: 275, y3: 725},
  {name: 16, y1: 258.7725887, y2: 306, y3: 756},
  {name: 17, y1: 291.8332133, y2: 339, y3: 789},
  {name: 18, y1: 326.8903718, y2: 374, y3: 824},
  {name: 19, y1: 363.944439, y2: 411, y3: 861},
  {name: 20, y1: 402.9957323, y2: 450, y3: 900},
  {name: 21, y1: 444.0445224, y2: 491, y3: 941},
  {name: 22, y1: 487.0910425, y2: 534, y3: 984},
  {name: 23, y1: 532.1354942, y2: 579, y3: 1029},
  {name: 24, y1: 579.1780538, y2: 626, y3: 1076},
  {name: 25, y1: 628.2188758, y2: 675, y3: 1125},
  {name: 26, y1: 679.2580965, y2: 726, y3: 1176},
  {name: 27, y1: 732.2958369, y2: 779, y3: 1229},
  {name: 28, y1: 787.3322045, y2: 834, y3: 1284},
  {name: 29, y1: 844.3672958, y2: 891, y3: 1341},
  {name: 30, y1: 903.4011974, y2: 950, y3: 1400},
  {name: 31, y1: 964.4339872, y2: 1011, y3: 1461},
  {name: 32, y1: 1027.465736, y2: 1074, y3: 1524},
  {name: 33, y1: 1092.496508, y2: 1139, y3: 1589},
  {name: 34, y1: 1159.526361, y2: 1206, y3: 1656},
  {name: 35, y1: 1228.555348, y2: 1275, y3: 1725},
  {name: 36, y1: 1299.583519, y2: 1346, y3: 1796},
  {name: 37, y1: 1372.610918, y2: 1419, y3: 1869},
  {name: 38, y1: 1447.637586, y2: 1494, y3: 1944},
  {name: 39, y1: 1524.663562, y2: 1571, y3: 2021},
  {name: 40, y1: 1603.688879, y2: 1650, y3: 2100},
  {name: 41, y1: 1684.713572, y2: 1731, y3: 2181},
  {name: 42, y1: 1767.73767, y2: 1814, y3: 2264},
  {name: 43, y1: 1852.7612, y2: 1899, y3: 2349},
  {name: 44, y1: 1939.78419, y2: 1986, y3: 2436},
  {name: 45, y1: 2028.806662, y2: 2075, y3: 2525},
  {name: 46, y1: 2119.828641, y2: 2166, y3: 2616},
  {name: 47, y1: 2212.850148, y2: 2259, y3: 2709},
  {name: 48, y1: 2307.871201, y2: 2354, y3: 2804},
  {name: 49, y1: 2404.89182, y2: 2451, y3: 2901},
  {name: 50, y1: 2503.912023, y2: 2550, y3: 3000},
];

const data2 = [
  {name: 'Page A', y1: 4000, y2: 2400},
  {name: 'Page B', y1: 3000, y2: 1398},
  {name: 'Page C', y1: 2000, y2: 9800},
  {name: 'Page D', y1: 2780, y2: 3908},
  {name: 'Page E', y1: 1890, y2: 4800},
  {name: 'Page F', y1: 2390, y2: 3800},
  {name: 'Page G', y1: 3490, y2: 4300},
];

class dropdownMenu1 extends Component {
  state = {
    numPages: null,
    pageNumber: 1,
    data: data,
  };

  onDocumentLoad = ({ numPages }) => {
    this.setState({ numPages });
  };

  dropdownHandler = (event) => {
    if(event === '1') {
      this.setState({data : data2});
    } else if(event === '2') {
      this.setState({data : data});
    }
  };

  render() {
    const { pageNumber, numPages } = this.state;

    const pdfDesc = 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).';

    return (
      <div className='container'>
        <h1 style={{textAlign: 'center'}}>Simulation of communication parameters</h1>
        <div className='col-md-7'>
          <div className='graphic-container'>
            <h3 style={{textAlign: 'center'}}>Graphic title</h3>
            <LineChart width={600} height={300} data={this.state.data}
                       margin={{top: 5, right: 30, left: 20, bottom: 5}}>
              <XAxis dataKey="name"/>
              <YAxis/>
              <CartesianGrid strokeDasharray="3 3"/>
              <Tooltip/>
              <Legend />
              <Line type="monotone" dataKey="y1" stroke="#8884d8" activeDot={{r: 8}}/>
              <Line type="monotone" dataKey="y2" stroke="#82ca9d" />
              <Line type="monotone" dataKey="y3" stroke="#82ca9d" />
            </LineChart>
          </div>

        </div>
        <div className='col-md-5'>
          <DropdownButton title="change parameter" id="bg-nested-dropdown" onSelect={event => {this.dropdownHandler(event)}}>
            <MenuItem eventKey="1">param 1</MenuItem>
            <MenuItem eventKey="2">param 2</MenuItem>
          </DropdownButton>

          <ButtonToolbar>
            <ToggleButtonGroup type="radio" name="options" defaultValue={1}>
              <ToggleButton value={1}>toggle 1</ToggleButton>
              <ToggleButton value={2}>toggle 2</ToggleButton>
              <ToggleButton value={3} disabled>toggle 3</ToggleButton>
            </ToggleButtonGroup>
          </ButtonToolbar>
        </div>

        {/*<PDFViewer document={{*/}
          {/*url: 'https://arxiv.org/pdf/quant-ph/0410100.pdf'*/}
        {/*}} />*/}

        {/*<h1>Pdf here</h1>*/}
        {/*<div className='col-md-12'>*/}
          {/*<iframe src="somefile.pdf" width="100%" height="800" />*/}
        {/*</div>*/}

        <PDFPreview title='Some pdf title' src='http://www.pdf995.com/samples/pdf.pdf' desc={pdfDesc}/>

      </div>
    );
  }
}

export default dropdownMenu1;