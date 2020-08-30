var Messages = {

  _data: {},

  items: function () {
    return _.chain(Messages._data);
  },

  add: function(message, cb = () => {}) {
    Messages._data[message.objectId] = message;
    cb();
  },

  updates: function(messages, cb = () => {}) {
    for (let message of messages) {
      Messages._data[message.objectId] = Messages._conform(message);
    }
    cb();
  },

  _conform: function(message) {
    message.text = message.text || '';
    message.username = message.username || '';
    message.roomname = message.roomname || '';
    return message;
  }

};