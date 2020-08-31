var Rooms = {

  add: function() {

  },

  _data: new Set,

  $roomSel: $('#rooms select'),

  selected: $('#rooms select').val() || 'lobby',

  isSelected: function(roomname) {
    debugger;
    return roomname === Rooms.selected ||
           !roomname && Rooms.selected === 'lobby';
  },

  update: function(messages, cb) {
    _.chain(messages)
      .pluck('roomname')
      .uniq()
      .each(room => Rooms._data.add(room));
    cb();
  },


  renderRooms: function(cb = MessagesView.render) {
    debugger;
    for (let roomname of Rooms._data) {
      if (roomname && roomname !== '') {
        $('#rooms select').append(Rooms.render({roomname}));
      }
    }
    cb();
  },

  render: _.template(`
  <option value="<%- roomname %>"><%- roomname %></option>
  `)

};