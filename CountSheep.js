function countSheeps(arrayOfSheep) {
                var arr=[];
                var count=0;
        for(var i =0;i<arrayOfSheep.length;i++){
              arr.push(arrayOfSheep[i]);           
      }
        for(var i=0;i<arr.length;i++){
        	 if(arr[i]===true){
                  count++;
        }

  }
             return count;
}
