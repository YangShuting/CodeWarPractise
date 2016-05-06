function tribonacci(signature,n){
  var index=0;
  var sum=0;
  var arr=[];
  var arr1=[];
  for(var i=0;i<signature.length;i++){
    arr.push(signature[i]);
  }
  if(n<signature.length){
      for(var i=0;i<n;i++){
        arr1.push(arr[i]);
      }
  }
  else{
     for(var i=0;i<n-signature.length;i++){
        sum=arr[index]+arr[index+1]+arr[index+2];
        arr.push(sum);
        index++;
}
     for(var i=0;i<arr.length;i++){
        arr1.push(arr[i]);

}
}
  return arr1;
  
}
