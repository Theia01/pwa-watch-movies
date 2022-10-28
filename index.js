const form = document.getElementById("searchForm");
const searchInput = document.getElementById("search");
const result = document.getElementById("result");

let search = "";
let movies = [];

const fetchMovies = async () => {
  movies = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=6179d850024219ef492286f790e682e1&query=${search}`
  ).then((res) => res.json());
  console.log(movies);
};

const moviesDisplay = async () => {
  await fetchMovies();

  movies.results.length = 12;

  result.innerHTML = movies.results
    .map(
      (movie) =>
        `
        <div class="col-12 col-md-6 col-lg-4">
        <div class="card mb-3">
            <img class="card-img-top" src="https://image.tmdb.org/t/p/w500${movie.poster_path}"></img>
            <div class="card-body">
                <h5 class="card-title">${movie.original_title}</h5>
                <p class="card-text">${movie.overview}</p>
            </div>
        </div>
        </div>
    `
    )
    .join("");
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  search = searchInput.value;
  moviesDisplay();
});
