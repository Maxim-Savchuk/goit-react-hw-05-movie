import { useState, useEffect, lazy, Suspense } from "react";
import { Route, useLocation, useParams, useRouteMatch, useHistory } from "react-router-dom";
import { fetchMovieById } from "services/ApiService";
import { LoaderSpinner } from 'components/Loader/Loader';
import Movie from "components/Movie/Movie";
import NotInformFound from "components/NotInformFound/NotInformFound";

import { Container, Button, LinksContainer, StyledNavLink, InformTitle } from "./MovieDetailsPage.styled";

const Cast = lazy(() => import("components/Cast/Cast" /* webpackChunkName: 'Cast' */));
const Reviews = lazy(() => import("components/Reviews/Reviews" /* webpackChunkName: 'Review' */));

const MovieDetailsPage = () => {
    const { movieId } = useParams();
    const { url, path } = useRouteMatch();
    const [movie, setMovie] = useState(null);
    const [isLoading, setIsloading] = useState(false)
    const history = useHistory();
    const location = useLocation();

    useEffect(() => {
        setIsloading(true);
        fetchMovieById(movieId)
            .then(setMovie)
            .catch(error => console.log(error.message))
            .finally(() => setIsloading(false));
    }, [movieId]);

    const handleClick = () => {
        history.push(location.state?.from || "/");
    };

    return (
        <Container>
            {isLoading && <LoaderSpinner />}
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

                        <Suspense fallback={<LoaderSpinner />}>
                            <Route path={path + '/cast'}>
                                <Cast />
                            </Route>
                            <Route path={path + '/reviews'}>
                                <Reviews />
                            </Route>
                        </Suspense>
                    </div>
                </>
            ) : (
                <NotInformFound />
            )}
        </Container>
    )
}

export default MovieDetailsPage;