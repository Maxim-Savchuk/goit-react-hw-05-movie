import { NavLink } from "react-router-dom";
import styled from "@emotion/styled";

export const Button = styled.button`
    font-size: 16px;
    padding: 0 15px;
    width: auto;
    height: 24px;
    color: #020202;
    border: 2px solid #e02141;
    background-color: #fff;
    transition: all 0.3s ease-in;
    &:hover,
    &:focus {
        color: #fff;
        background-color: #e02141;
    }
`;

export const InformTitle = styled.h2`
    font-size: 26px;
`;

export const LinksContainer = styled.div`
    display: flex;
    margin-bottom: 16px;
`;

export const StyledNavLink = styled(NavLink)`
    padding: 0 8px;
    width: auto;
    height: auto;
    text-decoration: none;
    color: #020202;
    border: 2px solid #e02141;
    background-color: #fff;
    transition: all 0.3s ease-in;
    &:hover,
    &:focus,
    &.active {
        color: #fff;
        background-color: #e02141;
    }
    &:not(:last-child) {
        margin-right: 15px;
    }
`;