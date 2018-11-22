import React, {Component} from 'react';
// import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import './Calculation.css';
import {Button, FormControl, FormGroup, Table} from "react-bootstrap";
import InputNumber from "rc-input-number";




class Calculation extends Component {
  constructor(props, context) {
    super(props, context);

    // this.handleChangeLoss = this.handleChangeLoss.bind(this);

    this.state = {
      value: '',
      requirementsQoS: {
        packageLoss: Array(4).fill(''),
        delay: Array(4).fill(''),
        jeter: Array(4).fill(''),
        bandwidth: Array(4).fill(''),
        probability: Array(4).fill(''),
      },
      requirementsQoSCalculated: {
        packageLoss: Array(4).fill(''),
        delay: Array(4).fill(''),
        jeter: Array(4).fill(''),
        bandwidth: Array(4).fill(''),
        probability: Array(4).fill(''),
      },
    };
  }


  handleChangeLoss = (val, rowNum, obj, arr) => {

    this.setState(state => {
      // const newItems = [...state.requirementsQoS.packageLoss];
      const newItems = [...obj];
      newItems[rowNum] = val;
      let requirementsQoS = {...this.state.requirementsQoS};
      requirementsQoS[arr] = newItems;
      return {
        requirementsQoS,
      };
    });
  };

  // getValidationState = () => {
  //   const length = this.state.value.length;
  //   if (length > 1) return 'success';
  //   else if (length > 0) return 'warning';
  //   else if (length > 0) return 'error';
  //   return null;
  // };

  calculateQoSRequirements = () => {
    const requirementsQoSCalculated = {};

    for (const key of Object.keys(this.state.requirementsQoS)) {
      if(key === 'bandwidth') {
        requirementsQoSCalculated[key] = this.calculateFOrColumnReverse(this.state.requirementsQoS[key]);
      } else {
        requirementsQoSCalculated[key] = this.calculateFOrColumn(this.state.requirementsQoS[key]);
      }
    }
    // console.log(requirementsQoSCalculated);

    this.setState({ requirementsQoSCalculated });

  };

  calculateFOrColumn = (arr) => {
    let tempArr = [];
    arr.forEach((item, i, arr) => {
      tempArr.push((Math.min(...arr))/item);
    });
    return tempArr;
  };

