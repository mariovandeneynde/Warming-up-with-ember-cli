import Ember from "ember";

var ProductsRoute = Ember.Route.extend({
  model: function() {
    return this.store.findAll('product');
  }
});

export default ProductsRoute;