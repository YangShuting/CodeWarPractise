3.以一个数组arrayCriteria作为标准，从任意给出的数组中找出不在标准数组里的数组元素，并返回这些元素。
下面是CodeWars 给出的需求场景。

In a factory a printer prints labels for boxes. For one kind of boxes the printer has to use colors which, for the sake of simplicity, are named with letters from a to m.

The colors used by the printer are recorded in a control string. For example a "good" control string would be aaabbbbhaijjjm meaning that the printer used three times color a, four times color b, then one time color a...

Sometimes there are problems: lack of colors, technical malfunction and a "bad" control string is produced e.g. aaaxbbbbyyhwawiwjjjwwm.

You have to write a function printer_error which given a string will output the error rate of the printer as a string representing a rational whose numerator is the number of errors and the denominator the length of the control string. Don't reduce this fraction to a simpler expression.

The string has a length greater or equal to one and contains only letters from ato z.

Examples:

s="aaabbbbhaijjjm"
error_printer(s) => "0/14"

s="aaaxbbbbyyhwawiwjjjwwm"
error_printer(s) => "8/22"

//方法：
function printerError(s) {
		var strCompare = 'aaabbbbhaijjjm', count=0, i=0;
		s = s.split('');
		while(i< s.length){
		    if(strCompare.indexOf(s[i]) === -1){
		    	count++;
		    }
		    i++;
		}
		return (count+'/'+ ''+s.length);
}
