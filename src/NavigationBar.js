import React, { Component } from 'react';

import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

import { Route, NavLink, HashRouter } from 'react-router-dom';

import Home from './Home';
import Projects from './Projects';
import Blog from './Blog';
import Footer from './Footer';

class NavigationBar extends Component {
  render() {
    return (
      <Navbar collapseOnSelect inverse staticTop>
        <Navbar.Header>
          <Navbar.Brand id="brand">
            <NavLink to="/">Kevin Wong</NavLink>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullLeft>
            <NavItem eventKey={1} href="#">
              <NavLink to="/" id="navItem">
                Home
              </NavLink>
            </NavItem>
            <NavItem eventKey={2} href="#">
              <NavLink to="/projects" id="navItem">
                Projects
              </NavLink>
            </NavItem>
            <NavItem eventKey={3} href="#">
              <NavLink to="/blog" id="navItem">
                Blog
              </NavLink>
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
export default NavigationBar;
