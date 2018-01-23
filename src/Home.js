import React, { Component } from 'react';

import HomeContent from './HomeContent'

class Home extends Component {
  render() {
    return (
      <div>
        <div class="jumbotron">
          <div class="container text-center">
            <img id="profileImage" src={require('./images/profile.jpg')} />
            <h1 id="jumbotronHeader">Kevin Wong</h1>
            <h1 id="jumbotronDescription">
              Web Developer <br/>
              <i id="location" class="fa fa-map-marker" aria-hidden="true"/> San Francisco, CA
            </h1>
            <a href="https://github.com/kevinwongwc95" target="_blank" class="btn btn-lg" id="jumbotronGithub">Check out my Github! <i class="fa fa-github fa" aria-hidden="true"/> </a>
            <button class="btn btn-lg" id="jumbotronResume">My Resume </button>
          </div>
        </div>
          <HomeContent/>
        </div>
    );
  }
}

export default Home;
