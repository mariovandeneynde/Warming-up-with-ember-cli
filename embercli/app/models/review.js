import DS from "ember-data";

var Review = DS.Model.extend({
  text: DS.attr('string'),
  reviewedAt: DS.attr('date'),
  product: DS.belongsTo('product')
});

Review.reopenClass({
    FIXTURES : [
  {
    id: 100, 
    text: "Started a fire in no time!"
  },
  {
    id: 101, 
    text: "Not the brightest flame, but warm!"
  }
]});

export default Review;