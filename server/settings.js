var env = process.env.NODE_ENV || 'development';
var dBUrl = "mongodb://localhost/reddit";

var settings = {
  domain: (env == 'production') ? "reddit.com": 'localhost',
  db: { url: dBUrl }
};

module.exports = settings;