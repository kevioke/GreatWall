var redis = require('redis');
var db = redis.createClient();
module.exports = redis.createClient();
