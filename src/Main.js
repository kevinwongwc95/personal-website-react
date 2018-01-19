import React, { Component } from 'react';

import { Route, NavLink, HashRouter } from 'react-router-dom';

import Home from './Home';
import Stuff from './Stuff';
import Contact from './Contact';
import Footer from './Footer';
import Test from './test';

require('./styles.css');

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: <Home />
    };
  }

  render() {
    return (
      <div>
        <HashRouter>
          <div class="container-fluid">
            <Test />
          </div>
        </HashRouter>
        <HashRouter>
          <div class="container">
            <Route exact="exact" path="/" component={Home} />
            <Route path="/stuff" component={Stuff} />
            <Route path="/contact" component={Contact} />
          </div>
        </HashRouter>
      </div>
    );
  }
}

export default Main;
