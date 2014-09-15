

// Map user routers
App.Router.map(function(match) {
  // user route map
  this.resource('users',{path: '/user'}, function(){
    // item route
    this.resource('user',{ path: '/:user_id' }, function(){

    });
  });
});


App.UsersRoute = Ember.Route.extend({
  model: function() {
    return {
      newUser: {}
    }
  }
});


App.UsersIndexRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('user');
  }
});

