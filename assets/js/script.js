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


var mapArea = document.querySelector(".mapArea"); //What is this for? 

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
// filter randomizer function
function filters() {
  let filterBtn = $(".filterBtn");
  filterBtn.on("click", function(event) {
      event.preventDefault();
      alert("hello world"); // just using this alert as a placeholder for the actual function we will be creating
  });
}
filters();

  //submit button 
  var zipCodeInput = document.querySelector("#zipcode");
  var submitButton = document.querySelector("#submit");

  var zip = localStorage.getItem("zip");

  submitButton.addEventListener("click", function(event) {
    event.preventDefault();
  
    zip = document.querySelector("#zipcode").value;
    localStorage.setItem("zip", zip);

    document.querySelector("#zipcode").value = "";

  });