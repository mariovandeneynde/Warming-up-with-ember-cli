import Ember from "ember";

var ProductView = Ember.View.extend({
  isOnSale: Ember.computed.alias('controller.isOnSale'),
  classNameBindings: ['isOnSale']
});

export default ProductView;