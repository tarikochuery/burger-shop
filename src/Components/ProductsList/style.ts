import styled from "styled-components";

export const ProductsListStyle = styled.div`
  width: 80%;
  min-width: 350px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  height: fit-content;

  @media(max-width: 780px) {
    margin-bottom: 10px;
  }
`