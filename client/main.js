import React from 'react';
import ReactDOM from 'react-dom';
import ImageList from './components/image_list';

// Create componenet
const App = () => {
  return (
    <div>
      <ImageList />
    </div>
  );
};

// Render this component to the screen
Meteor.startup(() => {
  // Wait for Meteor to start up before rendering to the DOM
  ReactDOM.render(<App />, document.querySelector('.container'));
});
