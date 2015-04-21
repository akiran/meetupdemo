var React = require('react');
var Router = require('react-router');
var Route = Router.Route;

var App = React.createClass({
  render: function () {
    return (
      <div>
        React ok
      </div>
    );
  }
});


var routes = (
  <Route path="/" name='app' handler={App}>
  </Route>
);

Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.getElementById('rapp'));
});

