import _ from 'lodash';
import { Meteor } from 'meteor/meteor';
import { image, helpers } from 'faker';
import { Employees } from '../imports/collections/employees';

Meteor.startup(() => {
  // Check to see if data exists in the collection on startup
  const numberRecords = Employees.find({}).count();

  // If no data, generate some data with faker
  if (!numberRecords) {
    _.times(5000, () => {
      const {
        name,
        email,
        phone
      } = helpers.createCard();

      Employees.insert({
        name,
        email,
        phone,
        avatar: image.avatar()
      });
    });
  }

  Meteor.publish('employees', (perPage) => {
    return Employees.find({}, { limit: Number(perPage) });
  });
});
