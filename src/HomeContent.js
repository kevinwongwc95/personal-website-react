import React, {Component} from 'react';
import {render} from 'react-dom';

import Markdown from 'react-markdown';
var fileContent = require("./content/Home.md");


class HomeContent extends Component {
  render() {
    return(
      <Markdown source={fileContent} />
    );
  }
}

export default HomeContent
