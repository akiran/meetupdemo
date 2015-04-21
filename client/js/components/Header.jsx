var React = require('react');

var Header = React.createClass({
  render: function () {
    return (
      <div className='header'>
        <div className='title'>Reddit</div>
      </div>
    );
  }
});

module.exports = Header;