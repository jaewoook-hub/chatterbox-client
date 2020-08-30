var Parse = {

  server: `http://parse.${window.CAMPUS}.hackreactor.com/chatterbox/classes/messages`,

  create: function(message, successCB, errorCB = null) {
    // todo: save a message to the server
    $.ajax({
      // This is the url you should use to communicate with the parse API server.
      url: Parse.server,
      type: 'POST',
      data: JSON.stringify(message),
      contentType: 'application/json',
      success: successCB || function (data) {
        console.log('chatterbox: Message sent');
      },
      error: errorCB || function (error) {
        // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
        console.error('chatterbox: Failed to send message', data);
      }
    });
  },

  readAll: function(successCB, errorCB = null) {
    $.ajax({
      url: Parse.server,
      type: 'GET',
      data: { order: '-createdAt' },
      contentType: 'application/json',
      success: successCB,
      error: errorCB || function(error) {
        console.error('chatterbox: Failed to fetch messages', error);
      }
    });
  },


  getRooms: function(successCB, errorCB = null) {
    // debugger;
    $.ajax({
      url: Parse.server.slice(0, 52) + 'rooms',
      type: 'GET',
      data: { order: '-createdAt' },
      contentType: 'application/json',
      success: successCB || function (data) {
        console.log('chatterbox: Message sent');
      },
      error: errorCB || function(error) {
        console.error('chatterbox: Failed to fetch messages', error);
      }
    });
  }

};

// var entityMap = {
//   '&': '&amp;',
//   '<': '&lt;',
//   '>': '&gt;',
//   '"': '&quot;',
//   "'": '&#39;',
//   '/': '&#x2F;',
//   '`': '&#x60;',
//   '=': '&#x3D;'
// };

// var jsEscape = function (str) {
//   return String(str).replace(/[^\w. ]/gi, function(c) {
//     return '\\u' + ('0000' + c.charCodeAt(0).toString(16)).slice(-4);
//   });

// }

// var escapeHtml = function(string) {
//   return String(string).replace(/[&<>"'`=\/]/g, function fromEntityMap (s) {
//     return entityMap[s];
//   });
// };