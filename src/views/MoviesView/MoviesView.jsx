import { useState, useEffect } from "react";
import MoviesList from "components/MoviesList/MoviesList";
import SearchForm from "components/SearchForm/SearchForm";
import { fetchMoviesByQuery } from "services/ApiService";

const MoviesView = () => {
    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        if (!query) {
            return;
        }
        fetchMoviesByQuery(query)
            .then(data => {
                if (data.results.length === 0) {
                    alert('React toastify');
                    return;
                }
                setMovies(data.results);
            })
            .catch(error => console.log(error.message));

    }, [query])

    const handleFormSubmit = query => {
        setQuery(query);
    }

    return (
        <>
            <SearchForm onSubmit={handleFormSubmit} />
            {movies && <MoviesList movies={movies} />}
        </>
    )
}

export default MoviesView;