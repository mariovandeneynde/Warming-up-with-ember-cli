import Ember from "ember";

var ProductController = Ember.Controller.extend({
  text: '',
  actions: {
    createReview: function(){
      var review = this.store.createRecord('review', {
        text: this.get('text'),
        product: this.get('model'),
        reviewedAt: new Date()
      });
      var controller = this;
      review.save().then(function() {
        controller.set('text', '');
        controller.get('model.reviews').addObject(review);
      });
    }
  }
});

export default ProductController;