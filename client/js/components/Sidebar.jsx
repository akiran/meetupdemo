var React = require('react');
var CategoryForm = require('./CategoryForm');
var CategoryList = require('./CategoryList');

var Sidebar = React.createClass({
  render: function () {
    return (
      <div className='sidebar'>
        <div className='nav'>
          <CategoryForm />
          <CategoryList categories={this.props.categories} />
        </div>
      </div>
    );
  }
});

module.exports = Sidebar;