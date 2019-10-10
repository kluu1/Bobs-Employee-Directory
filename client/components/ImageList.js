import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Items } from '../../imports/collections/items';
import ImageDetail from './ImageDetails';

const PER_PAGE = 20;

class ImageList extends Component {
  componentDidMount() {
    this.page = 1;
  }

  handleButtonClick() {
    Meteor.subscribe('items', PER_PAGE * (this.page + 1));
    this.page += 1;
  }

  render() {
    return (
      <div>
        <div className="items-list">
          {this.props.items.map(item => (
            <ImageDetail key={item._id} item={item} />
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
  Meteor.subscribe('items', PER_PAGE);

  // Return an object. Whatever we return will be sent to EmployeeList as props
  return { items: Items.find({}).fetch() };
}, ImageList);
