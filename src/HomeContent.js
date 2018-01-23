import React, {Component} from 'react';
import {render} from 'react-dom';

import Markdown from 'react-markdown';

import txt from './content/Home.md';

class HomeContent extends Component {
  render() {
    return(
      <Markdown source={txt} />
    );
  }
}

export default HomeContent
