import styled from "@emotion/styled";

export const Form = styled.form`
    height: 30px;
`;

export const Input = styled.input`
    width: 200px;
    height: 100%;
    outline: none;
    border: 2px solid grey;
    &::placeholder {
        margin-left: 6px;
        color: #e02141;
        opacity: 1;
        transition: all 0.2s ease-in;
    }
    &:focus::placeholder {
        opacity: 0;
    }
    &:focus {
        border: 2px solid #e02141;
    }
`;

export const Button = styled.button`
    width: auto;
    height: 100%;
    padding: 5px;
    color: grey;
    background-color: #fff;
    border: 2px solid grey;
    border-left: none;
    transition: all 0.2s ease-in;

    &:hover,
    &:focus {
        color: #fff;
        border: 2px solid #e02141;
        background-color: #e02141;
    }
`;