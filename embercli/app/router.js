import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

export default Router.map(function() {
	this.route('credits', { path: '/thanks' });
  	this.resource('products', function() {
    	this.resource('product', { path: '/:product_id' });
    	this.route('onsale');
    	this.route('deals');
  	});
  	this.resource('contacts', function() {
    	this.resource('contact', { path: '/:contact_id' });
  	});
});
