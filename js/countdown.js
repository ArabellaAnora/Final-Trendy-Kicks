function getTimeRemaining(endtime) {
  var t = Date.parse(endtime) - Date.now();
  var seconds = Math.floor((t / 1000) % 60);
  var minutes = Math.floor((t / 1000 / 60) % 60);
  var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  var days = Math.floor(t / (1000 * 60 * 60 * 24));
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}

function initializeClock(id, endtime) {
  var clock = document.getElementById(id);
  var daysSpan = clock.querySelector('.days');
  var hoursSpan = clock.querySelector('.hours');
  var minutesSpan = clock.querySelector('.minutes');
  var secondsSpan = clock.querySelector('.seconds');

  function updateClock() {
    var t = getTimeRemaining(endtime);

    daysSpan.innerHTML = t.days;
    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }

  updateClock();
  var timeinterval = setInterval(updateClock, 1000);
}

var storedDeadline = localStorage.getItem('deadline');
var deadline;

if (storedDeadline) {
  deadline = new Date(storedDeadline);
  if (deadline < new Date()) {
    // The stored deadline has already passed, set a new deadline
    deadline = new Date();
    deadline.setDate(deadline.getDate() + 30); // Set new deadline to 30 days from now
    localStorage.setItem('deadline', deadline); // Update the stored deadline in local storage
  }
} else {
  deadline = new Date();
  deadline.setDate(deadline.getDate() + 30); // Set initial deadline to 30 days from now
  localStorage.setItem('deadline', deadline); // Store the initial deadline in local storage
}

initializeClock('clockdiv', deadline);
