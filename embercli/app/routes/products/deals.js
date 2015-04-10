import Ember from "ember";

var ProductsDealsRoute = Ember.Route.extend({
  model: function(){
    return this.modelFor('products').filter(function(product){
      return product.get('price') < 500;
    });
  }
});

export default ProductsDealsRoute;