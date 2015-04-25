var React = require('react');
var Actions = require('../actions');

var CategoryForm = React.createClass({
  getInitialState: function () {
    return { newCategory: '' }
  },
  changeHandler: function (e) {
    this.setState({newCategory: e.target.value});
  },
  addCategory: function (e) {
    if (e.key === 'Enter') {
      Actions.addCategory(this.state.newCategory);
      this.setState({newCategory: ''})
    }
  },
  render: function () {
    return (
      <input 
        placeholder='add category'
        value={this.state.newCategory}
        onChange={this.changeHandler} 
        onKeyDown={this.addCategory}
      />
    );
  }
});

module.exports = CategoryForm;