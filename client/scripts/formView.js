var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    event.preventDefault();
    var message = {
      username: window.location.search.substring(10),
      text: $('#message').val(),
      // roomname: $('select').val()
      roomname: 'lobby'
    };

    Parse.create(message, function() {
      $('#message').val('');
    });
    console.log('click!');
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};