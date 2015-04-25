var Reflux = require('reflux');

var Actions = Reflux.createActions([
  'addSubReddit',
  'upVote',
  'downVote',
]);

module.exports = Actions;
