$(document).ready(function() {
  var age = prompt("How old are you? ")

    if (age >= 18) {
      $('#Adults').show();
    }
    else if (age < 18) {
      $('#Minors').show();
    }
 });
