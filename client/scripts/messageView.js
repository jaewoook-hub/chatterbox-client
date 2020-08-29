var MessageView = {

  initialize: function() {
    // MessageView.initialize();
  },

  render: _.template(`
      <div class="chat">
        <div class="username">
          "<%- username %>"
        </div>
        <div class="message">
          "<%- message %>"
        </div>
        <div  class="room">
          "<%= room %>"
        </div>
      </div>
    `)
  //.username
  //.text
  //.roomname
};