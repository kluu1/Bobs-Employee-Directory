import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import ImageList from './components/image_list';

// Create componenet
class App extends Component {
  constructor(props) {
    super(props);

    this.state = { images: [] };
  }

  componentDidMount() {
    axios
      .get('https://api.imgur.com/3/gallery/hot/viral/0.json')
      .then(response => this.setState({ images: response.data.data }));
  }

  render() {
    return (
      <div>
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

// Render this component to the screen
Meteor.startup(() => {
  // Wait for Meteor to start up before rendering to the DOM
  ReactDOM.render(<App />, document.querySelector('.container'));
});
