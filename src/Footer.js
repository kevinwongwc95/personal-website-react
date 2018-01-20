import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer>
        <div class="container-fluid text-center">
          <h1 id="FooterTitle">Feel Free to Connect with me!</h1>
        </div>
        <div class="container-fluid text-center">
          <div class="row">
            <i
              class="fa fa-github-alt fa-3x"
              aria-hidden="true"
              onClick={() => window.open('https://github.com')}
            />
            <i
              class="fa fa-linkedin-square fa-3x"
              aria-hidden="true"
              onClick={() =>
                window.open('https://www.linkedin.com/in/kwongwc95/')
              }
            />
            <a href="mailto:kevinwongwc95@gmail.com">
              <i class="fa fa-envelope fa-3x" aria-hidden="true" />
            </a>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
