import Ember from 'ember';

var IndexRoute = Ember.Route.extend({
  model: function(){
    return this.store.findAll('product');
  }
});

export default IndexRoute;