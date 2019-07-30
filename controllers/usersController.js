var db = require('../models');

//FIND ALL users and return as JSON
function index(req, res){
  db.User.find({})
    .exec(function(err, users) {
      if (err){
      console.log(err);
      res.sendStatus(204);
    }
    res.json(users);
  });
}


module.exports = {
  index: index
}