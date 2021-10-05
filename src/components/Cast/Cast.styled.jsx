import styled from "@emotion/styled";

export const Container = styled.div`
  margin: 0 auto;
`;

export const List = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    list-style: none;
    margin-left: -30px;
    margin-top: -30px;
`;

export const Item = styled.li`
    flex-basis: calc(100% / 5 - 30px);
    margin-left: 30px;
    margin-top: 30px;
    margin-bottom: 0;
    border-radius: 4px;
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
  1px 4px 6px rgba(0, 0, 0, 0.16);
`;

export const Image = styled.img`
    width: 100%;
    height: 300px;
    margin-bottom: 8px;
`;

export const Name = styled.p`
    font-weight: 500;
    margin-bottom: 5px;
    margin-left: 10px;
`;