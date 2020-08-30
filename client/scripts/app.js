var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  initialize: function() {
    App.username = window.location.search.substr(10);

    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();
    // Friends.initialize();


    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);
    // debugger;

  },

  fetch: function(callback = ()=>{}) {
    Parse.readAll((data) => {
      Rooms.update(data.results, RoomsView.render);
      debugger;
      Messages.updates(data.results, MessagesView.render);
      // examine the response from the server request:
      console.log(data);

      callback();
    });
  },

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }
};
