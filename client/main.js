import React from 'react';
import ReactDOM from 'react-dom';
import EmployeeList from './components/EmployeeList';

// Create App componenet
const App = () => {
  return <EmployeeList />;
};

// Render this component to the screen
Meteor.startup(() => {
  // Wait for Meteor to start up before rendering to the DOM
  ReactDOM.render(<App />, document.querySelector('.container'));
});
