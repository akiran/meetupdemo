var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var Header = require('./components/Header');
var Sidebar = require('./components/Sidebar');
var Feed = require('./components/Feed');

var App = React.createClass({
  render: function () {
    return (
      <div>
        <Header />
        <div className='content'>
          <Sidebar />
          <Feed />
        </div>
      </div>
    );
  }
});


var routes = (
  <Route path="/" name='app' handler={App}>
  </Route>
);

Router.run(routes, Router.HistoryLocation, function (Handler) {
  React.render(<Handler/>, document.getElementById('rapp'));
});

