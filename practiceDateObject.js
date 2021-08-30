/* // Set the date we're counting down to
var countDownDate = new Date("Sept 19, 2021 15:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);
 */

//Set the date we're counting down to 
  // use a var for new DateObject - more info on Date Objects here https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date

var countDownDate = new Date("Oct 3, 2021 15:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function(){ 
  var now = new Date().getTime();

// get todays date and store   

// Find the distance between now and the count down date
  // - store in a variable 
var distance = countDownDate - now;

// store time calculations for days, hours, mins and seconds in vars 
var days = Math.floor((distance / (1000 * 60 * 60 * 24))); 
var hours = Math.floor((distance % (1000 * 60 * 60 * 24 )) / (1000 * 60 * 60));
var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
/* var seconds = Math.floor((distance % (1000 * 60)) / 1000); */

// Display result in the element with the id, "demo"
document.getElementById("demo").innerHTML = days + "d " + hours + "h " + minutes + "m ";

// If the countdown is finished, write some text to let the user know
if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000); // <--Is this a callback function? 




