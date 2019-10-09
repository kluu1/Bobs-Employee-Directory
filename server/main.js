import _ from 'lodash';
import { Meteor } from 'meteor/meteor';
import { image, helpers } from 'faker';
import { Items } from '../imports/collections/items';

Meteor.startup(() => {
  // Check to see if data exists in the collection on startup
  const numberRecords = Items.find({}).count();

  // If no data, generate some data with faker
  if (!numberRecords) {
    _.times(5000, () => {
      const {
        name,
        email,
        phone
      } = helpers.createCard();

      Items.insert({
        name,
        email,
        phone,
        avatar: image.avatar()
      });
    });
  }

  Meteor.publish('items', (perPage) => {
    // if (perPage === Number) console.log('Is a number');
    return Items.find({}, { limit: Number(perPage) });
  });
});
