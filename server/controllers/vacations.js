var mongoose      = require('mongoose');
var Vacation      = mongoose.model('Vacation');

module.exports    = {
  create: function(req, res){
    var newVaction = new Vacation({name:    req.body.name,
                                  location: req.body.location,
                                  movie:    req.body.movie,
                                  beverage: req.body.drink,
                                  dinner:   req.body.dinner,
                                  myRed:    req.body.myRed,
                                  myWhite:  req.body.myWhite,
                                  myBeer:   req.body.myBeer});
    newVaction.save(function (err, vacation){
      if (err) {
        res.json(err);
      } else {
        res.json(vacation);
      }
    });
  },

  show: function(req, res){
    Vacation.findOne({name: 'Jesica Avellone'}, function(err, vacation){
      res.json(vacation);
    });
  }

}
