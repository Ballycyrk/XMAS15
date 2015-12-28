ballyCyrk.controller('cannonsController', function(vacationFactory, $location){
  var _this = this;

  this.create = function(){
    _this.vaca.location = 'Cannon Beach';
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
      } else {
        $location.path('/fini');
      }
    });
  }
});

