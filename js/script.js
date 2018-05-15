// function for checking divisibilty of number
function check(number) {
  var results = [];
  for (var i = 1; i <= number; i++) {

    if ((i % 5 === 0) && (i % 3 === 0)){
      results.push("pingpong");}
      else if (i % 3 === 0) {
      results.push("ping");
    } else if (i % 5 === 0) {
      results.push("pong");
    } else {
      results.push(i);
    }

  };
  return results;
};
// input listener
$(document).ready(function() {
  $("#ball").submit(function(event) {
    event.preventDefault();
    $(".results").empty();
    var result = parseInt($("input#pinging").val());
    var results = check(result);
    results.forEach(function(results) {
      // printing the results on html pages
    $(".results").append($("<li>").html(results));
    });
  });
});
