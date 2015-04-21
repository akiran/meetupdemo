var express = require('express');

var logger = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

var mongoose = require('mongoose');
var settings = require('./settings');
var webpack = require('webpack');
var webpackMiddleware = require('webpack-dev-middleware');
var app = express();
var env = process.env.NODE_ENV || 'development';

mongoose.connect(settings.db.url);

app.set('view engine', 'jade');
app.set('views', __dirname + '/views');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride());

if (env === 'development') {
  app.use(logger('combined'));
  app.use('/css', express.static(__dirname + '/build/css'));
  app.set('staticUrl', '');
  app.use(webpackMiddleware(webpack(require('../webpack.config.js')), {
    publicPath: "/js/",
  }));
}

if (env === 'production') {
  app.set('staticUrl', 'http://static.' + settings.domain);
}


app.get('/*', function (req, res) {
  res.render('app');
});

app.listen(8000);