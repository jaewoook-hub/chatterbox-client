var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    // Rooms.initialize();
  },

  renderRoom: function(roomname) {
    var html = RoomsView.render({roomname});
    RoomsView.$select.append(html);
  },

  render: _.template(`
      <option value=""><%- roomname %></option>
    `)

  // renderRoom: function() {
  //   RoomsView.$select.append( '<p>' + rooms + '</p>' );
  // },

};
