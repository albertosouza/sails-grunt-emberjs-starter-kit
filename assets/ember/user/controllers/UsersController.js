
App.UsersController = Ember.Controller.extend({
  actions: {
    saveNewUser: function(){
      var self = this;
      var newUser = this.get('model.newUser');

      var user = this.get('store').createRecord('user', newUser);

      user.save().then(function(){
        self.set('model.newUser', {});
      });
    }
  }
});
