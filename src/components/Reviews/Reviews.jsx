import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchReview } from "services/ApiService";
import NotInformFound from "components/NotInformFound/NotInformFound";

import { Container, List, Item, Title, Content } from "./Reviews.styled";

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    const { movieId } = useParams();

    useEffect(() => {
        fetchReview(movieId)
            .then(data => setReviews(data.results))
            .catch(console.log);
    }, [movieId])

    return (
        <Container>
            {reviews.length !== 0 ? (
                <List>
                    {reviews.map(({ id, author, content }) => {
                        return (
                            <Item key={id}>
                                <Title>Author: {author}</Title>
                                <Content>{content}</Content>
                            </Item>
                        )
                    })}
                </List>
            ) : (
                <NotInformFound />
            )}
        </Container>
    );
}

export default Reviews;