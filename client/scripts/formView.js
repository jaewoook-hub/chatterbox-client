var FormView = {

  $form: $('form'),
  $button: $('#rooms button'),
  $message: $('#message'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
    FormView.$button.on('click', Rooms.add);

  },

  handleSubmit: function(event) {
    event.preventDefault();
    var message = {
      username: window.location.search.substring(10),
      text: FormView.$form.find('#message').val(),
      roomname: Rooms.selected
    };

    Parse.create(message, function(data) {
      FormView.$message.val('');
      _.extend(message, data);
      Messages.add(message, MessagesView.render);
    });
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};