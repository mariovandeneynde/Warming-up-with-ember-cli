import Ember from "ember";

var ContactsController = Ember.ArrayController.extend({
  sortProperties: ['name'],
  contactsCount: Ember.computed.alias('length')
});

export default ContactsController;