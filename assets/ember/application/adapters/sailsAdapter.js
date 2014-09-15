
/* Register 'array' data type */
DS.ArrayTransform = DS.Transform.extend({
  deserialize: function(serialized) {
    return (Ember.typeOf(serialized) === 'array') ? serialized : [];
  },
  serialize: function(deserialized) {
  var type = Ember.typeOf(deserialized);
    if (type === 'array') {
        return deserialized;
    } else if (type === 'string') {
        return deserialized.split(',').map(function(item) {
            return jQuery.trim(item);
        });
    } else {
        return [];
    }
  }
});
App.register('transform:array', DS.ArrayTransform);

App.ApplicationAdapter = DS.SailsSocketAdapter.extend({
  namespace: 'api/v1',

  /**
   * Extends socket.io to fix data.data bug in post
   */
  socket: function(url, method, data) {
    var isErrorObject = this.isErrorObject.bind(this);
    method = method.toLowerCase();
    var adapter = this;
    adapter._log(method, url, data);
    if(method !== 'get') {
      this.checkCSRF(data);
      // fix data.data
      if(data.data){
        data = data.data;
      }
    }
    return new Ember.RSVP.Promise(function(resolve, reject) {
      io.socket[method](url, data, function (data) {
        if (isErrorObject(data)) {
          adapter._log('error:', data);
          if (data.errors) {
            reject(new DS.InvalidError(adapter.formatError(data)));
          } else {
            reject(data);
          }
        } else {
          resolve(data);
        }
      });
    });
  },

});




