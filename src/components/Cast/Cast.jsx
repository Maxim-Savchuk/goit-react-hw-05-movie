import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchCast } from "services/ApiService";
import defaultImage from 'images/default.png';

import { Container, List, Item, Image, Name } from "./Cast.styled";

const Cast = () => {
    const [cast, setCast] = useState([]);
    const { movieId } = useParams();


    useEffect(() => {
        fetchCast(movieId).then(data => setCast(data.cast));
    }, [movieId]);

    const imageUrl = 'https://image.tmdb.org/t/p/w300/';

    return (
        <Container>
            {cast.length !== 0 ? (
                <List>
                    {cast.map(({ id, name, profile_path }) => {
                        return (
                            <Item key={id}>
                                <Image
                                    src={
                                        profile_path !== null ? `${imageUrl}${profile_path}` : defaultImage
                                    }
                                    alt={name}
                                />
                                <Name>{name}</Name>
                            </Item>
                        )
                    })}
                </List>
            ) : (
                <h3>Not information found</h3>
            )}
        </Container>
    );
}

export default Cast;