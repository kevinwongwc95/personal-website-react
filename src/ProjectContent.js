import React, { Component } from 'react';
import { render } from 'react-dom';
import Markdown from 'react-markdown';

import content from './content/Projects.md';

class ProjectContent extends Component {
  render() {
    return (
      <div class="container content">
        <Markdown source={content} />
      </div>
    );
  }
}

export default ProjectContent;
