import styled from "styled-components";

export const SearchBarStyle = styled.div`
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 5px;
  display: flex;
  justify-content: space-between;

  input {
    border: none;
    margin-right: 2px;
    width: 70%;
    padding: 10px;
    outline: none;
  }

  button {
    width: 100px;
    padding: 12px 0;
    background-color: #51A65D;
    color: #fff;
    border: none;
    border-radius: 10px;
    cursor: pointer;
  }
`