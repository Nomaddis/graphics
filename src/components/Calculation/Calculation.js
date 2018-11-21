import React, {Component} from 'react';
// import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import './Calculation.css';
import {Button, FormControl, FormGroup, Table} from "react-bootstrap";


class Calculation extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleChangeLoss = this.handleChangeLoss.bind(this);

    this.state = {
      value: '',
      packageLoss: [],
      requirementsQoS: {
        packageLoss: new Array(4),
        delay: [],
        jeter: [],
        bandwidth: [],
        probability: [],
      },
      requirementsQoSCalculated: {
        packageLoss: [],
        delay: [],
        jeter: [],
        bandwidth: [],
        probability: [],
      },
    };
  }



  // handleChangeLoss(e, rowNum) {
  //   this.setState({value: e.target.value});
  //   this.state.requirementsQoS.packageLoss[rowNum] = parseFloat(e.target.value);
  //   console.log(`row number ${rowNum} value:`, this.state.requirementsQoS.packageLoss[rowNum]);
  //   console.log(this.state.requirementsQoS.packageLoss);
  // }


  handleChangeLoss(e, rowNum) {
    let value = parseFloat(e.target.value);
    this.setState(state => {
      const newItems = [...state.requirementsQoS.packageLoss];
      newItems[rowNum] = value;
      let requirementsQoS = {...this.state.requirementsQoS};
      requirementsQoS.packageLoss = newItems;
      return {
        requirementsQoS,
      };
    });
  }

  getValidationState() {
    const length = this.state.value.length;
    if (length > 1) return 'success';
    else if (length > 0) return 'warning';
    else if (length > 0) return 'error';
    return null;
  }

  calculateQoSRequirements() {
    console.log(this.state);
    // for(let o of this.state.requirementsQoS) {
    //   console.log(o);
    // }
  }

  render() {

    return (
      <div>
        <h1>Calculation here</h1>
        <div className='table-container'>
          <h2>Вимоги до QoS для кожної категорії сервісів</h2>
          <form>
            <Table responsive>
              <thead>
              <tr>
                <th>Група домашніх користувачів</th>
                <th>Втрати пакетів P,%</th>
                <th>Затримка Т, мс</th>
                <th>Джитер J, мс</th>
                <th>Смуга пропускання С, кбіт/с</th>
                <th>Ймовірність використання Р<sub>викор</sub>, %</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>Голосові дані</td>
                <td>
                  <FormGroup
                    controlId="formBasicText"
                    validationState={this.getValidationState()}
                    className='table-form-group'
                  >
                    <FormControl
                      type="number"
                      value={this.state.requirementsQoS.packageLoss[0] || ''}
                      placeholder="Enter number"
                      onChange={ event => {this.handleChangeLoss(event, 0)}}
                      className='table-input'
                    />
                  </FormGroup>
                </td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
              </tr>
              <tr>
                <td>IPTV</td>
                <td>
                  <FormGroup
                    controlId="formBasicText"
                    validationState={this.getValidationState()}
                    className='table-form-group'
                  >
                    <FormControl
                      type="number"
                      value={this.state.requirementsQoS.packageLoss[1]}
                      placeholder="Enter number"
                      onChange={ event => {this.handleChangeLoss(event, 1)}}
                      className='table-input'
                    />
                  </FormGroup>
                </td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
              </tr>
              <tr>
                <td>Інтернет дані</td>
                <td>
                  <FormGroup
                    controlId="formBasicText"
                    validationState={this.getValidationState()}
                    className='table-form-group'
                  >
                    <FormControl
                      type="number"
                      value={this.state.requirementsQoS.packageLoss[2]}
                      placeholder="Enter number"
                      onChange={ event => {this.handleChangeLoss(event, 2)}}
                      className='table-input'
                    />
                  </FormGroup>
                </td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
              </tr>
              <tr>
                <td>Медіа за запитом</td>
                <td>
                  <FormGroup
                    controlId="formBasicText"
                    validationState={this.getValidationState()}
                    className='table-form-group'
                  >
                    <FormControl
                      type="number"
                      value={this.state.requirementsQoS.packageLoss[3]}
                      placeholder="Enter number"
                      onChange={ event => {this.handleChangeLoss(event, 3)}}
                      className='table-input'
                    />
                  </FormGroup>
                </td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
              </tr>
              </tbody>
            </Table>
            <Button type="button" onClick={this.calculateQoSRequirements}>Calculate</Button>
          </form>
        </div>


        <div className='table-container'>
          <h2>Table 2</h2>
          <form>
            <Table responsive>
              <thead>
              <tr>
                <th></th>
                <th>Втрати пакетів P,%</th>
                <th>Затримка Т, мс</th>
                <th>Джитер J, мс</th>
                <th>Смуга пропускання С, кбіт/с</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>Голосові дані</td>
                <td>{ this.state.requirementsQoS.packageLoss[0] }</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
              </tr>
              <tr>
                <td>IPTV</td>
                <td>{ this.state.requirementsQoS.packageLoss[1] }</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
              </tr>
              <tr>
                <td>Інтернет дані</td>
                <td>{ this.state.requirementsQoS.packageLoss[2] }</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
              </tr>
              <tr>
                <td>Медіа за запитом</td>
                <td>{ this.state.requirementsQoS.packageLoss[3] }</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
              </tr>
              </tbody>
            </Table>
          </form>
        </div>
      </div>
    )
  }
}

export default Calculation;