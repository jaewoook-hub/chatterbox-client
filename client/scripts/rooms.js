var Rooms = {

  _data: new Set,

  selected: 'lobby',

  isSelected: function(roomname) {
    //return true;
    return roomname === Rooms.selected ||
           !roomname && Rooms.selected === 'lobby';
  },

  update: function(messages) {
    _.chain(messages)
      .pluck('roomname')
      .uniq()
      .each(room => Rooms._data.add(room));

  }
  // $roomsAvail: [],

  // initialize: function() {
  //   Parse.getRooms(function(data) {
  //     for (let val of data) {
  //       debugger;
  //       if (val.roomname !== '') {
  //         let safeRoomName = render(val.roomname);
  //         Rooms.$roomsAvail.push(safeRoomName);
  //       }
  //     }
  //   });

  //   for (let val of Rooms.$roomsAvail) {
  //     RoomsView.renderRoom(val);
  //   }
  // }

};