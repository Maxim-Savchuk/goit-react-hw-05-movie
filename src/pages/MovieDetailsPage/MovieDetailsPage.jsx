import { useState, useEffect } from "react";
import { Route, useLocation, useParams, useRouteMatch, useHistory } from "react-router-dom";
import { fetchMovieById } from "services/ApiService";
import Cast from "components/Cast/Cast";
import Rewiews from "components/Reviews/Reviews";
import Movie from "components/Movie/Movie";

import { Button, LinksContainer, StyledNavLink, InformTitle } from "./MovieDetailsPage.styled";

const MovieDetailsPage = () => {
    const { movieId } = useParams();
    const { url, path } = useRouteMatch();
    const [movie, setMovie] = useState('');
    const history = useHistory();
    const location = useLocation();

    useEffect(() => {
        fetchMovieById(movieId)
            .then(setMovie)
            .catch(error => console.log(error.message));
    }, [movieId]);

    const handleClick = () => {
        history.push(location.state?.from || "/");
    };

    return (
        <div>
            <Button onClick={handleClick} type="button">Go back</Button>
            {movie ? (
                <>
                    <Movie movie={movie} />
                    <div>
                        <InformTitle>Additional information</InformTitle>
                        <LinksContainer>
                            <StyledNavLink
                                to={{
                                    pathname: `${url}/cast`,
                                    state: { from: location.state.from },
                                }}
                                activeClassName="active">
                                <p>Cast</p>
                            </StyledNavLink >
                            <StyledNavLink
                                to={{
                                    pathname: `${url}/reviews`,
                                    state: { from: location.state.from },
                                }}
                                activeClassName="active">
                                <p>Reviews</p>
                            </StyledNavLink>
                        </LinksContainer>

                        <Route path={path + '/cast'}>
                            <Cast />
                        </Route>
                        <Route path={path + '/reviews'}>
                            <Rewiews />
                        </Route>
                    </div>
                </>

            ) : (
                <h2>{`We can't find this film... Sorry :(`}</h2>
            )}
        </div>
    )
}

export default MovieDetailsPage;