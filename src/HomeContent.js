import React, { Component } from 'react';
import { render } from 'react-dom';

import Markdown from 'react-markdown';

import content from './content/Home.md';

class HomeContent extends Component {
  render() {
    return (
      <div class="container content">
        <Markdown source={content} />
      </div>
    );
  }
}

export default HomeContent;
