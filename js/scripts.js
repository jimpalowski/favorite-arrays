function printitems(name, parks, rides){
  var name = "Name"
  var rides = "Rides"
  var parks = "Park"

}






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


  var results = printitems(list)
  console.log("USER ENTERED:" + list[0] + "USER ENTERED:" + list[1] + "USERENTERED:" + list[2]);
  console.log(list)
  });
});
