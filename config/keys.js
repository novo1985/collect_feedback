//keys.js - figure out what set of credentials to return
if (process.env.NODE_ENV === 'production') {
  //we are in producton - return the prod set of keys
  //run under heroku service, not local machine
  module.exports = require('./prod.js');
} else {
  //we are in development - return the dev set of keys
  module.exports = require('./dev.js');
}
