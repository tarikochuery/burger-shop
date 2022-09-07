import styled from "styled-components";

export const CartItemStyle = styled.div`
  background-color: transparent;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 5px;

  .img-container {
    width: 25%;
    background-color: #ccc;
    padding: 5px;
    border-radius: 5px;
  }

  .img-container img {
    max-width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .item-info {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    align-self: stretch;
    gap: 5px;
  }

  button {
    border: none;
    background-color: #ccc;
    padding: 3px;
    cursor: pointer;
    border-radius: 3px;
  }
`