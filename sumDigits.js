//Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits. For example:
  //sumDigits(10);  // Returns 1
  //sumDigits(99);  // Returns 18
  //sumDigits(-32); // Returns 5
  
 function sumDigits1(number){
	return Math.abs(number).toString().split('').reduce( function(a,b){ return (+a) + (+b)});
}
