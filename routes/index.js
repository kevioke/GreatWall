var db = require('../redis-db');

/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};

exports.post = function(req, res){
  var input = req.body['input'];
  db.sadd('signatures', input, function() {
    db.smembers('signatures', function(error, sig_list){
      res.render('post', { signatures: sig_list, title : 'Posted' });
    });
  });
};
