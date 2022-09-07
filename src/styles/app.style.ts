import styled from "styled-components";

export const AppStyle = styled.div`
  padding: 25px 100px;
  display: flex;

  @media(max-width: 780px) {
    flex-direction: column;
    padding: 25px 5px;
    width: 100%;
    align-items: center;
  }
`