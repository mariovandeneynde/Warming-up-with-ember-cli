import Ember from "ember";

var ProductsOnsaleRoute = Ember.Route.extend({
  model: function(){
    return this.modelFor('products').filterBy('isOnSale');
  }
});

export default ProductsOnsaleRoute;