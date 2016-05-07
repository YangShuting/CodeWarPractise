function list(names){
	var arr=[];
for(var i=0;i<names.length;i++){
  for(var key in names[i]){
      arr.push(names[i][key]);
   }
  }
  if(arr.length==1){
  	var result=arr.toString();
  }
  else if(arr.length<1){
    var result='';
  }
  	else{
  		var arr1=arr.splice(0,arr.length-1).slice('').join(', ').toString();
      var lastItem=arr.toString();
      var result=arr1+' '+'&'+' '+lastItem;
  	}
  
 return result;
}
