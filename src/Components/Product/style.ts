import styled from "styled-components";

export const ProductStyle = styled.div`
  width: 30%;
  min-width: 300px;
  border: 1px solid #ccc;
  border-radius: 5px;
  display: flex;
  flex-direction: column;

  .img-container {
    width: 100%;
    background-color: #eee;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .img-container img {
    width: 50%;
  }

  .product-info {
    display: flex;
    flex-direction: column;
    padding: 10px;
    gap: 5px;
  }

  .product-info .category {
    color: #ccc
  }

  .product-info .price {
    color: #00CC00
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