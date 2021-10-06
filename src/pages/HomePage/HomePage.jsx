import { useState, useEffect } from "react";
import { fetchTrendingMovies } from "services/ApiService";
import MoviesList from "components/MoviesList/MoviesList";


import { Container } from "./HomePage.styled";

const HomePage = () => {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        if (movies.length !== 0) {
            return;
        }
        fetchTrendingMovies()
            .then(data => setMovies(data.results))
            .catch(error => console.log(error.message));
    }, [movies])

    return (
        <Container>
            <h1>Trending films</h1>
            <MoviesList movies={movies} />
        </Container>
    );
};

export default HomePage;