import { Container, StyledNavLink } from "./Navigation.styled";

const Navigation = () => {
    return (
        <Container>
            <StyledNavLink exact to="/" activeClassName="active">Home</StyledNavLink>
            <StyledNavLink to="/movies" activeClassName="active">Movies</StyledNavLink>
        </Container>
    );
};

export default Navigation;