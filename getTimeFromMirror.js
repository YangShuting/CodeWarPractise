 function condition( minuend, hour ){
  return ( minuend - hour.slice(1)) >= 10? ( minuend - hour.slice(1) ): (0 + "" + ( minuend - hour.slice(1)) ) ;
}

		function WhatIsTheTime(timeInMirror){
     var time = timeInMirror.split(':');
     var hour = time[0];
     var minute = time[1];
     var hourResult;
     if( minute == 00){
     hourResult = hour == 12? 12 : ( hour.slice(0,1) == 0? condition(12, hour) : (0+ ""+(12 - hour)) );     
     }
     else{
     hourResult = hour ==12? 11 : ( hour == 11? 12 : ( hour.slice(0,1) == 0? condition(11, hour) : (hour<12? (0+""+(11- hour)):0+""+0)));
     }
    var minuteResult = ( (60-minute)>=10? (60-minute): (0 + "" + (60-minute)) ) ==60?  (0+""+0): ( (60-minute)>=10? (60-minute): (0 + "" + (60-minute)) );
    return hourResult + ":" + minuteResult;
}
