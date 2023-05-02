//hide the movie filters until zipcode is entered
$(".filters").hide()

//initiates the map on webpage
function initMap() {
  var center = { lat: 51.507351, lng: -0.127758 };
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 10,
    center: center
  });
  var marker = new google.maps.Marker({
    position: center,
    map: map
  });
}

//zipcode submit button saves to local storage and shows filter buttons, or displays error message
$("#submit").on("click", function (event) {
  let zip = $("#zipcode").val();
  localStorage.setItem("zip", zip);

  $("#zipcode").val("");

  if (zip) {
    $(".zipDisplay").text("Zipcode: " + zip);
    $(".filters").show()
  } else {
    $(".zipDisplay").text("Sorry, please enter a zipcode!" + zip);
    $(".filters").hide();
  }
})

//function for the movie random generator
/*function getRandomMovie(event) {
  // Generate a random movie ID
  event.preventDefault();
  var randomID = Math.floor(Math.random() * 100);
  console.log(randomID)
  // Make a request to the OMDB API with the random ID
  fetch('http://www.omdbapi.com/?i=tt' + randomID + '&apikey=84310bbd')
    .then(response => response.json())
    .then(data => {
      // Extract the movie information we need
      var movieName = data.Title;
      var movieRating = data.imdbRating;
      var moviePoster = data.Poster;
      // Display the movie information on the HTML page
      var movieInfoDiv = document.querySelector('.movie-card');
      movieInfoDiv.innerHTML = `
        <h2>${movieName}</h2>
        <p>Rating: ${movieRating}</p>
        <img src="${moviePoster}">
      `;
    })
    .catch(error => console.log(error));
}*/

//function for the movie cozy generator here?

//function for the movie adventure generator here?

//function for random restaurant based off zipcode entered.
/*function restaurantRandom() {
}*/

// Generator for random filter click functions, pairs with random restaurant locator
$(".randomBtn").on("click", function (event) {
  event.preventDefault();
  localStorage.setItem("filter", "random");
  //getRandomMovie();
  //restaurantRandom():
})
// Generator for cozy filter click functions, pairs with random restaurant locator

$(".cozyBtn").on("click", function (event) {
  event.preventDefault();
  localStorage.setItem("filter", "cozy");
  //getRandomMovie();
  //restaurantRandom():
})
// Generator for adventure filter click functions, pairs with random restaurant locator

$(".adventureBtn").on("click", function (event) {
  event.preventDefault();
  localStorage.setItem("filter", "adventure");
  //getRandomMovie();
  //restaurantRandom():
});


/*  non jquery code for submit button 
var zipCodeInput = document.querySelector("#zipcode");
var submitButton = document.querySelector("#submit");
var zipStored = localStorage.getItem("zip");
var zipDisplay = document.querySelector(".zipDisplay"); 
var filterStored = localStorage.getItem("filter");

submitButton.addEventListener("click", function(event) {
  event.preventDefault();
  filter = 
  
  zip = document.querySelector("#zipcode").value;
  localStorage.setItem("zip", zip);

  document.querySelector("#zipcode").value = "";

  if (zip) {
    $(".zipDisplay").text("Zipcode: " + zip);
  } else {
    $(".zipDisplay").text("Error " + zip);
  }

});
*/


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