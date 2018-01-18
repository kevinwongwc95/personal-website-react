import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
        <footer>
          <i class="fa fa-github-alt" aria-hidden="true" onClick={() => window.open("https://github.com")} />
          <i class="fa fa-linkedin-square" aria-hidden="true" onClick={() => window.open("https://www.linkedin.com/in/kwongwc95/")}/>
          <a href="mailto:kevinwongwc95@gmail.com">
            <i class="fa fa-envelope" aria-hidden="true"/>
          </a>
        </footer>
    );
  }
}

export default Footer;
