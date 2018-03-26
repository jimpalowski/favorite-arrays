$(document).ready(function() {
  $("#formArray").submit(function(event) {
  event.preventDefault();
  var userName = $("input[name=name]").val();
  var rides = $("#rides").val();
  var parks = $("input:radio[name=places]:checked").val();
  var list = [userName, rides, parks]
  var Name = list[0];
  var Rides = list[1];
  var Park = list[2];
  document.getElementById('Name').innerHTML = Name;
  document.getElementById('Park').innerHTML = Park;
  document.getElementById('Rides').innerHTML = Rides;
  });
  
});
