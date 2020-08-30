// debugger;
var Friends = {

  $user: $('.username'),

  initialize: function() {
    // FormView.$form.on('submit', FormView.handleSubmit);

    // $('chats').on('click', Friends.$user, Friends.toggleStatus);
    Friends.$user.click(function() {
      console.log('user was clicked');
      Friends.toggleStatus();
    });
  },

  toggleStatus: function() {
    console.log('toggleStatus toggled');
  }

};

