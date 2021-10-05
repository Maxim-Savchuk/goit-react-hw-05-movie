import Image from 'images/default.png';

import { Container, Description, Title, Genre, Votes } from 'components/Movie/Movie.styled';

const Movie = ({ movie }) => {
    const { poster_path, title, vote_average, overview, genres } = movie;
    const imageUrl = 'https://image.tmdb.org/t/p/w300/';

    return (
        <Container>
            <img
                src={poster_path !== null ? `${imageUrl}${poster_path}` : Image}
                alt={title}
            />
            <Description>
                <Title>{title}</Title>
                <p>User Score: <Votes>{vote_average}</Votes></p>
                <h2>Overview: </h2>
                <span>{overview}</span>
                <h2>Genres: </h2>
                {genres &&
                    genres.map(({ id, name }) => {
                        return <Genre key={id}> {name} </Genre>;
                    })}
            </Description>
        </Container>
    )
}

export default Movie;