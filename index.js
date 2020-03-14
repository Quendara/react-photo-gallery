import React, { Component } from 'react';
import { render } from 'react-dom';
import PhotoGallery from './PhotoGallery';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <PhotoGallery />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
