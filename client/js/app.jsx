var React = require('react');
var Reflux = require('reflux');
var Header = require('./components/Header');
var Sidebar = require('./components/Sidebar');
var Feed = require('./components/Feed');
var Store = require('./store');

var App = React.createClass({
  mixins: [Reflux.connect(Store)],
  render: function () {
    return (
      <div>
        <Header />
        <div className='container'>
          <Sidebar categories={this.state.categories}/>
          <Feed />
        </div>
      </div>
    );
  }
});

React.render(<App/>, document.getElementById('rapp'));

