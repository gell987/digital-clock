setInterval(showTime, 1000);

function showTime() {
  //get the date and hours and min and sec
  var date = new Date();

  var seconds = date.getSeconds();
  var minutes = date.getMinutes();
  var hour = date.getHours();
  var am_pm = "AM";
  if (hour > 12) {
    hour -= 12;
    am_pm = "PM";
  }
  if (hour == 0) {
    am_pm = "AM";
  }

  hour = hour < 10 ? "0" + hour : hour;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  let current_time = hour + ":" + minutes + ":" + seconds + am_pm;
  console.log(current_time);
  document.getElementById("clock").innerHTML = current_time;
}

// showTime()
