var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
  },

  handleSubmit: function() {
    Rooms.selected = RoomsView.val();
    let selected = RoomsView.$select.val();
    Rooms.isSelected(selected);
  },

  addClickHandlers: function() {
    debugger;
  },

  onChange: function() {
    RoomsView.$select.change(RoomsView.handleSubmit);
  },

  renderRoom: function(roomname) {
    var html = RoomsView.render({roomname});
    RoomsView.$select.append(html);
  },

  render: _.template(`
      <option value=""><%- roomname %></option>
    `)
};
