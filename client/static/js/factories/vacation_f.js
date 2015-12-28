ballyCyrk.factory('vacationFactory', function($http){
   var factory = {};

  factory.get = function(callback){
    $http.get('/vaca').success(function(output){
      callback(output);
    })
  }
  factory.create = function(vaca, callback){
    vaca.name = 'Jesica Avellone';
    if (vaca.dinner == 'other'){
      vaca.dinner = vaca.mypick;
    };
    if (vaca.movie == 'other'){
      vaca.movie = vaca.genre;
    };
    $http.post('/vaca', vaca).success(function(output){
      vacation = output;
      callback(output);
    });
  };

  return factory;
});

