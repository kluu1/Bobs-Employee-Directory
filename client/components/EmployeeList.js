import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Employees } from '../../imports/collections/employees';
import EmployeeDetail from './EmployeeDetails';

// Return 20 results per page
const PER_PAGE = 20;

class EmployeeList extends Component {
  componentDidMount() {
    this.page = 1;
  }

  handleButtonClick() {
    Meteor.subscribe('employees', PER_PAGE * (this.page + 1));
    this.page += 1;
  }

  render() {
    return (
      <div>
        <div className="items-list">
          {this.props.employees.map(item => (
            <EmployeeDetail key={item._id} item={item} />
          ))}
        </div>
        <button
          onClick={this.handleButtonClick.bind(this)}
          className="btn btn-primary"
        >
          Load more...
        </button>
      </div>
    );
  }
}

export default createContainer(() => {
  // Setup subscription
  Meteor.subscribe('employees', PER_PAGE);

  // Return an object. Whatever we return will be sent to EmployeeList as props
  return { employees: Employees.find({}).fetch() };
}, EmployeeList);
