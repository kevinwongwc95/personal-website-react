import React, { Component } from 'react';

import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

import { Route, NavLink, HashRouter } from 'react-router-dom';

import Home from './Home';
import Stuff from './Stuff';
import Contact from './Contact';
import Footer from './Footer';

class Test extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Navbar collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/">React-Bootstrap</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullLeft>
            <NavItem eventKey={1} href="#">
              <NavLink to="/">Home</NavLink>
            </NavItem>
            <NavItem eventKey={2} href="#">
              <NavLink to="/stuff">Stuff</NavLink>
            </NavItem>
            <NavItem eventKey={3} href="#">
              <NavLink to="/contact">Contact</NavLink>
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
export default Test;
