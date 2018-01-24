import React, { Component } from 'react';
import { render } from 'react-dom';
import Markdown from 'react-markdown';

import notification_detection from './content/2017-12-14-notification-detection.md';
import refactoring_notifications from './content/2017-12-10-refactoring-notifications.md'

class BlogContent extends Component {
  render() {
    return (
      <div class="container content">
        <Markdown source={notification_detection} />
        <Markdown source={refactoring_notifications} />
      </div>
    );
  }
}

export default BlogContent;
