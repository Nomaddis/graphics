import React, {Component} from 'react';

import { CartesianGrid,
  XAxis, YAxis, Tooltip, Legend, Line, LineChart } from 'recharts';
import {ButtonToolbar, DropdownButton, MenuItem, ToggleButton, ToggleButtonGroup} from "react-bootstrap";

import XLSX from 'xlsx';
import DragDropFile from '../../UI/DragDropFile/DragDropFile'
import DataInput from '../../UI/DataInput/DataInput'

import Workbook from 'react-excel-workbook'

import excelToJson from 'convert-excel-to-json';


import PDFPreview from '../../UI/PdfPreview/PdfPreview'


const data = [
  {name: 1, y1: 1, y2: 51, y3: 501, amt: 2400},
  {name: 2, y1: 4.69314718055995, y2: 54, y3: 504},
  {name: 3, y1: 10.0986122886681, y2: 59, y3: 509},
  {name: 4, y1: 17.3862943611199, y2: 66, y3: 516},
  {name: 5, y1: 26.6094379124341, y2: 75, y3: 525},
  {name: 6, y1: 37.7917594692281, y2: 86, y3: 536},
  {name: 7, y1: 50.9459101490553, y2: 99, y3: 549},
];

const data2 = [
  {
    aaa: 1,
    bbb: 2,
    ccc: 3
  },
  {
    aaa: 4,
    bbb: 5,
    ccc: 6
  }
];

class ExcelImport extends Component {



  constructor(props) {
    super(props);
    this.state = {
      numPages: null,
      pageNumber: 1,
      buildData: [
        {name: null, y: null},
      ],
      startg: data,
      // data: data,
      data: [], /* Array of Arrays e.g. [["a","b"],[1,2]] */
      cols: []  /* Array of column objects e.g. { name: "C", K: 2 } */
    };
  };

  handleFile = (file/*:File*/) => {
    /* Boilerplate to set up FileReader */
    const reader = new FileReader();
    const rABS = !!reader.readAsBinaryString;
    reader.onload = (e) => {
      /* Parse data */
      const bstr = e.target.result;
      const wb = XLSX.read(bstr, {type:rABS ? 'binary' : 'array'});
      /* Get first worksheet */
      const wsname = wb.SheetNames[0];
      const ws = wb.Sheets[wsname];
      /* Convert array of arrays */
      const data = XLSX.utils.sheet_to_json(ws, {header:1});
      /* Update state */
      // this.setState({ data: data, cols: data.splice(0, 1)});
      this.setState({
        buildData: data.map((arr) => {return arr.slice(1, arr.length)}),
        cols: data.map((arr) => {return arr.splice(0, 1)})});
      this.generateGraphicData();
    };
    if(rABS) reader.readAsBinaryString(file); else reader.readAsArrayBuffer(file);
  };

  generateGraphicData = () => {
    const { buildData, cols } = this.state;
    console.log(this.state.buildData);

    let newBuildData = [];

    buildData[0].forEach(function(item, i, arr) {
      newBuildData.push({name: buildData[0][i], y: buildData[1][i]})
    });


    console.log(newBuildData, 'buildData');
    console.log(this.state.cols, 'cols');

    this.setState({startg: newBuildData});

  };



  onDocumentLoad = ({ numPages }) => {
    this.setState({ numPages });
  };


  dropdownHandler = (event) => {
    if(event === '1') {
      this.setState({data : data2});
    } else if(event === '2') {
      this.setState({data});
    }
  };


  render() {

    const pdfDesc = 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).';

    return (
      <div>

        <div>
          <DragDropFile handleFile={this.handleFile}>
            <div className="row"><div className="col-xs-12">
              <DataInput handleFile={this.handleFile} />
            </div></div>
            {/*<div className="row"><div className="col-xs-12">*/}
              {/*<button disabled={!this.state.data.length} className="btn btn-success" onClick={this.exportFile}>Export</button>*/}
            {/*</div></div>*/}
            <div className="row"><div className="col-xs-12">
              {/*<OutTable data={this.state.data} cols={this.state.cols} />*/}
            </div></div>
          </DragDropFile>
        </div>


        <h1 style={{textAlign: 'center'}}>Simulation of communication parameters</h1>
        <div className='col-md-7'>
          <div className='graphic-container'>

            <h3 style={{textAlign: 'center'}}>ExcelImport</h3>
            <LineChart width={600} height={300} data={this.state.startg}
                       margin={{top: 5, right: 30, left: 20, bottom: 5}}>
              <XAxis dataKey="name"/>
              <YAxis/>
              <CartesianGrid strokeDasharray="3 3"/>
              <Tooltip/>
              <Legend />
              <Line type="monotone" dataKey="y" stroke="#8884d8" activeDot={{r: 8}}/>
            </LineChart>
          </div>

        </div>
        <div className='col-md-5'>
          <div className='graphic-control'>
            <div className='btn-wrapper'>
              <DropdownButton title="change parameter" id="bg-nested-dropdown" onSelect={event => {this.dropdownHandler(event)}}>
                <MenuItem eventKey="1">param 1</MenuItem>
                <MenuItem eventKey="2">param 2</MenuItem>
              </DropdownButton>
            </div>

            <ButtonToolbar>
              <ToggleButtonGroup type="radio" name="options" defaultValue={1}>
                <ToggleButton value={1}>toggle 1</ToggleButton>
                <ToggleButton value={2}>toggle 2</ToggleButton>
                <ToggleButton value={3} disabled>toggle 3</ToggleButton>
              </ToggleButtonGroup>
            </ButtonToolbar>
          </div>
        </div>
        <PDFPreview title='Some pdf title' src='./pdf-test.pdf' desc={pdfDesc}/>

      </div>
    );
  }
}

/* generate an array of column objects */
const make_cols = refstr => {
  let o = [], C = XLSX.utils.decode_range(refstr).e.c + 1;
  for(var i = 0; i < C; ++i) o[i] = {name:XLSX.utils.encode_col(i), key:i}
  return o;
};




export default ExcelImport;