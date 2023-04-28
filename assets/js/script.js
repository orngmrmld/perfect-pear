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
function getRandomMovie(event) {
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
  }
  
  document.querySelector('.random').addEventListener('click', getRandomMovie);