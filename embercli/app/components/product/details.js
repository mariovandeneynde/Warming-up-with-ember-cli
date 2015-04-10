import Ember from "ember";

var ProductDetailsComponent = Ember.Component.extend({
 reviewsCount: Ember.computed.alias('product.reviews.length'),
  hasReviews: function(){
    return this.get('reviewsCount') > 0;
  }.property('reviewsCount')
});

export default ProductDetailsComponent;