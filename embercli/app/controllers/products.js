import Ember from "ember";

var ProductsController = Ember.ArrayController.extend({
  sortProperties: ['title']
});

export default ProductsController;