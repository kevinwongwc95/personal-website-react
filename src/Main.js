import React, { Component } from 'react';

import { Route, NavLink, HashRouter } from 'react-router-dom';

import Home from './Home';
import homeContent from './HomeContent';
import Projects from './Projects';
import Resume from './Resume';
import Footer from './Footer';
import NavigationBar from './NavigationBar';

require('./styles.css');

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 'Home'
    };
  }

  render() {
    return (
      <div>
        <HashRouter>
          <NavigationBar />
        </HashRouter>
        <HashRouter>
          <div>
              <Route exact="exact" path="/" component={Home} />
              <Route path="/projects" component={Projects} />
              <Route path="/resume" component={Resume} />
          </div>
        </HashRouter>
        <Footer />
      </div>
    );
  }
}

export default Main;
