$(document).ready(function() {
  var crawler = prompt("Would you like to learn about Turtles, Snakes, or Insects?").toLowerCase();

    if (crawler === "turtles") {
      $('#turtles').show();
    }
    if (crawler === "snakes") {
      $('#snakes').show();
    }
    if (crawler === "insects") {
      $('#insects').show();
    }
    else {
      alert("Are you sure you're typing with human hands? Try again. ");
    }
});
