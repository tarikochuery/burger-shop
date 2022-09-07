import styled from "styled-components";

export const HeaderStyle = styled.header`
  height: 80px;
  padding: 5px 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #eee;

  @media(max-width: 630px) {
    flex-direction: column;
    width: 100%;
    height: 110px;
    padding: 10px 5px;
    min-width: 300px;
  }
`