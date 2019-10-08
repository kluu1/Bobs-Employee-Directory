// Any JS in here is automatically ran for us

// Import the react library
import React from 'react';
import ReactDOM from 'react-dom';

// Create componenet
const App = () => {
  return (
    <div>
      React App #2
    </div>
  );
};

// Render this component to the screen
Meteor.startup(() => {
  // Wait for Meteor to start up before rendering to the DOM
  ReactDOM.render(<App />, document.querySelector('.container'));
});