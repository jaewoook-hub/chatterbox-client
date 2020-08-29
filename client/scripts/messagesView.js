var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    // MessagesView.$form.on('submit', MessagesView.);
    // MessageView.initialize();
  },

  renderMessage: function(message) {
    console.log(message);
    var html = '';
    html += MessagesView.render(message);
    MessagesView.$chats.append(html);

    // MessagesView.$chats.append( '<p>' + JSON.stringify(message) + '</p>' );
    // $( ".inner" ).append( "<p>Test</p>" );
  },

  render: _.template(`
      <div class="chat">
        <div>
          <a class="username" href="#"><%- username %></a>
        </div>
        <div class="message">
          <%- text %>
        </div>
        <div  class="roomname">
          <%- roomname %>
        </div>
      </div>
    `)
  // .text
  // .roomname


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