import Ember from "ember";

var ContactDetailsComponent = Ember.Component.extend({
  productsCount: Ember.computed.alias('contact.products.length'),
  isProductive: function() {
    return this.get('productsCount') > 3;
  }.property('productsCount')
});

export default ContactDetailsComponent;