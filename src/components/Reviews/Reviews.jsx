import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchReview } from "services/ApiService";
import { List, Item, Title, Content } from "./Rewiews.styled";

const Rewiews = () => {
    const [reviews, setReviews] = useState([]);
    const { movieId } = useParams();

    useEffect(() => {
        fetchReview(movieId).then(data => setReviews(data.results));
    }, [movieId])

    return (
        <>
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
                <h3>Not information found</h3>
            )}
        </>
    );
}

export default Rewiews;