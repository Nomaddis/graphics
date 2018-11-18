import React, {Component} from 'react';
import classes from './Header.css';
import Navbar from "react-bootstrap/es/Navbar";
import {MenuItem, Nav, NavDropdown, NavItem} from "react-bootstrap";
import {Link} from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <header className="App-header">
        <Navbar inverse collapseOnSelect className="header-navbar">
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#brand">React-Bootstrap</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <NavItem eventKey={1} href="/publishing">
                List of publishing
              </NavItem>
              <NavItem eventKey={2} href="#">
                About
              </NavItem>
              <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                <MenuItem eventKey={3.1}  componentClass='span' >
                  <Link to="/">Simulation of communication parameters</Link>
                </MenuItem>
                <MenuItem eventKey={3.2}  componentClass='span' >
                  <Link to="/about">simulation of other things</Link>
                </MenuItem>
                <MenuItem eventKey={3.3}>Something else here</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey={3.3}>Separated link</MenuItem>
              </NavDropdown>
            </Nav>
            <Nav pullRight>
              <NavItem eventKey={1} href="#">
                Link Right
              </NavItem>
              <NavItem eventKey={2} href="#">
                Link Right
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