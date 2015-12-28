var mongoose      = require('mongoose');
var Schema        = mongoose.Schema;

var VacationSchema =new Schema ({
  name: {type:String, required: true},
  location: {type:String, required: true},
  movie: {type:String, required: true},
  beverage: {type: Object, required: true},
  dinner: {type: String, required: true},
  myRed: {type: String},
  myWhite: {type: String},
  myBeer: {type: String},
  created_at:{type: Date, default: Date()}
});

mongoose.model('Vacation', VacationSchema);


