import DS from 'ember-data';
import config from 'ecomsite/config/environment';

export default DS.RESTAdapter.extend({

  host: config.HOST,

  namespace: 'api/v1',

  headers: Ember.computed(function() {
    return {
      "Content-Type" : 'application/json'
    };
  }).volatile()


  handleResponse:function(status, headers, payload, requestData){
    let meta = {
      total_pages: payload.total_pages
    };
    payload.meta = meta;
    return this._super(status, headers, payload);
  },

});