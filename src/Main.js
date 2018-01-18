import React, { Component } from 'react';

import { Route, NavLink, HashRouter } from 'react-router-dom';

import Home from './Home';
import Stuff from './Stuff';
import Contact from './Contact';
import Footer from './Footer';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: <Home />
    };
  }

  render() {
    return (
      <HashRouter>
        <div>
          <img src={require('./images/krab.png')} alt=""/>
          <h1>Kevin Wong</h1>
          <ul className="header">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/stuff">Stuff</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
          <div className="content">
            <Route exact path="/" component={Home} />
            <Route path="/stuff" component={Stuff} />
            <Route path="/contact" component={Contact} />
          </div>
        <Footer/>
        </div>
      </HashRouter>
    );
  }
}

export default Main;
