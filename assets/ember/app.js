
// Create app
window.App = Ember.Application.create({
  locale: 'pt-br',
  //rootElement: '#application',
  LOG_TRANSITIONS: true, // basic logging of successful transitions
  LOG_TRANSITIONS_INTERNAL: true, // detailed logging of all routing steps
  LOG_VIEW_LOOKUPS: true,
  currentUser: {}
});

App.deferReadiness();
