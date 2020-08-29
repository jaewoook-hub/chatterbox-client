var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
  },

  renderRoom: function() {
    RoomsView.$select.append( '<p>' + rooms + '</p>' );
  },

  render: function() {
  }

};
