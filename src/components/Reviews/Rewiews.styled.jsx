import styled from "@emotion/styled";

export const List = styled.ul`
    list-style: none;
`;

export const Item = styled.li`
    &:not(:last-child){
         margin-bottom: 20px;
    }
`;

export const Title = styled.h3`
    font-size: 22px;
    margin-bottom: 10px;
`;

export const Content = styled.p`
    margin-left: 20px;
`;