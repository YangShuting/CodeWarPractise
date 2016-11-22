//1.找出数组中的最大值和最小值并返回最小值和最大值组成的数组。

//法一：Bubble sort 冒泡排序，适用于大多数语言。
function minMax(arr){
		var i, j, temp, targetArray=[];
		for( i = arr.length; 0 < i; i--){
			for( j = 0; j < i; j++ ){
				if( arr[j] >arr[j+1] ){
					temp = arr[j];
					arr[j]=arr[j+1];
					arr[j+1]=temp;
					}
				}
			}
			targetArray.push(arr[0], arr[arr.length - 1]);
			return targetArray;
}

//法二：直接找出最大和最小值。
function minAndMax(array){
			var targetArray = [];
		  var minNum = Math.min.apply(null, array);
		  var maxNum = Math.max.apply(null, array);
		  targetArray.push(minNum,maxNum);
		  return targetArray;
}

