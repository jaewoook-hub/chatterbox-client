var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    event.preventDefault();
    var message = {
      username: window.location.search.substring(10),
      text: FormView.$form.find('#message').val(),
      // roomname: $('select').val()
      roomname: Rooms.selected
    };

    Parse.create(message, function(data) {
      $('#message').val('');
      debugger;
      _.extend(message, data);
      Messages.add(message, MessagesView.render);
    });
    console.log('click!');
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};