  calculateFOrColumnReverse = (arr) => {
    let tempArr = [];
    arr.forEach((item, i, arr) => {
      tempArr.push(item/(Math.max(...arr)));
    });
    return tempArr;
  };

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
                    // validationState={this.getValidationState()}
                    className='table-form-group'
                  >
                    <InputNumber
                      value={this.state.requirementsQoS.packageLoss[0]}
                      style={styles.inputStyle}
                      onChange={ value => {this.handleChangeLoss(value, 0, this.state.requirementsQoS.packageLoss, 'packageLoss')}}
                    />
                  </FormGroup>
                </td>
                <td>
                  <FormGroup
                    controlId="formBasicText"
                    // validationState={this.getValidationState()}
                    className='table-form-group'
                  >
                    <InputNumber
                      value={this.state.requirementsQoS.delay[0]}
                      style={styles.inputStyle}
                      onChange={ value => {this.handleChangeLoss(value, 0, this.state.requirementsQoS.delay, 'delay')}}
                    />
                  </FormGroup>
                </td>
                <td>
                  <FormGroup
                    controlId="formBasicText"
                    // validationState={this.getValidationState()}
                    className='table-form-group'
                  >
                    <InputNumber
                      value={this.state.requirementsQoS.jeter[0]}
                      style={styles.inputStyle}
                      onChange={ value => {this.handleChangeLoss(value, 0, this.state.requirementsQoS.jeter, 'jeter')}}
                    />
                  </FormGroup>
                </td>
                <td>
                  <FormGroup
                    controlId="formBasicText"
                    // validationState={this.getValidationState()}
                    className='table-form-group'
                  >
                    <InputNumber
                      value={this.state.requirementsQoS.bandwidth[0]}
                      style={styles.inputStyle}
                      onChange={ value => {this.handleChangeLoss(value, 0, this.state.requirementsQoS.bandwidth, 'bandwidth')}}
                    />
                  </FormGroup>
                </td>
                <td>Table cell</td>
              </tr>
              <tr>
                <td>IPTV</td>
                <td>
                  <FormGroup
                    controlId="formBasicText"
                    // validationState={this.getValidationState()}
                    className='table-form-group'
                  >
                    <InputNumber
                      value={this.state.requirementsQoS.packageLoss[1]}
                      style={{ width: 100 }}
                      onChange={ value => {this.handleChangeLoss(value, 1, this.state.requirementsQoS.packageLoss, 'packageLoss')}}
                    />
                  </FormGroup>
                </td>
                <td>
                  <FormGroup
                    controlId="formBasicText"
                    // validationState={this.getValidationState()}
                    className='table-form-group'
                  >
                    <InputNumber
                      value={this.state.requirementsQoS.delay[1]}
                      style={styles.inputStyle}
                      onChange={ value => {this.handleChangeLoss(value, 1, this.state.requirementsQoS.delay, 'delay')}}
                    />
                  </FormGroup>
                </td>
                <td>
                  <FormGroup
                    controlId="formBasicText"
                    // validationState={this.getValidationState()}
                    className='table-form-group'
                  >
                    <InputNumber
                      value={this.state.requirementsQoS.jeter[1]}
                      style={styles.inputStyle}
                      onChange={ value => {this.handleChangeLoss(value, 1, this.state.requirementsQoS.jeter, 'jeter')}}
                    />
                  </FormGroup>
                </td>
                <td>
                  <FormGroup
                    controlId="formBasicText"
                    // validationState={this.getValidationState()}
                    className='table-form-group'
                  >
                    <InputNumber
                      value={this.state.requirementsQoS.bandwidth[1]}
                      style={styles.inputStyle}
                      onChange={ value => {this.handleChangeLoss(value, 1, this.state.requirementsQoS.bandwidth, 'bandwidth')}}
                    />
                  </FormGroup>
                </td>
                <td>Table cell</td>
              </tr>
              <tr>
                <td>Інтернет дані</td>
                <td>
                  <FormGroup
                    controlId="formBasicText"
                    // validationState={this.getValidationState()}
                    className='table-form-group'
                  >
                    <InputNumber
                      value={this.state.requirementsQoS.packageLoss[2]}
                      style={{ width: 100 }}
                      onChange={ value => {this.handleChangeLoss(value, 2, this.state.requirementsQoS.packageLoss, 'packageLoss')}}
                    />
                  </FormGroup>
                </td>
                <td>
                  <FormGroup
                    controlId="formBasicText"
                    // validationState={this.getValidationState()}
                    className='table-form-group'
                  >
                    <InputNumber
                      value={this.state.requirementsQoS.delay[2]}
                      style={styles.inputStyle}
                      onChange={ value => {this.handleChangeLoss(value, 2, this.state.requirementsQoS.delay, 'delay')}}
                    />
                  </FormGroup>
                </td>
                <td>
                  <FormGroup
                    controlId="formBasicText"
                    // validationState={this.getValidationState()}
                    className='table-form-group'
                  >
                    <InputNumber
                      value={this.state.requirementsQoS.jeter[2]}
                      style={styles.inputStyle}
                      onChange={ value => {this.handleChangeLoss(value, 2, this.state.requirementsQoS.jeter, 'jeter')}}
                    />
                  </FormGroup>
                </td>
                <td>
                  <FormGroup
                    controlId="formBasicText"
                    // validationState={this.getValidationState()}
                    className='table-form-group'
                  >
                    <InputNumber
                      value={this.state.requirementsQoS.bandwidth[2]}
                      style={styles.inputStyle}
                      onChange={ value => {this.handleChangeLoss(value, 2, this.state.requirementsQoS.bandwidth, 'bandwidth')}}
                    />
                  </FormGroup>
                </td>
                <td>Table cell</td>
              </tr>
              <tr>
                <td>Медіа за запитом</td>
                <td>
                  <FormGroup
                    controlId="formBasicText"
                    // validationState={this.getValidationState()}
                    className='table-form-group'
                  >
                    <InputNumber
                      value={this.state.requirementsQoS.packageLoss[3]}
                      style={{ width: 100 }}
                      onChange={ value => {this.handleChangeLoss(value, 3, this.state.requirementsQoS.packageLoss, 'packageLoss')}}
                    />
                  </FormGroup>
                </td>
                <td>
                  <FormGroup
                    controlId="formBasicText"
                    // validationState={this.getValidationState()}
                    className='table-form-group'
                  >
                    <InputNumber
                      value={this.state.requirementsQoS.delay[3]}
                      style={styles.inputStyle}
                      onChange={ value => {this.handleChangeLoss(value, 3, this.state.requirementsQoS.delay, 'delay')}}
                    />
                  </FormGroup>
                </td>
                <td>
                  <FormGroup
                    controlId="formBasicText"
                    // validationState={this.getValidationState()}
                    className='table-form-group'
                  >
                    <InputNumber
                      value={this.state.requirementsQoS.jeter[3]}
                      style={styles.inputStyle}
                      onChange={ value => {this.handleChangeLoss(value, 3, this.state.requirementsQoS.jeter, 'jeter')}}
                    />
                  </FormGroup>
                </td>
                <td>
                  <FormGroup
                    controlId="formBasicText"
                    // validationState={this.getValidationState()}
                    className='table-form-group'
                  >
                    <InputNumber
                      value={this.state.requirementsQoS.bandwidth[3]}
                      style={styles.inputStyle}
                      onChange={ value => {this.handleChangeLoss(value, 3, this.state.requirementsQoS.bandwidth, 'bandwidth')}}
                    />
                  </FormGroup>
                </td>
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
                <td>{ this.state.requirementsQoSCalculated.packageLoss[0] }</td>
                <td>{ this.state.requirementsQoSCalculated.delay[0] }</td>
                <td>{ this.state.requirementsQoSCalculated.jeter[0] }</td>
                <td>{ this.state.requirementsQoSCalculated.bandwidth[0] }</td>
              </tr>
              <tr>
                <td>IPTV</td>
                <td>{ this.state.requirementsQoSCalculated.packageLoss[1] }</td>
                <td>{ this.state.requirementsQoSCalculated.delay[1] }</td>
                <td>{ this.state.requirementsQoSCalculated.jeter[1] }</td>
                <td>{ this.state.requirementsQoSCalculated.bandwidth[1] }</td>
              </tr>
              <tr>
                <td>Інтернет дані</td>
                <td>{ this.state.requirementsQoSCalculated.packageLoss[2] }</td>
                <td>{ this.state.requirementsQoSCalculated.delay[2] }</td>
                <td>{ this.state.requirementsQoSCalculated.jeter[2] }</td>
                <td>{ this.state.requirementsQoSCalculated.bandwidth[2] }</td>
              </tr>
              <tr>
                <td>Медіа за запитом</td>
                <td>{ this.state.requirementsQoSCalculated.packageLoss[3] }</td>
                <td>{ this.state.requirementsQoSCalculated.delay[3] }</td>
                <td>{ this.state.requirementsQoSCalculated.jeter[3] }</td>
                <td>{ this.state.requirementsQoSCalculated.bandwidth[3] }</td>
              </tr>
              </tbody>
            </Table>
          </form>
        </div>
      </div>
    )
  }
}

const styles = {
  inputStyle: {
    width: '100%'
  }
};

export default Calculation;