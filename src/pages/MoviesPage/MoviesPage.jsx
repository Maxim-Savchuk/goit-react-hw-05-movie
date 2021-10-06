import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { toast } from 'react-toastify';
import { fetchMoviesByQuery } from "services/ApiService";
import MoviesList from "components/MoviesList/MoviesList";
import SearchForm from "components/SearchForm/SearchForm";

import { Container } from './MoviesPage.styled';

const MoviesPage = () => {
    const [movies, setMovies] = useState([]);
    const location = useLocation();

    useEffect(() => {
        const searchQuery = new URLSearchParams(location.search).get('query');
        if (location.search === '') {
            return;
        }
        searchMovies(searchQuery);
    }, [location.search]);

    const searchMovies = query => {
        fetchMoviesByQuery(query)
            .then(data => {
                if (data.results.length === 0) {
                    toast.error('Ooops, no movies found.');
                    return;
                }
                setMovies(data.results);
            })
            .catch(error => console.log(error.message));
    }

    return (
        <Container>
            <SearchForm />
            {movies && <MoviesList movies={movies} />}
        </Container>
    )
}

export default MoviesPage;