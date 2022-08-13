// variable initialize
let hr = 0;
let min = 0;
let sec = 0;
let count = 0;

// timer value set as false
let timer = false;

// start funtion for timer start
function start() {
  timer = true;
  stopwatch();
}

// stop function for timer stop
function stop() {
  timer = false;
}
// reset function for timer reset
function reset() {
  timer = false;

  // value
  hr = 0;
  min = 0;
  sec = 0;
  count = 0;

  // Setting innerHTML variable 00
  document.getElementById("hr").innerHTML = "00";
  document.getElementById("min").innerHTML = "00";
  document.getElementById("sec").innerHTML = "00";
  document.getElementById("count").innerHTML = "00";
}

// stopwatch function for perfoming time in correct format
function stopwatch() {
  if (timer == true) {
    count = count + 1;

    if (count == 100) {
      sec = sec + 1;
      count = 0;
    }
    if (sec == 60) {
      min = min + 1;
      sec = 0;
    }
    if (min == 60) {
      hr = hr + 1;
      min = 0;
      sec = 0;
    }

    let hrString = hr;
    let minString = min;
    let secString = sec;
    let countString = count;

    if (hr < 10) {
      hrString = "0" + hrString;
    }

    if (min < 10) {
      minString = "0" + minString;
    }

    if (sec < 10) {
      secString = "0" + secString;
    }

    if (count < 10) {
      countString = "0" + countString;
    }

    // Setting innerHTML variable as string
    document.getElementById("hr").innerHTML = hrString;
    document.getElementById("min").innerHTML = minString;
    document.getElementById("sec").innerHTML = secString;
    document.getElementById("count").innerHTML = countString;
    setTimeout("stopwatch()", 10);
  }
}
