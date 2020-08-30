
var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    // debugger;
    // MessagesView.$form.on('submit', MessagesView.);
    // MessageView.initialize();
  },


  renderMessage: function(message) {
    // console.log(message);
    // var html = '';

    var html = MessageView.render(message);
    MessagesView.$chats.prepend(html);

    // MessagesView.$chats.append( '<p>' + JSON.stringify(message) + '</p>' );
    // $( ".inner" ).append( "<p>Test</p>" );
  },

  render: function() {
    debugger;
    Messages
      .items()
      .filter(message => Rooms.isSelected(message.roomname))
      .each((message) => {
        var $message = MessageView.render(message);
        MessagesView.$chats.append($message);
      });
    // _.each(Messages._data, (message) => {
    //   var $message = MessageView.render(message);
    //   MessagesView.$chats.append($message);
    // });
  }
};


// render: function(message) {
//   var html = "";
//   // for (i = 0; i < message.length; i++) {
//     html += MessageView.render(message);
//   // }
//   MessagesView.$chats.append(html);
// }

// var i, html = "";
// for (i = 0; i < data.movies.length; i++) {
//   html += compiled(data.movies[i]);
// }
// $("#movies").append(html);