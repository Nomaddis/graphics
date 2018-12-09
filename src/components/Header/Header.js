import React, {Component} from 'react';
import Navbar from "react-bootstrap/es/Navbar";
import {MenuItem, Nav, NavDropdown, NavItem} from "react-bootstrap";
import {Link} from "react-router-dom";
import '../../App.css';

class Header extends Component {
  render() {
    return (
      <header className="App-header">
        <Navbar inverse collapseOnSelect className="header-navbar">
          <Navbar.Header>
            <Navbar.Brand>
              <a href="/calculation">
                <img src='./assets/layers.png' style={{height: '100%'}}/>
               </a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <NavItem eventKey={1} href="/calculation">
                Calculation
              </NavItem>
              <NavItem eventKey={2} href="/qsAnalytics">
                Calculation2
              </NavItem>
              <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                <MenuItem eventKey={3.1}>
                  <Link to="/" className="dropdown-link">Simulation of communication parameters</Link>
                </MenuItem>
                <MenuItem eventKey={3.2}>
                  <Link to="/experiment1" className="dropdown-link">Simulation of other things</Link>
                </MenuItem>
                <MenuItem eventKey={3.3} className="dropdown-link">
                  <Link to="/excelimport" className="dropdown-link">Import excel and build graphic</Link>
                </MenuItem>
                {/*<MenuItem divider />*/}
                {/*<MenuItem eventKey={3.3}>Separated link</MenuItem>*/}
              </NavDropdown>
            </Nav>
            <Nav pullRight>
              <NavItem eventKey={1} href="/publishing">
                List of publishing
              </NavItem>
              <NavItem eventKey={2} href="/about">
                About
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </header>


      // <div className={classes.Person}>
      // </div>
    )
  }
}

export default Header;