import Ember from "ember";

var ContactsRoute = Ember.Route.extend({
  model: function() {
    return this.store.findAll('contact');
  }
});
export default ContactsRoute;