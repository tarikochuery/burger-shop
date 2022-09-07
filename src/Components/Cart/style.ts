import styled from "styled-components";

export const CartStyle = styled.div`
  width: 30%;
  min-width: 300px;

  .cart-header {
    background-color: #51A65D;
    color: #fff;
    padding: 12px;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }

  .empty-cart {
    background-color: #eee;
    text-align: center;
    padding: 40px;
  }

  .empty-cart h3 {
    margin-bottom: 10px;
  }

  .empty-cart p{
    color: #ccc;
  }

  .cart-items {
    padding: 20px 10px;
    background-color: #eee;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .items-container {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .total {
    display: flex;
    justify-content: space-between;
  }

  .cart-items > button {
    padding: 15px;
    border-radius: 10px;
    border: 1px solid #ccc;
    cursor: pointer
  }

  @media(max-width: 780px) {
    width: 100%;
  }
`