ballyCyrk.controller('homesController', function(vacationFactory, $location){
  var _this = this;

  this.create = function(){
    _this.vaca.location = 'Home Sweet Home';
    vacationFactory.create(_this.vaca, function(data){
      if (data.errors) {
        _this.errors = [];
        if (data.errors.beverage){
          _this.errors.push('Please select a beverage');
        };
        if (data.errors.dinner){
          _this.errors.push('Please select a dinner');
        };
        if (data.errors.movie){
          _this.errors.push('Please select a movie');
        };
        console.log('HERE',_this.errors)
      } else {
        $location.path('/fini');
      }
    });
  }
});

