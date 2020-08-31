
var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
  },


  renderMessage: function(message) {
    var html = MessageView.render(message);
    MessagesView.$chats.prepend(html);
    Friends.addClickHandlers();
  },

  render: function() {
    Messages
      .items()
      .filter(message => Rooms.isSelected(message.roomname))
      .each((message) => {
        var $message = MessageView.render(message);
        MessagesView.$chats.append($message);
      });
    Friends.addClickHandlers();
  }
};