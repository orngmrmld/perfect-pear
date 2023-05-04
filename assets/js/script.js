const posterAPI = "http://img.omdbapi.com/?apikey=84310bbd&";
const movieAPI = "http://www.omdbapi.com/?apikey=84310bbd&i=";
const apiKey = "84310bbd";
const movieIDs = ["tt0076759", "tt0080684", "tt0086190", "tt2488496", "tt0120915", "tt0121766", "tt0121765", "tt3748528", "tt2527336", "tt2527338"];
// Get HTML elements
const movieCard = document.querySelector(".movie-card");

//hide the movie filters until zipcode is entered
$(".filters").hide();
$(".hide").hide();

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
  event.preventDefault();
  let zip = $("#zipCode").val();
  localStorage.setItem("zip", zip);

  $("#zipCode").val("");

  if (zip) {
    $(".zipDisplay").text("Zipcode: " + zip);
    $(".filters").show()
    $(".hideInput").hide();
  } else {
    $(".zipDisplay").text("Sorry, please enter a zipcode");
    $(".filters").hide();
  }
});

function isUSAZipCode(str) 
{
  return /^\d{5}(-\d{4})?$/.test(str);
}

function validateInput() 
{
  preventDefault();
  console.log("validateInput");
  let zipCode = document.getElementById("zipCode").value;
  let message = "";
  if (isUSAZipCode(zipCode)) 
  {
    message = "Valid Zip Code:";
  } else {
    message = "Invalid Zip Code";
  }
  document.getElementById("msg").innerHTML = message;
}
//function for the movie random generator
// Define function to generate random movie
async function generateRandomMovie() {
  // Generate random movie ID from the provided movie IDs
  const randomID = movieIDs[Math.floor(Math.random() * movieIDs.length)];
  // Fetch movie details from API
  const movieResponse =  await fetch(`${movieAPI}${randomID}`);
  const movieData = await movieResponse.json();
  // Get movie title, rating and poster
  const movieTitle = movieData.Title;
  const movieRating = movieData.imdbRating;
  const moviePoster = `${posterAPI}&i=${randomID}`;
  // Create movie card HTML
  const movieCardHTML = `
  <div class="columns is-mobile">
  
    <div class="column">
      <img src="${moviePoster}" alt="${movieTitle} poster">
    </div>

    <div class="column">
      <h3>${movieTitle}</h3>
      <h4>Rating: ${movieRating}</h4>
    </div>

    <div class="column">
      <img src="${moviePoster}" alt="${movieTitle} poster"> 
    </div>
  </div>
  `;
  // Update movie card with HTML
  movieCard.innerHTML = movieCardHTML;
  $(".hide").show();
}

// Generator for random filter click functions, pairs with random restaurant locator
$(".randomBtn").on("click", function (event) {
  event.preventDefault();
  localStorage.setItem("filter", "random");
  generateRandomMovie();
  $(".randomBtn").text("Press to pick another movie!");
  $(".hideComment").hide();
  //restaurantRandom():
})


// Generator for cozy filter click functions, pairs with random restaurant locator
// $(".cozyBtn").on("click", function (event) {
//   event.preventDefault();
//   localStorage.setItem("filter", "cozy");
//   //getRandomMovie();
//   //restaurantRandom():
// })
// // Generator for adventure filter click functions, pairs with random restaurant locator
// $(".adventureBtn").on("click", function (event) {
//   event.preventDefault();
//   localStorage.setItem("filter", "adventure");
//   //getRandomMovie();
//   //restaurantRandom():
// });
/*  non jquery code for submit button 
var zipCodeInput = document.querySelector("#zipcode");
var submitButton = document.querySelector("#submit");
var zipStored = localStorage.getItem("zip");
var zipDisplay = document.querySelector(".zipDisplay"); 
var filterStored = localStorage.getItem("filter");
submitButton.addEventListener("click", function(event) {
  event.preventDefault();
  zip = document.querySelector("#zipcode").value;
  localStorage.setItem("zip", zip);
  document.querySelector("#zipcode").value = "";
  if (zip) {
    $(".zipDisplay").text("Zipcode: " + zip);
  } else {
    $(".zipDisplay").text("Error " + zip);
  }
});

---------------


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
*/


