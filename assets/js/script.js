const posterAPI = "https://img.omdbapi.com/?apikey=84310bbd&";
const movieAPI = "https://www.omdbapi.com/?apikey=84310bbd&i=";
const apiKey = "84310bbd";
const movieIDs = ["tt0076759", "tt0080684", "tt0086190", "tt2488496", "tt0120915", "tt0121766", "tt0121765", "tt3748528", "tt2527336", "tt2527338"];
// Get HTML elements
const movieCard = document.querySelector(".movie-card");

//hide the movie filters until zipcode is entered
$(".filters").hide();
$(".hide").hide();

//function for the movie random generator
// Define function to generate random movie
async function generateRandomMovie() {
  console.log('genereateButton click')
  // Generate random movie ID from the provided movie IDs
  const randomID = movieIDs[Math.floor(Math.random() * movieIDs.length)];
  // Fetch movie details from API
  const movieResponse =  await fetch(`${movieAPI}${randomID}`);
  const movieData = await movieResponse.json();
  // Get movie title, rating and poster
  const movieTitle = movieData.Title;
  const movieRating = movieData.imdbRating;
  const moviePoster = `${posterAPI}&i=${randomID}`;

    // Get random snack details
    const snack =  [
      { name: 'Burrito & Blue Raz Slushee', image: 'https://www.seriouseats.com/thmb/lOdEqFZsV3LOzX5Pc2Y6XCJuvTs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__2020__10__20201002-mission-style-burrito-jillian-atkinson-2-6841455590ed4c3981529b232166643a.jpg', imgalt: 'burrito and blue raz slushee' },
      { name: 'Chicken Tenders & Root Beer', image: 'https://i.pinimg.com/originals/da/b7/c7/dab7c7ac645eb0a406d47193366d341b.jpg', imgalt: 'chicken tenders and root beer' },
      { name: 'Pizza & Wings', image: 'https://assets3.thrillist.com/v1/image/2826030/792x528/scale;webp=auto;jpeg_quality=60;progressive.jpg', imgalt: 'pizza and wings' },
      { name: 'Furikake Popcorn', image: 'http://www.thepeachkitchen.com/wp-content/uploads/2016/03/Furikake-Popcorn.png' },
      { name: 'Hot Cheetos & Arizona', image: 'https://i.etsystatic.com/17254163/r/il/2ecc90/2714704469/il_fullxfull.2714704469_t89a.jpg', imgalt: 'hot cheetos and arizona' },
      { name: 'Popcorn & Coke', image: 'https://www.magiquestpf.com/wp-content/uploads/popcorn-coke.png', imgalt: 'popcorn and coke' },
      { name: 'Candy', image: 'https://i.ebayimg.com/images/g/gvoAAOSwuclg4T8T/s-l500.jpg', imgalt: 'candy' },
      { name: 'Pretzel', image: 'https://sallysbakingaddiction.com/wp-content/uploads/2017/04/easy-homemade-soft-pretzels.jpg', imgalt: 'pretzel' },
      { name: 'Nachos', image: 'https://files.tvo.org/files/s3fs-public/article-thumbnails/nachos.jpg', imgalt: 'nachos' },
    ];; 
  
  const randomSnack = Math.floor(Math.random() * snack.length);
  // Create movie card HTML
  const movieCardHTML = `
  <div class="content columns hide">
  
    <div class="column">
      <img src="${moviePoster}" alt="${movieTitle} poster">
    </div>

    <div class="column">
      <h2 class="has-text-white">${movieTitle}</h2>
      <h4 class="has-text-white">Rating: ${movieRating}</h4>
      <h2 class="has-text-white">HERE IS YOUR SNACK MATCH:<h2>
      <h2 class="has-text-white">${snack[randomSnack].name}</h2>
    </div>

    <div class="column">
      <img src="${snack[randomSnack].image}" alt="${snack[randomSnack].name}">
    </div>
  </div>
  `;
  // Update movie card with HTML
  movieCard.innerHTML = movieCardHTML;
  $(".filters").show();
  $(".hide").show();

}

// Generator for random filter click functions, pairs with random restaurant locator
$("#randomBtn").on("click", function (event) {
  event.preventDefault();
  console.log('random button click')
  localStorage.setItem("filter", "random");
  generateRandomMovie();
  $("#randomBtn").text("Press to pick another movie!");
});






