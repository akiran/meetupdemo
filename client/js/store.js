var Reflux = require('reflux');

var Store = Reflux.createStore({
  listenables: require('./actions'),
  init: function () {
    this.categories = ['reactjs', 'flux', 'javascript'];
    this.posts = [
      { content: "reactjs meetup", votes: 5, category: 'reactjs', type: 'text'}, 
      { content: "flux example", votes: 10, category: 'flux', type: 'text'} 
    ]
  },
  getInitialState: function () {
    return {categories: this.categories};
  },
  update: function () {
    this.trigger({
      categories: this.categories
    })
  },
  onAddCategory: function (category) {
    this.categories.push(category);
    this.trigger(this.categories);
  }
});

module.exports = Store;