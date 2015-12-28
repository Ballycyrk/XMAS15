ballyCyrk.controller('finisController', function(vacationFactory){
  var _this = this;

  this.get = function(){
     vacationFactory.get(function(data){
      _this.vacation = data;
    });
  }
  this.get();
  console.log(_this.vacation)
});

