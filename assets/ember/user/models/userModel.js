
App.User = DS.Model.extend({
  username: DS.attr('string'),
  displayName: DS.attr('string'),
  createdAt: DS.attr('date'),
  updatedAt: DS.attr('date')
});