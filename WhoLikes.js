function likes(names) {
  // TODO
  var str;
  if(names.length==0){
    str="no one likes this";
    return str;
  }
  else if(names.length==1){
     str4=names.toString();
     str=str4+' likes this';
     return str;
  }
  else if(names.length==2){
      var str1=names.slice('').join(' and ');
      str=str1+' like this';
  }
  else if(names.length==3){
     var str2=names.splice(0,2).slice('').join(', ');
     var str3=names.toString();
     str=str2+' and '+str3+' like this';
  }
  else{
      namesLength=names.length-2;
      var str3=names.splice(0,2).slice('').join(', ');
      str=str3+' and '+namesLength+' others like this';
  }
  return str;
}
