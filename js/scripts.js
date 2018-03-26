$(document).ready(function() {
  $("#formArray").submit(function(event) {
  event.preventDefault();
  var userName = $("input").attr("value").val();
  var rides = $("#rides").val();
  var parks = $("input:radio[name=places]:checked").val();

  console.log("USER ENTERED:" + userName + "USER ENTERED:" + rides + "USERENTERED:" + parks);
  });
});
