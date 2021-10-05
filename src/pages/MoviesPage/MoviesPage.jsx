import { useState, useEffect } from "react";
import MoviesList from "components/MoviesList/MoviesList";
import SearchForm from "components/SearchForm/SearchForm";
import { fetchMoviesByQuery } from "services/ApiService";
import { useLocation } from "react-router-dom";

const MoviesPage = () => {
    const [movies, setMovies] = useState([]);
    const location = useLocation();

    useEffect(() => {
        const searchQuery = new URLSearchParams(location.search).get('query');
        if (location.search !== '') {
            searchMovies(searchQuery);
        }
    }, [location.search]);

    const searchMovies = query => {
        fetchMoviesByQuery(query)
            .then(data => {
                if (data.results.length === 0) {
                    alert('React toastify');
                    return;
                }
                setMovies(data.results);
            })
            .catch(error => console.log(error.message));
    }

    return (
        <>
            <SearchForm />
            {movies && <MoviesList movies={movies} />}
        </>
    )
}

export default MoviesPage;