import MoviesList from "components/MoviesList/MoviesList";
import { useState, useEffect } from "react";
import { fetchTrendingMovies } from "services/ApiService";

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
        <>
            <h1>Trending films</h1>
            <MoviesList movies={movies} />
        </>
    );
};

export default HomePage;