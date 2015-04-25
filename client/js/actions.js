var Reflux = require('reflux');

var Actions = Reflux.createActions([
  'addCategory',
  'upVote',
  'downVote',
]);

module.exports = Actions;
