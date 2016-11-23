
// Lake Sammamish Half marathon race date
var theday = '3/4/2017';


function getTimeRemaining(theday){
  var t = Date.parse(theday) - Date.parse(new Date());
  var seconds = Math.floor( (t/1000) % 60 );
  var minutes = Math.floor( (t/1000/60) % 60 );
  var hours = Math.floor( (t/(1000*60*60)) % 24 );
  var days = Math.floor( t/(1000*60*60*24) );
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}

function initializeClock(id, theday){
  var clock = document.getElementById(id);
  var daysSpan = clock.querySelector('.days');
	var hoursSpan = clock.querySelector('.hours');
	var minutesSpan = clock.querySelector('.minutes');
	var secondsSpan = clock.querySelector('.seconds');

  function updateClock(){
  var t = getTimeRemaining(theday);
	  daysSpan.innerHTML = t.days;
	  hoursSpan.innerHTML = t.hours;
	  minutesSpan.innerHTML = t.minutes;
	  secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

  if(t.total<=0){
    clearInterval(timeinterval);
  }
}

updateClock(); // run function once at first to avoid delay
var timeinterval = setInterval(updateClock,1000);

}

initializeClock('clockdiv', theday)