var React = require('react');

var CategoryList = React.createClass({
  render: function () {
    var categoryList = this.props.categories.map(function(category) {
      return <li key={category}><a>{category}</a></li>;
    })
    return (
      <ul>
        {categoryList}
      </ul>
    );
  }
});

module.exports = CategoryList;