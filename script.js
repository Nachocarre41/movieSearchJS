document.getElementById('searchButton').addEventListener('click', searchMovies);

let api_key = 'c68dfa89f3cfc3a1cab82003bf743271';
let urlBase = 'https://api.themoviedb.org/3/search/movie';
let urlImg = 'https://image.tmdb.org/t/p/w500';
let resultContainer = document.getElementById('results');

function searchMovies(){
    let searchInput = document.getElementById('searchInput').value
    resultContainer.innerHTML = 'loading...';
 fetch(`${urlBase}?api_key=${api_key}&query=${searchInput}`)
 .then(response => response.json())
 .then(response => displayMovies(response.results))
}

function displayMovies(movies){
    
    resultContainer.innerHTML = '';

    if (movies.lenght===0) {
   
    resultContainer.innerHTML= '<p>No results found</p>';
    return
 }

 movies.forEach(movie=> {
    let movieDiv = document.createElement('div');
    movieDiv.classList.add('movie');

    let title = document.createElement('h2');
    title.textContent = movie.title;

    let releaseDate = document.createElement('p');
    releaseDate.textContent = 'the release date: ' + movie.release_date;

    let overview = document.createElement('p');
    overview.textContent = movie.overview;

    let posterPath = urlImg + movie.poster_path;
    let poster = document.createElement('img');
    poster.src = posterPath;

    movieDiv.appendChild(poster);
    movieDiv.appendChild(title);
    movieDiv.appendChild(releaseDate);
    movieDiv.appendChild(overview);

    resultContainer.appendChild(movieDiv);
    })
}