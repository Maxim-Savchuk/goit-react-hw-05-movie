// import { Link } from "react-router-dom";

const MoviesList = ({ movies }) => {
    return (
        <ul>
            {movies.map(({ id, title, name }) =>
                <li key={id}>
                    {title ?? name}
                </li>
            )}
        </ul>
    )
}

export default MoviesList;