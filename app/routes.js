module.exports = function(app) {
	// server routes ===========================================================
	// authentication routes

  //book routes
  var Book = require('./models/Book.js');

  app.get('/api/book', function(req,res){
    Book.find(function(err,data){
      if(err) return res.send(err);
      res.json(data);
    });
  });

  app.get('/api/book/:isbn', function(req,res){
    if(req.params.isbn){
      Book.find({id:req.params.isbn}), function(err,data){
        if(err) return res.send(err);
        res.json(data);
      };
    };
  });

  //user routes
  var User = require('./models/User.js');

  app.get('/api/user', function(req,res){
    User.find(function(err,data){
      if(err) return res.send(err);
      res.json(data);
    });
  });

	// frontend routes =========================================================
	// route to handle all angular requests
	app.get('*', function(req, res) {
		res.sendfile('./public/index.html');
	});

};