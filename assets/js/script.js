// JS
// Grab movies to choose from
// Grab google info of that movie
// Use google info to say where to watch (theater or stream)
// Movie card information 
// Use google maps api to find nearest location of theater
// Update Movie card
// Grab restaurants to choose from
// Grab info on restaurant 
// Use google maps api to find nearest location of restaurant
// Randomizer

function filters() {
  let filterBtn = $(".filterBtn");
  filterBtn.on("click", function(event) {
      event.preventDefault();
      alert("hello world"); // just using this alert as a placeholder for the actual function we will be creating
  });
}
filters();


function initMap() {
  var center = {lat: 51.507351, lng: -0.127758};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 10,
    center: center
  });
  var marker = new google.maps.Marker({
    position: center,
    map: map
  });
}