import Ember from "ember";

var ProductsIndexRoute = Ember.Route.extend({
  model: function(){
    return this.store.findAll('product');
  }
});

export default ProductsIndexRoute;