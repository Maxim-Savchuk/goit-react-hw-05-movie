const API_KEY = 'a0905af647cf2c0693210291011c467e';
const BASE_URL = 'https://api.themoviedb.org/3/';

const fetchData = url => {
  const result = fetch(url).then(response => {
    if (response.ok) {
      return response.json();
    }

    return Promise.reject(new Error('Error'));
  });

  return result;
};

export function fetchTrendingMovies() {
  return fetchData(`${BASE_URL}trending/all/day?api_key=${API_KEY}`);
}

export function fetchMoviesByQuery(query) {
  return fetchData(`${BASE_URL}search/movie?api_key=${API_KEY}&query=${query}`);
}

export function fetchMovieById(movieId) {
  return fetchData(`${BASE_URL}movie/${movieId}?api_key=${API_KEY}`);
}

export function fetchCast(movieId) {
  return fetchData(`${BASE_URL}movie/${movieId}/credits?api_key=${API_KEY}`);
}

export function fetchReview(movieId) {
  return fetchData(`${BASE_URL}movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`);
}
