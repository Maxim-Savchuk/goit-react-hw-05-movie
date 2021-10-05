import styled from "@emotion/styled";

export const Container = styled.div`
    display: flex;
    margin-top: 14px;
`;

export const Description = styled.div`
    margin-left: 60px;
`;

export const Title = styled.h1`
    font-size: 38px;
    margin-bottom: 26px;
`;

export const Genre = styled.span`
    &:not(:last-of-type):after {
        content: ',';
        color: #020202;
        margin-right: 4px;
    }
`;

export const Votes = styled.span`
    background-color: #e02141;
    color: #fff;
    width: auto;
    padding: 0 4px;
    border-radius: 4px;
    margin-left: 6px;
`;