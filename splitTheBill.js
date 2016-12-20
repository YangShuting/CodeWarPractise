function splitTheBill(x){
  var sum = Object.values(x).reduce(function( previous, current ){
    return previous + current ;
  });
  var avarage = sum / Object.keys(x).length ;
  Object.keys(x).forEach(function(key){
    x[key] = Number( x[key] - avarage );
  });
  return x;
}