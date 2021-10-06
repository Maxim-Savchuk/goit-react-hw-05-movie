import PropTypes from 'prop-types';
import { useLocation } from "react-router-dom";
import { List, Item, StyledLink } from "./MoviesList.styled";

const MoviesList = ({ movies }) => {
    const location = useLocation();

    return (
        <List>
            {movies.map(({ id, title, name }) =>
                <Item key={id}>
                    <StyledLink to={{
                        pathname: `/movies/${id}`,
                        state: { from: location },
                    }}>
                        {title ?? name}
                    </StyledLink>
                </Item>
            )}
        </List>
    )
}

MoviesList.propTypes = {
    movies: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            title: PropTypes.string,
            name: PropTypes.string,
        }),
    ),
}

export default MoviesList;