import Ember from "ember";

var ContactProductsController = Ember.ArrayController.extend({
  sortProperties: ['title']
});

export default ContactProductsController;