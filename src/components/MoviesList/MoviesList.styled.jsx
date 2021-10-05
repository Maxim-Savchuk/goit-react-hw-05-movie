import { Link } from "react-router-dom";
import styled from "@emotion/styled";

export const List = styled.ul`
  margin-top: 16px;
  padding-left: 30px;
  list-style-type: circle;
`;

export const Item = styled.li`
    &:not(:last-child) {
        margin-bottom: 3px;
    }
`;

export const StyledLink = styled(Link)`
    color: #020202;
    text-decoration: none;
    transition: all 0.2s ease-in;

    &:hover,
    &:focus {
        color: #e02141;
        text-decoration: underline;
        
    }
`;