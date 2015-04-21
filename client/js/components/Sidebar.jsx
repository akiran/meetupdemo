var React = require('react');

var Sidebar = React.createClass({
  render: function () {
    return (
      <div className='sidebar'>
        <div className='nav'>
          <ul>
            <li><a href="">sidebar</a></li>
          </ul>
        </div>
      </div>
    );
  }
});

module.exports = Sidebar;