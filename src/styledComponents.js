import styled from "styled-components/macro"

export const Container = styled.div`
    display: flex;
    height: 100vh;
`
export const Group = styled.div`
    display: flex;
    flex-direction: column;
    width:100%;
    paddind: 10px;
`
export const MatchDiv = styled.div`
    background-color: #fafafa;
    height: 75px;
    width: 350px;
    border: 1px solid #0070c1;
    border-radius: 8px;
    margin-bottom: ${(props) => props.margin};
    flex-shrink:0;
`
